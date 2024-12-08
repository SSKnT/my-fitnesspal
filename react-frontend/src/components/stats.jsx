
const FitnessStats = () => {
    const stats = [
      { title: "Total Workouts Completed", value: "350" },
      { title: "Calories Burned", value: "12k" },
      { title: "Active Users", value: "1.2k" },
      { title: "Challenges Completed", value: "42" },
    ];
  
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <StatsHeader
          title="Track Your Fitness Journey"
          description="Stay on top of your fitness goals with real-time stats and progress tracking tailored just for you."
        />
        <dl className="grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-gray-900">
          {stats.map((stat, index) => (
            <StatsCard key={index} title={stat.title} value={stat.value} />
          ))}
        </dl>
      </div>
    );
};
  
const StatsHeader = ({ title, description }) => {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-[#B3B3B3] sm:text-4xl dark:text-white">{title}</h2>
        <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">{description}</p>
      </div>
    );
};
  
const StatsCard = ({ title, value }) => {
    return (
      <div className="flex flex-col px-4 py-8 text-center">
        <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">{title}</dt>
        <dd className="text-4xl font-extrabold text-[#63B3ED] md:text-5xl">{value}</dd>
      </div>
    );
};
  


export default FitnessStats;