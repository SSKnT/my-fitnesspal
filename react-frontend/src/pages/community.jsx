import DropdownComponent from "@/components/dropdown"
import RightSidebar from "@/components/community_sidebar"
import Post from "@/components/Post"
import { getCommunityPostsAPI } from "@/APIs/api"
import { useAuth } from "@/context/AuthProvider"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify"

const Community = () => {
    const [posts, setPosts] = useState([]);
    const {user, loading} = useAuth();

    if(loading) return <h1 className="bg-darkBackground text-accentBackground font-bold text-5xl mx-auto my-auto">Loading...</h1>;

    if(!user) return <Navigate to='/auth' />

    useEffect(() =>{
        const fetchPosts = async () =>{
            try{
                const response = await getCommunityPostsAPI();
                setPosts(response);
            } catch(error){
                toast.error("Error fetching posts");
            }
                
        }
        fetchPosts();
    },[])

    return(
        <div className="h-full w-full flex flex-row space-x-2 relative overflow-y-hidden">
            <MainContent posts={posts} />
            <RightSidebar />
        </div>
    )
}

const MainContent = ({posts}) => {
    return(
        <div className="h-full w-full md:w-[70%] flex flex-col space-y-4 overflow-y-hidden ">
            <div className="h-full w-full flex flex-col space-y-2 overflow-y-hidden">
                <Sort />
                {posts.map((post) => <Post user={post.user} img={post.img} heading={post.title} likes={0} date={post.created} />)}
            </div>
        </div>
    )
}

const Sort = () =>{
    return(
        <div className="w-full flex px-12 mt-2 sm:mt-3 md:mt-4 sm:mb-1 md:mb-2">
            <DropdownComponent
            trigger={<Filter />}
            content={[
                "Newest",
                "Oldest",
                "Best"
            ]}
            label="Sort by"
            />
        </div>
    )
}

const Filter = () =>{
    return(
        <span className="flex h-full font-inter items-center ">
            <p className="text-xs text-[#B3B3B3]">Sort</p>
            <svg className="text-[#B3B3B3] ml-1 text-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
    )
} 

export default Community;