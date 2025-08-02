// Import: React hooks & Supabase connection
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

// Import: Components
import PostCard from "../components/PostCard";
import SortBar from "../components/SortBar";

function HomePage() {
  // useState: Store fetched posts from database + set sorting method
  const [postsData, setPostsData] = useState([]);
  const [dateFilter, setDateFilter] = useState(""); // Default == Most Popular

  // useEffect: Fetch posts from database & assign to useState once page renders
  useEffect(() => {
    // Function: Create async call to database to fetch & assign posts to useState
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .order('created_at', { descending: true })

      if (error) {
        console.error("Error fetching posts:", error)
      } else {
        // Update list of posts
        setPostsData(data)
      } 
    };

    // Init Function Call
    fetchPosts();
  }, []);

  return (
    <div className="page-container">
        <SortBar setDateFilter={setDateFilter}/>
        <h1>Home Page</h1>
        <ul className="page-list">
          {postsData &&
            postsData.map((postsData) => (
              <PostCard
                id={postsData.id}
                title={postsData.title}
                content={postsData.content}
                image_url={postsData.image_url}
                created_at={postsData.created_at}
                upvotes={postsData.upvotes}
                showDetails={false}
              />
            ))}
        </ul>
    </div>
  );
}

export default HomePage;