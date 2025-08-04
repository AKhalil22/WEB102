// Import: React hooks & Supabase connection
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";

// Import: Components
import SearchBar from "../components/SearchBar";
import SortBar from "../components/SortBar";
import PostCard from "../components/PostCard";

function HomePage() {
  // useState: Store fetched posts from database + set sorting method
  const [postsData, setPostsData] = useState([]);
  const [dateFilter, setDateFilter] = useState(""); // Default == Most Popular
  const [search, setSearch] = useState("");

  // Function: Create async call to database to fetch & assign posts to useState
  const fetchPosts = async () => {
    // Condition: Clean up input & show all results if empty string
    if (search.trim() === "") {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .order('created_at', { descending: true })

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        // Update list of posts
        setPostsData(data);
      } 
    // Condition: Fetch Results with specific matches
    } else {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .ilike('title', `%${search}%`); // Case-insensitive search in 'title'

      if (error) {
        console.error("Error searching posts:", error);
      } else {
        setPostsData(data);
      }
    }
  };

  // useEffect: Fetch posts from database & assign to useState once page renders
  useEffect(() => {
    // Init Function Call
    fetchPosts();
  }, []);

  // useEffect: Load search results for specific search query
  useEffect(() => {
    console.log("Search Query Updated!")
    fetchPosts();
  }, [search])

  return (
    <div className="page-container">
        <SearchBar search={search} setSearch={setSearch}/>
        <SortBar dateFilter={dateFilter} setDateFilter={setDateFilter}/>
        <h1>Home Page</h1>
        <div className="page-list">
          {postsData &&
            postsData.map((postsData) => (
              <PostCard
                key={postsData.id}
                id={postsData.id}
                title={postsData.title}
                content={postsData.content}
                image_url={postsData.image_url}
                created_at={postsData.created_at}
                upvotes={postsData.upvotes}
                showDetails={false}
              />
            ))}
        </div>
    </div>
  );
}

export default HomePage;