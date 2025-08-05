import PostForm from "../components/PostForm.jsx";

function CreatePostPage() {
  return (
    <div className="create-page-container">
      <PostForm isEditing={false}/>
    </div>
  );
}

export default CreatePostPage;