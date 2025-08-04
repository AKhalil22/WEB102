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
  const [filter, setFilter] = useState(""); // Default == Most Popular
  const [search, setSearch] = useState("");

  // Function: Create async call to database to fetch & assign posts to useState
  const fetchPosts = async () => {
    // Init: Default search query
    let query = supabase.from('posts').select();

    // Condition: Set specific search query
    if (search.trim() !== "") {
      // Case-insensitive search in 'title'
      query = query.ilike('title', `%${search}%`);
    }

    // Conditions: Sort data based on filter type
    switch (filter) {
      case "oldest":
        query = query.order('created_at', { ascending: true});
        break;
      case "popular":
        query = query.order('upvotes', {ascending: false});
        break;
      default:
        query = query.order('created_at', {ascending: false});
    } 

    // Supabase: Perform search query
    const { data, error } = await query;

    // Conditions: Output state of success/error based on results
    if (error) {
      console.error("Error searching posts:", error);
    } else {
      setPostsData(data);
    }
  };

  // useEffect: Fetch posts from database & assign to useState once page renders
  useEffect(() => {
    // Init Function Call
    fetchPosts();
  }, []);

  // useEffect: Load search results for specific search query
  useEffect(() => {
    fetchPosts();
  }, [search])

  // useEffect: Update posts based on ordered filter
  useEffect(() => {
    fetchPosts();
  }, [filter])

  return (
    <div className="page-container">
        <SearchBar search={search} setSearch={setSearch}/>
        <SortBar filter={filter} setFilter={setFilter}/>
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