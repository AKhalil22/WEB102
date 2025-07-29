import { useState } from "react";
import { supabase } from "../supabase/client";
import ImageSlider from "./ImageSlider";

function PetForm() {
    // Init: useState to keep track of needed info for creating pets
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        energy: '',
        color: '',
    });

    // Init: useState to keep track of selected pet image
    const [petImage, setPetImage] = useState('');

    // Callback: Update pet image w/selected one from ImageSlider component
    const handleImageSelect = (imageUrl) => {
        setPetImage(imageUrl);
    }

    // Function: Update formData when user enter's in input fields
    const handleChange = (e) => {
        const { name, value } = e.target; // Unpack corresponding field name & new value
        setFormData((prevData) => ({
            ...prevData, // Shallow copy
            [name]: value.trim(), // Add updated value
        }));
    };

    // Function: Send updates to data base for newly create pet
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload (control user interations)

        // Supabase Logic
        const { data, error } = await supabase.from("pets").insert([
            {
                name: formData.name,
                breed: formData.breed,
                energy: formData.energy,
                color: formData.color,
                image_url: petImage,
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
        <div className="pet-form-container">
            <form className="pet-form" onSubmit={handleSubmit}>
                <h1>Create a pet!</h1>
                <label className="pet-form-label">Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required></input></label>
                <ImageSlider onImageSelect={handleImageSelect} />
                <label className="pet-form-label">Breed: <input type="text" name="breed" value={formData.breed} onChange={handleChange} required></input></label>
                <label className="pet-form-label">Energy Level: <input type="text" name="energy" value={formData.energy} onChange={handleChange} required></input></label>
                <label className="pet-form-label">Color: <input type="text" name="color" value={formData.color} onChange={handleChange} required></input></label>
                <button className="pet-form-button" type="submit">Create Pet</button>
            </form>
        </div>
    );
}

export default PetForm;