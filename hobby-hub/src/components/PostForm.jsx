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
                <h1>Create your own post!</h1>
                <label className="form-label">Title: <input type="text" name="title" value={formData.name} onChange={handleChange} required></input></label>
                <label className="form-label">Breed: <input type="text" name="content" value={formData.breed} onChange={handleChange} required></input></label>
                <label className="form-label">Energy Level: <input type="text" name="image_url" value={formData.energy} onChange={handleChange} required></input></label>
                <button className="form-button" type="submit">Create Pet</button>
            </form>
        </div>
    );
}

export default PostForm;