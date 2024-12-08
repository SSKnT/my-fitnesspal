import Button from "@/components/button";
import AreaChartComponent from "@/components/chart";
import WorkoutTable from "@/components/table";
import FitnessStats from "@/components/stats";
import Ad from "@/components/ad";

const Dashboard = () => {
    return (
        <div className='h-full w-full flex flex-col space-y-11  flex-wrap overflow-y-hidden space-x-0 px-2 md:px-4 py-4 md:py-2'>
            <div className="h-[calc(100vh+0vh)]screen w-full flex flex-row flex-wrap overflow-y-hidden">
                {/* Div for dashboard content e.g. charts etc */}
                <div className='flex flex-col md:py-2 w-full md:w-[75%] h-full md:pr-4 md:mt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-4 gap-4 w-full h-[60%]'>
                        <Card icon={<i class="fa-solid fa-fire"></i>} heading='Energy burn' text='1345 Kal' bg='bg-yellow-100'/>
                        <Card icon={<i class="fa-solid fa-heart"></i>} heading='Heart rate' text='78 bpm' bg='bg-red-100'/>
                        <Card icon={<i class="fa-solid fa-running"></i>} heading='Steps' text='12,345' bg='bg-green-100'/>
                        <Card icon={<i class="fa-solid fa-bed"></i>} heading='Sleep' text='8h 45m' bg='bg-blue-200'/>
                    </div>
                        <AreaChartComponent />
                </div>
                {/* Div for ads*/}
                <Ad />
            </div>
            <FitnessStats />    
            <h2 className="text-3xl text-center font-bold text-[#F6AD55] sm:text-4xl dark:text-white">Workout Summary</h2>
            <WorkoutTable />

        </div>
    );
};

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
