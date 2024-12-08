import DropdownComponent from "@/components/dropdown"
import RightSidebar from "@/components/community_sidebar"
import Post from "@/components/Post"


{/* Dummy data for testing, To be removed before prod */} 
const posts = [{
    date : "1hr. ago",
    user : {
        username: "user",
        avatar: "https://randomuser.me/api/portraits"
    },
    img : 'https://images.unsplash.com/photo-1733528321357-9fb5e041a5de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading : "The Start of a new journey is always the hardest",
    likes : 100
}]



const Community = () => {
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
                {posts.map((post) => <Post user={post.user} img={post.img} heading={post.heading} likes={post.likes} date={post.date} />)}
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