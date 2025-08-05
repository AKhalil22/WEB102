import { useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function PostForm({ initialValues = {title: '', content: '', image_url: ''}, isEditing, handlePostUpdate}) {
    // Init: useState to keep track of needed info for creating posts
    const [formData, setFormData] = useState(initialValues);

    // Init: useNavigate to redirect user to homepage after post creation
    const navigate = useNavigate();

    // Function: Update formData when user enter's in input fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Unpack corresponding field name & new value
        setFormData((prevData) => ({
            ...prevData, // Shallow copy
            [name]: value, // Add updated value
        }));
    };

    // Function: Create a new post
    const handleCreatePost = async () => {
        const { error } = await supabase.from("posts").insert([
            {
                title: formData.title,
                content: formData.content,
                image_url: formData.image_url,
            }
        ]);

        if (error) {
            alert("Failed to create post: " + error.message);
        } else {
            alert("Post created successfully!");
            navigate("/");
        }
    }

    // Function: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await handlePostUpdate(formData);
        } else {
            await handleCreatePost();
        }
    };

    return (
        <div className="page-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>{isEditing ? "Edit Post" : "Create a post!"}</h1>

                <input
                    type="text"
                    className="form-input"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Title"
                />
                <textarea
                    className="form-input"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Content (Optional)"
                />
                <input
                    type="text"
                    className="form-input"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    placeholder="Image URL (Optional)"
                />

                <button className="form-button" type="submit">
                    {isEditing ? "Update Post" : "Create Post"}
                </button>
            </form>
        </div>
    );
}

export default PostForm;