import { useNavigate } from "react-router-dom";

const PetCard = ({ id, name, breed, energy, color, image_url }) => {
    // Init: Navigvation Object
    const navigate = useNavigate();

    // Function: Load Detail/Edit page when user clicks pet card
    const handleClick = () => {
        navigate(`/pets/${id}`);
    };

    return (
        <div className="pet-card-container" style={{backgroundColor: color}} onClick={handleClick}>
            <h1 className="pet-card-name">{name}</h1>
            <img src={image_url}/>
            <div className="pet-tag-container">
                <h2>{breed}</h2>
                <h2>{energy}</h2>
            </div>
        </div>
    );
}

export default PetCard;