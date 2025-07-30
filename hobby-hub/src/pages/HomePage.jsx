import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import PostCard from "../components/PostCard";

function HomePage() {
  // Init: useState to store fetched pets from database (Supabase)
  const [postsData, setPostsData] = useState([]);

  // useEffect: Fetch pets from database & assign to useState once page renders
  useEffect(() => {
    // Function: Create async call to database to fetch & assign pets to useState
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .order('created_at', { descending: true })

      if (error) {
        console.error("Error fetching posts:", error)
      } else {
        // Update list of pets
        setPostsData(data)
      } 
    };

    // Init Function Call
    fetchPosts();
  }, []);

  return (
    <div className="home-page-container">
        <ul className="home-page-list">
          {postsData &&
            postsData.map((postsData) => (
              <PostCard
                id={postsData.id}
                title={postsData.title}
                created_at={postsData.created_at}
                upvotes={postsData.upvotes}
              />
            ))}
        </ul>
    </div>
  );
}

export default HomePage;