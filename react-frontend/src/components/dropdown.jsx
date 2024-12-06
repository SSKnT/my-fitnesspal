import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


const DropdownComponent = ({trigger, content}) => {
    return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-full items-center justify-center focus:outline-none focus:ring-0">
            {trigger}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-darkBackground border-gray-500 text-accent border-opacity-50 font-inter' >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className='bg-gray-500 bg-opacity-50' />
            {content.map((item, index) => (
                <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownComponent;