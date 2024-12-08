import WorkoutCard from "@/components/workout_card";

const data = [
    {
        date:{
            datetime: '2022-10-10T00:00:00Z',
            year: 2022,
            month: 'Oct 10'
        },
        img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        heading: 'Finding the right guitar for your style - 5 tips',
        text: "Lorem ipsum dolor sit amet, consectetur adpariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiu atque dignissimos. Molestias explicabo corporis voluptatem"
    },
    {
        date:{
            datetime: '2022-10-10T00:00:00Z',
            year: 2022,
            month: 'Oct 10'
        },
        img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        heading: 'Finding the right guitar for your style - 5 tips',
        text: "Lorem ipsum dolor sit amet, consectetur adpariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiu atque dignissimos. Molestias explicabo corporis voluptatem"
    },
    {
        date:{
            datetime: '2022-10-10T00:00:00Z',
            year: 2022,
            month: 'Oct 10'
        },
        img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        heading: 'Finding the right guitar for your style - 5 tips',
        text: "Lorem ipsum dolor sit amet, consectetur adpariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiu atque dignissimos. Molestias explicabo corporis voluptatem"
    },
    {
        date:{
            datetime: '2022-10-10T00:00:00Z',
            year: 2022,
            month: 'Oct 10'
        },
        img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        heading: 'Finding the right guitar for your style - 5 tips',
        text: "Lorem ipsum dolor sit amet, consectetur adpariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eiu atque dignissimos. Molestias explicabo corporis voluptate"
    },
]

const Workout = () => {
    return(
        <div className='h-full w-[95%] md:w-[90%] mx-auto flex flex-col space-y-7 flex-wrap space-x-0  md:px-4 py-4 md:py-2'>
            <h2 className="text-3xl mt-2 text-center font-bold text-accentBackground sm:text-4xl dark:text-white">Workout Plans</h2>
                {data.map((item, index) => (
                    <WorkoutCard key={index} date={item.date} img={item.img} heading={item.heading} text={item.text} />
                ))}
        
        </div>
    )
}

export default Workout;