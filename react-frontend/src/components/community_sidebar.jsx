
const RightSidebar = () => {
    return (
      <aside className="w-[24%] h-full hidden md:flex flex-col fixed right-0 py-4 px-2 overflow-y-auto">
        <div className="flex flex-col rounded-2xl space-y-6 p-4 bg-gray-600 bg-opacity-25 shadow-lg">
          <PostSection />
          <ContributorSection />
          <QuickLinks />
          <FooterSection />
        </div>
      </aside>
    );
};
 
const PostSection = () =>{
    return(
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl shadow-md">
          <button className="flex items-center space-x-2 text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>Create Post</span>
          </button>
        </div>
    )
}

const AnnouncementSection = () =>{
    return(
        <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Announcements</h2>
          <ul className="space-y-4">
            <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
              <h3 className="text-md font-medium text-white mb-1">New Feature Launch</h3>
              <p className="text-sm">We’ve added a new messaging feature. Check it out now!</p>
            </li>
            <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
              <h3 className="text-md font-medium text-white mb-1">Scheduled Maintenance</h3>
              <p className="text-sm">The platform will be down for maintenance this Saturday from 2 AM to 4 AM.</p>
            </li>
            <li className="p-3 bg-gray-800 rounded-md shadow-sm text-gray-400">
              <h3 className="text-md font-medium text-white mb-1">Community Event</h3>
              <p className="text-sm">Join us for a live Q&A session this Friday at 6 PM.</p>
            </li>
          </ul>
        </div>
    )
}

const ContributorSection = () =>{
    return(
        <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Top Contributors</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">John Doe</span>
                <span className="text-xs text-gray-400">Rating: 4.5</span>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-pink-500"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Jane Smith</span>
                <span className="text-xs text-gray-400">Rating: 4.7</span>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-green-500"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">Mike Johnson</span>
                <span className="text-xs text-gray-400">Rating: 4.6</span>
              </div>
            </li>
          </ul>
        </div>
    )
}

const QuickLinks = () =>{
    return(
        <div className="flex flex-col p-4 bg-gray-500 bg-opacity-30 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Quick Links</h2>
          <ul className="space-y-2">
            <li className="text-sm text-blue-400 hover:underline">
              <a href="/guidelines">Community Guidelines</a>
            </li>
            <li className="text-sm text-blue-400 hover:underline">
              <a href="/support">Help & Support</a>
            </li>
            <li className="text-sm text-blue-400 hover:underline">
              <a href="/feedback">Submit Feedback</a>
            </li>
          </ul>
        </div>
    )
}

const FooterSection = () =>{
    return(
        <div className="flex justify-center p-2 text-sm text-gray-500 border-t border-gray-600">
            © 2024 My FitnessPal
        </div>
    )
}

export default RightSidebar;