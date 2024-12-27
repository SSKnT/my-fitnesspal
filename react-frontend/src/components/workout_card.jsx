import { format } from 'date-fns';
import { enrollWorkoutAPI } from '@/APIs/api';
import { toast } from 'react-toastify';

const WorkoutCard = ({date, img, heading, text, id }) => {
    return(
        <article className="flex w-full bg-[#1A1A1A] transition-transform duration-300 hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
            <CardDate date={date}/>
            <CardImg img={img}/>
            <CardContent heading={heading} text={text} id={id}/>
        </article>
    )
}

const CardDate = ({date}) => {
  const formattedDate = {
    datetime: date,
    year: format(new Date(date), 'yyyy'),
    month: format(new Date(date), 'MMMM'), // Full month name
  };

  return(
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime={formattedDate.datetime}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-accentBackground dark:text-white"
          >
            <span>{formattedDate.year}</span>
            <span className="w-px flex-1 bg-accentBackground dark:bg-white/10"></span>
            <span>{formattedDate.month.slice(0,3).toUpperCase()}</span>
          </time>
        </div>
  )
}

const CardImg = ({img}) => {
    return(
        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={img}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
    )
}

const CardContent = ({heading, text, id}) => {
  
  const enrollWorkout = async (e) => {
    e.preventDefault();
    const response = await enrollWorkoutAPI(id);

    if(response.status === 200){
      toast.success("Workout Enrolled");
    }
  
    else{
      if(response.status === 400)
        toast.error("Workout already enrolled");
      else
        toast.error("Workout already enrolled.");
      
    }
    console.log(response);
  }

    return(
        <div className="flex flex-1 flex-col justify-between">
          <div
            className="border-s border-gray-900/10 p-0 sm:!border-l-transparent sm:p-6 dark:border-white/10"
          >
            <div className="flex justify-between"> 
              <a href="#">
                <h3 className="font-bold uppercase text-gray-100 dark:text-white">
                  {heading}
                </h3>
              </a>
              <div className="rounded-3xl p-2 text-gray-100 hover:text-teal-200 hover:bg-gray-600 hover:bg-opacity-20 transition-all duration-250 my-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className=" " width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </div>
            </div>
    
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400 dark:text-gray-200">
                {text}
            </p>
          </div>
    
          <div className="sm:flex sm:items-end sm:justify-end">
            <button
              className="block bg-[#26A69A] px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-teal-400"
              onClick={(e) => enrollWorkout(e)}
            >
              Add Plan
            </button>
          </div>
    </div>
    )
}
export default WorkoutCard;