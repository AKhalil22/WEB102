// Import: React router, hooks, supabase connection, & utils
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/client"; 
import { formatDate } from "../utils/dateUtils";

const PostCard = ({ id, title, content, image_url, created_at, upvotes, showDetails }) => {
    // Init: Navigation Object
    const navigate = useNavigate();

    // Function: Load Detail/Edit page when user clicks pet card
    const handleClick = () => {
        navigate(`/read/${id}`);
    };

    // Function: Handle upvote button click
    const handleUpvote = async (e) => {
        e.stopPropagation(); // Prevent triggering card click

        const newUpvotes = upvotes + 1;

        // Update database
        const { error } = await supabase
            .from('posts') // Replace with your table name
            .update({ upvotes: newUpvotes }) // Update the upvotes column
            .eq('id', id); // Find the post with the matching ID

        if (error) {
            console.error("Failed to update upvotes in database:", error);
        } else {
            console.log("Database successfully updated.");
        }
    };

    return (
        // Allow users to click a card & show detailed view though prevent from clicking again in detailed view
        <div className="card-container" onClick={showDetails ? null : handleClick}>
            <h2 className="card-date">{formatDate(created_at)}</h2>
            <h1 className="card-name">{title}</h1>
            {showDetails && (
                <div className="card-details-container">
                    <img src={image_url} alt={title} />
                    <p>{content}</p>
                </div>
            )}
            <button className="upvote-button" onClick={handleUpvote}>{upvotes} 👍</button>
        </div>
    );
}

export default PostCard;