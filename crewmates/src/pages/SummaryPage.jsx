import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import PetCard from "../components/PetCard";

function SummaryPage() {
  // Init: useState to store fetched pets from database (Supabase)
  const [petsData, setPetsData] = useState([]);

  // useEffect: Fetch pets from database & assign to useState once page renders
  useEffect(() => {
    // Function: Create async call to database to fetch & assign pets to useState
    const fetchPets = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select()
        .order('created_at', { descending: true })

      if (error) {
        console.error("Error fetching pets:", error)
      } else {
        // Update list of pets
        setPetsData(data)
      } 
    };

    // Init Function Call
    fetchPets();
  }, []);

  return (
    <div className="summary-page-container">
        <ul className="summary-page-list">
          <h1>Pets</h1>
          {petsData &&
            petsData.map((petData) => (
              <PetCard
                name={petData.name}
                breed={petData.breed}
                energy={petData.energy}
                color={petData.color}
                image_url={petData.image_url}
              />
            ))}
        </ul>
    </div>
  );
}

export default SummaryPage;