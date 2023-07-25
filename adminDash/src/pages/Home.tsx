import React from 'react';
import TopBox from '../components/TopBox';
import ChartBox from '../components/ChartBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../data';
import BarChartBox from '../components/BarChartBox';
import PieChartBox from '../components/PieChartBox';
import BigChartBox from '../components/BigChartBox';

const Home = () => {
    return (
        <div className='grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)] grid-flow-dense max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col'>
           <div className='p-3 rounded-md  border-2 border-gray-700 col-span-1 row-span-3'>
                <TopBox />
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700'>
                <ChartBox {...chartBoxUser}/>
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700'>
                <ChartBox {...chartBoxProduct}/>
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700 col-span-1 row-span-3'>
                <PieChartBox/>
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700'>
                <ChartBox {...chartBoxConversion}/>
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700'>
                <ChartBox {...chartBoxRevenue} />
           </div>
           <div className='p-3 rounded-md  border-2 border-gray-700 col-span-2 row-span-2'><BigChartBox/></div>
           <div className='p-3 rounded-md  border-2 border-gray-700'><BarChartBox {...barChartBoxVisit}/></div>
           <div className='p-3 rounded-md  border-2 border-gray-700'><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    );
};

export default Home;