import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DropdownComponent from "@/components/dropdown"


const Header = () => {
  return (
    <header className="w-full py-1 px-3 md:px-6 h-14 md:h-[3.6rem] fixed top-0 bg-darkBackground left-0 border-b-[1px] shadow-md border-gray-500 border-opacity-50 text-primaryText z-10">
      <div className="flex items-center justify-between h-full">
        <Logo />
        <SearchInput />
        <Nav />
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-full w-32 md:w-44 sm:40">
      <img src="/logo.png" alt="logo" className="w-auto h-auto " />
    </div>
  );
};

const SearchInput = () => {
  return (
    <div className="hidden md:flex items-center justify-center relative py-1 h-full w-[40%]">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <Input
          type="text"
          placeholder="Search My Fitnesspal"
          className="w-full h-10 pl-10 pr-4 rounded-3xl bg-slate-500 bg-opacity-20 border-none focus:outline-none focus:ring-0 font-thin"
        />
      </div>
    </div>
  );
};

const Nav = () => {
  return(
    <div className='flex flex-row items-center justify-center h-full space-x-4'>
      {/* <Separator orientation='vertical' className='h-[60%] bg-white bg-opacity-20' /> */}
      <Dropdown />
    </div>
  )
}

const Dropdown = () => {
  return(
    <DropdownComponent
      trigger={<AvatarSection />}
      content={[
        "Profile",
        "Settings",
        "Logout"
      ]} />
  )
}

const AvatarSection = () => {
  return(
    <div className='flex items-center justify-center h-full space-x-2'>
      <Avatar className='h-[80%] md:h-[75%] object-contain' >
        <AvatarImage src="https://example.com/placeholder" />
        <AvatarFallback className='bg-zinc-500 text-accent'>JD</AvatarFallback>
      </Avatar>
      <span className="hidden md:flex space-x-1 items-center justify-center">
        <p className='text-sm font-light font-inter text-primaryText'>John Doe</p>
        <i className="fa-solid fa-chevron-down text-xs text-gray-500"></i>
      </span>
    </div>
  )
}


export default Header;
