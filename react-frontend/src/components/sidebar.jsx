import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';

const Sidebar = () => {
    return(
        <>
        <aside className="hidden md:flex flex-col fixed left-0 w-64 h-[calc(100vh-3.2rem)] px-4 py-4 overflow-y-auto bg-darkBackground border-r-[1px] border-gray-500 border-opacity-50">
            <Profile />
            <Separator orientation='horizontal' className=' mt-5 bg-gray-500 bg-opacity-50 w-[20%] mx-auto' />
            <SidebarNav />
        </aside>
        </>
    )
}

const Profile = () =>{
    const { user, loading } = useAuth();

    if(loading){
        return <p>Loading...</p>
    }

    if(!user){
        return <p>No data available</p>
    }

    return(
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user.avatar} alt="avatar" />
        <h4 className="mx-2 mt-2 font-medium text-primaryText dark:text-gray-200">{user.username}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
      </div>
    )
}

const SidebarNav = () =>{

    const navItems = [
        {
            name: "Dashboard",
            icon: (
                <svg height='20' width='20' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            link: 'dashboard'
        },
        {
            name: "Workouts",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            ),
            link: 'workouts'
        },
        {
            name: "Community",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height='20' width='20'>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
            ),
            link: 'community'
        },
        {
            name: "Profile",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
            ),
            link: 'profile'
        },
        {
            name: "Settings",
            icon: (
                <svg height='22' width='22' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            link: 'settings'
        }
    ];

    return(
        <div className="flex flex-col justify-between flex-1 mt-5">
            <nav className='h-full flex flex-col'>
                {navItems.map((item, index) => (
                    <Link key={index} className={`${item.name === 'Settings'? 'mt-auto' : ''} flex items-center px-4 py-2 text-accentBackground hover:bg-white hover:bg-opacity-5 focus:border-l-2 focus:border-accentBackground transition-colors duration-200 `} to={item.link}>
                        {item.icon}
                        <span className="mx-4 font-medium text-gray-500">{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Sidebar;