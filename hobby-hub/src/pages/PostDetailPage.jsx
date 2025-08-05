// Import: React router, hooks, & Supabase connection
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

// Import: Components
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import CommentList from "../components/CommentList";

function PostDetailPage() {
  // Extract post id
  const { id } = useParams();

  // useState: Store fetched post data, comments editing mode
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Init: Navigator Object
  const navigate = useNavigate();

  // useEffect: Fetch corresponding post details from id passed from URL
  useEffect(() => {
    fetchPostDetails();
    fetchComments();
  }, [id]);

  // Function: Fetch post details for corresponding id
  const fetchPostDetails = async () => {
    const { data, error } = await supabase
      .from('posts') // Update table name
      .select()
      .eq('id', id)
      .single();

    if (error) {
      console.log("Error fetching post details:", error);
    } else {
      setPostData(data);
    }
  };

  // Function: Fetch comments for corresponding post with id
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select()
      .eq('post_id', id)
      .order('created_at', {ascending: false});
    
    if (error) {
      console.log("Error fetching comments for post:", error);
    } else {
      setComments(data);
    }
  }

  // Function: Delete post with corresponding id
  const handleDelete = async () => {
    // Confirm Deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    // Delete comments with corresponding post with 'id' from database
    const { error: commentError} = await supabase
      .from('comments')
      .delete()
      .eq("post_id", id)

      if (commentError) {
        console.error("Failed to delete comments:", commentError.message);
        return;
      }

    // Delete post with 'id' from database
    const { error: postError } = await supabase
      .from('posts') // Update table name
      .delete()
      .eq("id", id);

    if (postError) {
      console.error("Failed to delete post:", postError.message);
    } else {
      navigate("/"); // Navigate back to summary page
    }
  };

  // Function: Toggle editing mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Function: Handle comment submission
  const handleAddComment = async (content) => {
    const { error } = await supabase
      .from('comments')
      .insert([{post_id: id, content}]);

    if (error) {
      console.error("Deletion Failed:", error.message);
    } else {
      navigate(`/read/${postData.id}`); // Navigate back to summary page
    }
  }

  // Function: Update existing post
  const handlePostUpdate = async(updatedData) => {
    const { error } = await supabase
      .from('posts')
      .update(updatedData)
      .eq("id", id);

    if (error) {
      console.error("Failed to update post:", error.message)
    } else {
      // Exist editing mode & refresh post data
      setIsEditing(false); 
      fetchPostDetails();
    }
  }

  return (
    <div className="page-container">
      {postData ? (
        isEditing ? (
          <PostForm 
            initialValues={{
              title: postData.title,
              content: postData.content,
              image_url: postData.image_url,
            }}
            isEditing={true}
            handlePostUpdate={handlePostUpdate}
            />
        ) : (
          <div className="detail-page-content">
            <PostCard
                id={postData.id}
                title={postData.title}
                content={postData.content}
                image_url={postData.image_url}
                created_at={postData.created_at}
                upvotes={postData.upvotes}
                showDetails={true}
            />
            <div className="detail-buttons">
              <button onClick={handleEdit}>✍️ Edit</button>
              <button onClick={handleDelete}>🗑️ Delete</button>
            </div>
            <CommentList comments={comments} onCommentSubmit={handleAddComment} refreshComments={fetchComments}/>
          </div>
        )
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
}

export default PostDetailPage;