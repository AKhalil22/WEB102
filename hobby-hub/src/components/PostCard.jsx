import { useNavigate } from "react-router-dom";

const PostCard = ({ id, title, content, image_url, created_at, upvotes, showDetails }) => {
    // Init: Navigvation Object
    const navigate = useNavigate();

    // Function: Load Detail/Edit page when user clicks pet card
    const handleClick = () => {
        navigate(`/post/${id}`);
    };

    return (
        <div className="card-container" onClick={handleClick}>
            <h2 className="card-date">Posted @: {created_at}</h2>
            <h1 className="card-name">{title}</h1>
            {showDetails && (
                <div className="card-details-container">
                    <img src={image_url}/>
                    <p>{content}</p>
                </div>
            )}
            <button className="upvote-button">x {upvotes}</button>
        </div>
    );
}

export default PostCard;