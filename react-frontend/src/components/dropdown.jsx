import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";


const DropdownComponent = ({trigger, content, label=''}) => {
    return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-full items-center justify-center focus:outline-none focus:ring-0">
            {trigger}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-darkBackground border-gray-500 text-accent border-opacity-50 font-inter' >
            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-500 bg-opacity-50' />
            {content.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link to={item.link}>
                    {item.label}
                  </Link>
                  </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownComponent;