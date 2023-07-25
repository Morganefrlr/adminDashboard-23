import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';


type Props = {
    color: string,
    title: string,
    dataKey:string,
    chartData: object[]
} 
const BarChartBox = (props :Props) => {
    return (
        <div className='w-full h-full'>
            <h1 className='text-xl mb-5'>{props.title}</h1>
            <div className=''>
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart  data={props.chartData}>
                        <Tooltip 
                            contentStyle={{background:'2a3447', borderRadius: '5px'}}
                            labelStyle={{display: 'none'}}
                            cursor={{fill:'none'}}
                        />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartBox;