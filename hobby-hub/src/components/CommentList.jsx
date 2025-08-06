import { useState, useEffect } from 'react';
import { formatDate } from '../utils/dateUtils';

const CommentList = ({ comments, onCommentSubmit, refreshComments }) => {
    const [comment, setComment] = useState('');

    // useEffect: Fetch latest comments whenever onCommentSubmit changes (e.g., after a new comment)
    useEffect(() => {
        refreshComments();
    }, [onCommentSubmit, refreshComments]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comment.trim()) return;
        onCommentSubmit(comment);
        setComment('');
        // No need to call refreshComments here, useEffect will handle it
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
                    className="form-input"
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