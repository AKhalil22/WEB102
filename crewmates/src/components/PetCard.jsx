const PetCard = ({name, breed, energy, color, image_url}) => {
    return (
        <div className="pet-card-container" style={{backgroundColor: color}}>
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