"use client"
import React, { useState } from "react"
import arbius_logo_without_name from '@/app/assets/images/arbius_logo_without_name.png'
import Image from "next/image"
import ReactSlider from 'react-slider'
export default function Stake() {
    const [sliderValue, setSliderValue] = useState(0)
    const [duration, setDuration] = useState({
        months: 0,
        weeks: 0
    })
    return (
        <div>
            <div className="bg-white-background 2xl:h-[480px] lg:h-[535px] h-auto stake-box-shadow rounded-2xl px-8 2xl:pt-10 lg:pt-14 pb-8 pt-8 box-border flex flex-col justify-between">
                <div>
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-stake lato-bold text-[18px]">Amount to lock</p>
                            <p className="text-available lato-regular text-[15px]">Available 0.0 AIUS</p>
                        </div>
                        <div>
                            <div className="border border-[#2F2F2F] rounded-3xl flex items-center">
                                <div className="bg-stake-input flex items-center gap-2 justify-center rounded-l-3xl  p-2 box-border">
                                    <div className="bg-white-background w-[30px] h-[30px] rounded-[50%] flex items-center justify-center ">
                                        <Image src={arbius_logo_without_name} width={15} alt="arbius" />
                                    </div>
                                    <p className="pr- text-aius lato-bold text-[15px]">AIUS</p>
                                </div>
                                <div className="w-[94%]">
                                    <input className="w-[100%] border-0 outline-none rounded-r-3xl p-2 lato-bold text-[15px]" type="number" placeholder="0.0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-8 mb-8 text-[15px] lg:text-[20px] lato-bold  text-stake h-12">Locking for {duration.months !== 0 ? `${duration.months} ${duration.months === 1 ? "month" : "months"} ` : `${duration.weeks} ${(duration.weeks <= 1) ? "week" : "weeks"}`} for 0.0 AIUS voting power.</p>
                        <div className="mb-10">
                            <div className="mb-8">
                                <ReactSlider
                                    className=" text-original-white border-b border-4 border-[#ECECEC] rounded-2xl"
                                    thumbClassName= " w-[28px] h-[28px] ml-[-5px] bg-thumb cursor-pointer rounded-[50%] flex items-center justify-center border-0 mt-[-14px] outline-none" 
                                    markClassName="customSlider-mark"
                                    marks={4}
                                    min={0}
                                    step={.25}
                                    max={24}
                                    defaultValue={0}
                                    value={sliderValue}
                                    onChange={(value)=>{
                                        console.log(value);
                                        if (value < 1) {
                                            setDuration({ ...duration, months: 0, weeks: 4 * value })
                                        } else {
                                            setDuration({ ...duration, months: value, weeks: 0 })
                                        }
                                        setSliderValue(value)
                                    }}
                                    renderMark={(props) => {
                                        props.className = "customSlider-mark customSlider-mark-before text-[16px] text-start ml-[0px] w-[16.66%]";
                                        return <span {...props} >
                                                    <h1>{props.key}</h1>
                                                </span>;
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-8">
                    <div className="bg-apr rounded-2xl w-[48%] py-4 px-4 box-border">
                        <p className="md:text-[16px] text-[12px] lato-regular mb-4 text-original-white">APR</p>
                        <p className="md:text-[20px] text-[16px] lato-bold text-original-white">0%</p>
                    </div>
                    <div className="bg-apr rounded-2xl w-[48%] py-4 px-4 box-border">
                        <p className="md:text-[16px] text-[12px] lato-regular mb-4 text-original-white">veAIUS Balance</p>
                        <p className="md:text-[20px] text-[16px] lato-bold text-original-white">0.00 veAIUS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


