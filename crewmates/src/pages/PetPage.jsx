import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import PetCard from "../components/PetCard";
import PetForm from "../components/PetForm";

function PetPage() {
  // Extract pet id
  const { id } = useParams();

  // useState: Store fetched pet data, editing mode, formData state
  const [petData, setPetData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: petData.name,
    breed: petData.breed,
    energy: petData.energy,
    color: petData.color
  });

  // Init: Nagivator Object
  const navigate = useNavigate();

  // useEffect: Fetch corresponding pet details from id passed from url
  useEffect(() => {
    // Function: Fetch pet's data from supabase
    const fetchPetDetails = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select()
        .eq('id', id)
        .single();

      // Condition: setPetData or throw error
      if (error) {
        console.log("Error fetching pet details:", error);
      } else {
        setPetData(data);
      }
    };

    fetchPetDetails();
  }, [id]);

  // Function: Delete pet with corresponding id
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this pet?")

    // Condition: Break early if denies deletion
    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase
      .from('pets')
      .delete()
      .eq("id", id);

    // Condition: Throw error if not successful otherwise reload page
    if (error) {
      console.error("Deletion Failed:", error.message)
    } else {
      navigate("/read"); // Navigate back to summary page
    }
  }

  // Function: Update current pet details in database
  const handleEdit = async () => {

  }

  return (
    <div className="pet-page-container">
      {petData ? (
        {isEditing ? (
          <PetForm/>
        ) : (
          <div className="pet-page-inner">
            <PetCard
              id={petData.id}
              name={petData.name}
              breed={petData.breed}
              energy={petData.energy}
              color={petData.color}
              image_url={"." + petData.image_url}
            />
            <div className="pet-buttons">
              <button onClick={handleEdit}>✍️ Edit Pet</button>
              <button onClick={handleDelete}>🗑️ Delete Pet</button>
            </div>
          </div>
        )}
      ) : (
        <p>Loading pet details...</p>
      )}
    </div>
  );
}

export default PetPage;