import React from 'react';
import PiechartContent from '../PiechartContent';
import BarchartContent from '../BarchartContent';

const HomeContent = () => {
    let u1 = 34;
    let t1 = 62;
    let u2 = 18;
    let t2 = 24;
    const per1 = Math.round(u1 / t1 * 100);
    const per2 = Math.round(u2 / t2 * 100);
    const total = Math.round((per1 + per2) / 2);
  return (
    <div className="flex flex-col md:flex-row px-4"><div className="m-2 sm:w-full md:w-full lg:w-1/2">
        <div className="bg-white rounded-md">
            <div className="border-b-2 border-mainbg">
                <p className="p-4 text-xl font-semibold">Overall Usage</p>
            </div>
            <div className="max-w-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <div className="block sm:mx-0 sm:flex-shrink-0 relative w-40 h-40">
                    <div className="absolute top-0 right-3 w-32 h-32 rounded-full bg-gray-200">
                        
                    </div>
                    <div className="absolute top-2 right-5 z-2 w-28 h-28 rounded-full bg-white"></div>
                    <div className="absolute top-10 right-14 z-6 text-5xl font-monospace">
                        <div className=" relative">
                            <span className="font-semibold text-4xl font-monospace text-mainly">{total}</span>
                            <span className="text-base font-medium absolute insert-x-0 top-1 font-sans text-mainly">%</span>
                            <p className="text-xs text-center text-gray-400 font-cursive">Total</p>
                        </div>
                    </div>
                    <div className="absolute top-0 right-1.5 z-5 w-32 h-32">
                        <PiechartContent 
                            data = {[
                                {
                                "id": "java",
                                "label": "java",
                                "value": 65,
                                "color": "hsl(111, 70%, 50%)"
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="flex pt-4">
                        <div className="border-r-2 border-green-50 w-36">
                                <p className="text-sm text-gray-500 font-medium">
                                    Hotel Desk Usage
                                </p>
                                <div>
                                    <span className="font-semibold text-5xl font-monospace">{u1}</span>
                                    <span className="text-5xl font-monospace">/{t1}</span>
                                </div>
                            </div>
                            <div className=" relative pl-6 top-5">
                                <span className="font-semibold text-5xl font-monospace">{per1}</span>
                                <span className="text-xl font-medium absolute insert-x-0 top-0">%</span>
                                <span className="absolute top-4 font-semibold text-md text-mainly pl-5">↑+3.5%</span>
                            </div>
                        </div>
                        <div className="flex pt-4 pb-12">
                            <div className="border-r-2 border-green-50 w-36">
                                <p className="text-sm text-gray-500 font-medium">
                                    Hotel Desk Usage
                                </p>
                                <div>
                                    <span className="font-semibold text-5xl font-monospace">{u2}</span>
                                    <span className="text-5xl font-monospace">/{t2}</span>
                                </div>
                            </div>
                            <div className=" relative pl-6 top-5">
                                <span className="font-semibold text-5xl font-monospace">{per2}</span>
                                <span className="text-xl font-medium absolute insert-x-0 top-0">%</span>
                                <span className="absolute top-4 font-semibold text-md text-mainly pl-5">↑+3.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="m-2 sm:w-full md:w-full lg:w-1/2">
            <div className="mx-auto bg-white rounded-md shadow-xl">
                <div className="border-b-2 border-mainbg">
                    <p className="p-4 text-xl font-semibold">Office Breakdown</p>
                </div>
                <div className="relative flex h-60">
                    <div className="w-full p-5">
                        <BarchartContent 
                            data = {[
                                {
                                    "place": "San Francisco",
                                    "imp": 85,
                                    "exp": 75,
                                },
                                {
                                    "place": "Phoenix",
                                    "imp": 90,
                                    "exp": 87,
                                },
                                {
                                    "place": "Denver",
                                    "imp": 67,
                                    "exp": 80,
                                },
                                {
                                    "place": "Lehi",
                                    "imp": 20,
                                    "exp": 70,
                                },
                                {
                                    "place": "Seattle",
                                    "imp": 37,
                                    "exp": 12,
                                }
                            ]}
                        />
                        <div className="absolute top-8 right-10 w-0.5 h-40 bg-gray-200"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomeContent;

