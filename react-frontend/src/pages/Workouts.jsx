import WorkoutCard from "@/components/workout_card";
import { getAllWorkoutsAPI } from "@/APIs/api";
import {  useEffect, useState } from "react";

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await getAllWorkoutsAPI();
            console.log(response);
            setWorkouts(response);
        }
        fetchWorkouts();
    }, []);    

    return(
        <div className='h-full w-[95%] md:w-[90%] mx-auto flex flex-col space-y-7 flex-wrap space-x-0  md:px-4 py-4 md:py-2'>
            <h2 className="text-3xl mt-2 text-center font-bold text-accentBackground sm:text-4xl dark:text-white">Workout Plans</h2>
                {workouts.map((item, index) => (
                    <WorkoutCard key={index} date={item.created_at} img={item.image_url} heading={item.name} text={item.description} id={item.id} />
                ))}
        
        </div>
    )
}

export default Workout;