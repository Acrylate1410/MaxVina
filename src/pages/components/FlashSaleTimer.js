import { useEffect, useState } from "react"

export default function FlashSaleTimer(props) {
    return <>
    <div class={props.width + " grid grid-rows-3 grid-cols-[19%_7%_19%_7%_19%_7%_19%] text-[65%] sm:text-[16px] justify-center items-center font-medium " + props.extraStyle}>
                <b class="text-white col-span-7 text-center">{props.text}</b>
                <TimerBlock deadline={props.deadline}/>
                <div class="text-white text-center">NGÀY</div>
                <div class="text-white col-start-3 text-center">GIỜ</div>
                <div class="text-white col-start-5 text-center">PHÚT</div>
                <div class="text-white col-start-7 text-center">GIÂY</div>
            </div>
    </>
}

function TimerBlock(props) {
    const [countdown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})
    useEffect(() => {       
        props.deadline.getTime() - new Date().getTime() > 0 && 
        setTimeout(() => {
            setCountdown({
                days: Math.floor((props.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)), 
                hours: Math.floor(((props.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24), 
                minutes: Math.floor(((props.deadline.getTime() - new Date().getTime()) / 1000 / 60) % 60), 
                seconds: Math.floor(((props.deadline.getTime() - new Date().getTime()) / 1000) % 60)
            })
        }, 1000);
    });
    return <>
        {[countdown.days, countdown.hours, countdown.minutes].map((i) => 
            <>
                <div class="bg-white flex justify-between items-center px-1 text-center h-7  sm:h-12 rounded-md">
                    <span class="text-red-800 ">| </span>{i < 10  ? "0" + i : i}<span class="text-red-800 "> |</span></div>
                <b class="text-white flex justify-center items-center px-1 h-7  sm:h-12  ">:</b>
            </>
        )}
        <div class="bg-white flex justify-between items-center px-1 text-center h-7  sm:h-12 rounded-md">
            <span class="text-red-800 ">| </span>{countdown.seconds < 10 ? "0" + countdown.seconds : countdown.seconds}<span class="text-red-800 "> |</span></div>
    </>
}