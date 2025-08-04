import { useNavigate } from "react-router-dom";

const PostCard = ({ id, title, content, image_url, created_at, upvotes, showDetails }) => {
    // Init: Navigvation Object
    const navigate = useNavigate();

    // Function: Load Detail/Edit page when user clicks pet card
    const handleClick = () => {
        navigate(`/read/${id}`);
    };

    // Function: Format the created_at date 
    const formatDate = (created_at) => {
        const createdDate = new Date(created_at);
        const now = new Date();
        const diffInSeconds = Math.floor((now - createdDate) / 1000);

        // Conditions: Set appropriate posted @ date
        if (diffInSeconds < 60) {
            return "Posted a few seconds ago";
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `Posted ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `Posted ${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 604800) {
            const days = Math.floor(diffInSeconds / 86400);
            return `Posted ${days} day${days > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 2592000) {
            const weeks = Math.floor(diffInSeconds / 604800);
            return `Posted ${weeks} week${weeks > 1 ? "s" : ""} ago`;
        } else if (diffInSeconds < 31536000) {
            const months = Math.floor(diffInSeconds / 2592000);
            return `Posted ${months} month${months > 1 ? "s" : ""} ago`;
        } else {
            const years = Math.floor(diffInSeconds / 31536000);
            return `Posted ${years} year${years > 1 ? "s" : ""} ago`;
        }
    }

    return (
        <div className="card-container" onClick={handleClick}>
            <h2 className="card-date">{formatDate(created_at)}</h2>
            <h1 className="card-name">{title}</h1>
            {showDetails && (
                <div className="card-details-container">
                    <img src={image_url}/>
                    <p>{content}</p>
                </div>
            )}
            <button className="upvote-button" onClick={(e) => {e.stopPropagation()}}>{upvotes} 👍</button>
        </div>
    );
}

export default PostCard;