import Button from "@/components/button";
import AreaChartComponent from "@/components/chart";
import WorkoutTable from "@/components/table";

const Dashboard = () => {
    return (
        <div className='h-full w-full flex flex-col space-y-11  flex-wrap overflow-y-hidden space-x-0 px-2 md:px-4 py-4 md:py-2'>
            <div className="h-screen w-full flex flex-row flex-wrap overflow-y-hidden">
                {/* Div for dashboard content e.g. charts etc */}
                <div className='flex flex-col md:py-2 md:w-[70%] h-full md:pr-4 md:mt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-4 gap-4 w-full h-[60%]'>
                        <Card icon={<i class="fa-solid fa-fire"></i>} heading='Energy burn' text='1345 Kal' bg='bg-yellow-200'/>
                        <Card icon={<i class="fa-solid fa-heart"></i>} heading='Heart rate' text='78 bpm' bg='bg-red-200'/>
                        <Card icon={<i class="fa-solid fa-running"></i>} heading='Steps' text='12,345' bg='bg-green-200'/>
                        <Card icon={<i class="fa-solid fa-bed"></i>} heading='Sleep' text='8h 45m' bg='bg-blue-200'/>
                    </div>

                    <AreaChartComponent />
                </div>
                {/* Div for ads*/}
                <Ad />
            </div>
            <WorkoutTable />

        </div>
    );
};

const Ad = () => {
    return(
        <div 
            className="hidden md:flex flex-col w-full md:w-[30%] h-full rounded-xl 
                bg-cover bg-center bg-no-repeat shadow-lg
                bg-[url('https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        >
            {/* Overlay for content */}
            <div className="flex flex-col items-center w-full h-full rounded-xl bg-black bg-opacity-50 p-4 md:p-6 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Timex: Timeless Reliability
                </h2>
                <p className="text-sm md:text-base text-gray-300 mt-auto mb-4">
                    It takes a licking and keeps on ticking. Explore reliable, affordable, and timeless watch designs.
                </p>
                <p className="text-xs md:text-sm text-gray-400 mb-6">
                    Limited-time offer: Enjoy 15% off your first purchase!
                </p>
                <Button 
                    className="inline-block shrink-0 rounded-md border border-accentBackground bg-accentBackground py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-accentBackground focus:outline-none focus:ring active:text-accentBackground dark:hover:bg-blue-700 dark:hover:text-white"
                    onClick={() => alert('Shop Timex Now')}
                >
                    Shop Now
                </Button>
            </div>
        </div>
    )
}


const Card = ({ icon, heading, text, bg }) => {
    return (
        <div className={`flex flex-col rounded-3xl w-full h-full p-4 ${bg}`}>
            <div className="h-full w-full flex flex-col items-center">
                <div className="text-4xl">
                    {icon}
                </div>
                <p className='text-xs md:text-xs font-inter mt-auto'>{heading}</p>
                <h2 className='text-lg md:text-3xl font-bold font-mono mt-2 mb-2'>{text}</h2>
            </div>
        </div>
    );
};




export default Dashboard;
