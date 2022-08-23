import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
    { name: "July", Total: 1200 },
    { name: "August", Total: 1900 },
    { name: "September", Total: 2200 },
    { name: "October", Total: 890 },
    { name: "November", Total: 900 },
    { name: "December", Total: 1200 },
];


const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last Year Revenue</div>
            <ResponsiveContainer width="100%" aspect ={2/1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="purple" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="purple" stopOpacity={0} />
                        </linearGradient>

                    </defs> 
                    <XAxis dataKey="name" stroke='gray' />
                    
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="purple" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart