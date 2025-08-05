// Import: React router, hooks, supabase connection, & utils
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabase/client"; 
import { formatDate } from "../utils/dateUtils";

const PostCard = ({ id, title, content, image_url, created_at, upvotes, showDetails }) => {
    // Init: Navigation Object
    const navigate = useNavigate();

    // useState: Track current upvotes & if user has upvoted
    const [currentUpvotes, setCurrentUpvotes] = useState(upvotes || 0);
    const [hasUpvoted, setHasUpvoted] = useState(false);

    // Function: Load Detail/Edit page when user clicks pet card
    const handleClick = () => {
        navigate(`/read/${id}`);
    };

    // Function: Handle upvote/unvote button click
    const handleUpvote = async (e) => {
        e.stopPropagation(); // Prevent triggering card click

        let newUpvotes = currentUpvotes;

        if (hasUpvoted) {
            // Unvote
            newUpvotes -= 1;
        } else {
            // Upvote
            newUpvotes += 1;
        }

        // Update state
        setCurrentUpvotes(newUpvotes);
        setHasUpvoted(!hasUpvoted);

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
        // Allow users to click a card & show detailed view though prevent from cli</div>cking again in detailed view
        <div className="card-container" onClick={showDetails ? null : handleClick}>
            <h2 className="card-date">{formatDate(created_at)}</h2>
            <h1 className="card-name">{title}</h1>
            {showDetails && (
                <div className="card-details-container">
                    <img src={image_url}/>
                    <p>{content}</p>
                </div>
            )}
            <button className="upvote-button" onClick={handleUpvote}>{currentUpvotes} 👍</button>
        </div>
    );
}

export default PostCard;