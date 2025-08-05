import { useState } from 'react';
import { formatDate } from '../utils/dateUtils';

const CommentList = ({ comments, onCommentSubmit, refreshComments }) => {
    // useState: Keep track of user comment/input
    const [comment, setComment] = useState('');

    // Function: Add comment if not empty & add reset textbox
    const handleSubmit = (e) => {
        // Edge Case: Prevent default actions
        e.preventDefault();

        // Condition: Do nothing if empty
        if (!comment.trim()) { return };

        onCommentSubmit(comment);
        setComment('');
        refreshComments();
    };

    return (
        <div className="comment-list-container">
            <div className='comment-list'>
                {comments.map(c => (
                    <div className="comment" key={c.id}>
                        {c.content}
                        <small>({formatDate(c.created_at)})</small>
                    </div>
                ))}
            </div>

            <form className='comment-form' onSubmit={handleSubmit}>

                <textarea
                    className="comment-form-input"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Leave Comment"
                />

                <button type="submit">🖋️</button>
            </form>
        </div>
    );
}

export default CommentList;