import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { day: 'Monday', exercises: 5 },
    { day: 'Tuesday', exercises: 7 },
    { day: 'Wednesday', exercises: 8 },
    { day: 'Thursday', exercises: 6 },
    { day: 'Friday', exercises: 9 },
    { day: 'Saturday', exercises: 10 },
    { day: 'Sunday', exercises: 12 },
];

const AreaChartComponent = () => {
    return (
      <div className="bg-[#121212] p-6 rounded-xl shadow-lg">
        <h2 className="text-white text-center font-inter  text-2xl mb-4">
          Exercise Completion
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="day" stroke="#999" />
            <YAxis stroke="#999"  />
            <Tooltip contentStyle={{ backgroundColor: '#444', color: '#fff' }} />
            <Legend verticalAlign="top" height={36} />
            <Area
              type="monotone"
              dataKey="exercises"
              stroke="#00BFAE"
              fill="rgba(0, 191, 174, 0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};
  
export default AreaChartComponent;
  




