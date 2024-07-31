import {useState} from 'react';
import Github from './Github';
const Stats = () => {

    const [platform,setPlatform] = useState('Github');

    return(
        <div className=" sm:h-auto    bg-[#0d2a3d]">
        <div className="flex mx-auto pt-16 pb-8  justify-center text-white">
            <span className="mx-2 hover:text-gray-600 cursor-pointer text-2xl font-bold" onClick={() => setPlatform('Github')}>Github</span>
               </div>

        <div className="mt-1 mx-auto">
            {platform === 'Github' && <Github />}
        </div>
    </div>
    )
}

export default Stats;