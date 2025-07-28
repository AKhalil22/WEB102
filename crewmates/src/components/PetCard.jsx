const PetCard = ({name, breed, energy, color, image_URL}) => {
    return (
        <div className="pet-card-container">
            {name}
        </div>
    );
}

export default PetCard;