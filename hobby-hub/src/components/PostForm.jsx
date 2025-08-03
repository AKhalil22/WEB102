import { useState } from "react";
import { supabase } from "../supabase/client";

function PostForm() {
    // Init: useState to keep track of needed info for creating posts
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image_url: '',
    });

    // Function: Update formData when user enter's in input fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Unpack corresponding field name & new value
        setFormData((prevData) => ({
            ...prevData, // Shallow copy
            [name]: value.trim(), // Add updated value
        }));
    };

    // Function: Send updates to database for newly create post
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload (control user interations)

        // Create Operation: Supabase Logic
        const { data, error } = await supabase.from("posts").insert([
            {
                title: formData.title,
                content: formData.content,
                image_url: formData.image_url,
            }
        ]);

        // Conditions: Log Success/Failure
        if (error) {
            console.log("Insert Failed:", error.message);
        } else {
            console.log("Pet Added:", data);
        }
    };

    return (
        <div className="page-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create a post!</h1>

                <input
                    type="text"
                    className="form-input"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Title"
                />
                <input
                    type="text"
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

                <button className="form-button" type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default PostForm;