export default function RedBanner(props) {
    let height = "sm:h-[200px]";
    let flex = " flex justify-center items-center"
    let t1Style = "overflow-hidden text-[#FFFFFF99] text-[10px] sm:text-[16px] "
    let t2Style = "mt-1 sm:mt-4 overflow-hidden text-[12px] sm:text-[22px] text-white font-bold"
    if (props.vector === undefined) {
        t1Style = "sm:text-[220%] overflow-hidden text-white"
        t2Style = "mt-1 sm:mt-4  overflow-hidden text-[14px] sm:text-[18px] text-white"
        height = "sm:h-[280px]"
        flex = ""
    }
    return (
        <>
        <div class={height + " animate-fade-in-down relative h-[100px] overflow-hidden relative sm:mx-8 my-2 sm:my-8 sm:rounded-[20px] flex items-center  bg-[#C4171D]"}>
            <div class="border-[#C4171D] border-2 absolute left-[-520px] sm:left-[-50px] rounded-full w-[830px] h-[830px] sm:z-auto z-10"></div>
            <div class="border-white border-2 absolute left-[-520px] sm:left-[-50px] rounded-full w-[800px] h-[800px] sm:z-auto z-10"></div>
            <div class="bg-[#C4171D] absolute left-[-510px] sm:left-[-50px] rounded-full w-[770px] h-[770px] sm:z-auto z-10"></div>
            <div class="bg-[#C4171D66] absolute left-[-520px] sm:left-[-50px] rounded-full w-[812px] h-[812px] sm:z-auto z-10"></div>
            <div className={"w-2/3 sm:w-1/2 px-4 sm:px-12 z-20" + flex}>
                {props.vector !== null  && <img alt="" src={props.vector} className="max-w-[33%] sm:max-w-[50%] z-50 mr-2 sm:mr-12"></img>}
                <div>
                    <b className={t1Style}>{props.text1}</b>
                    <p className={t2Style}>{props.text2}</p>
                </div>
            </div>
            <div className="flex-1 h-full rounded-l-[9999px] z-0 sm:z-auto">
                <img alt="" src={props.src} className="ml-auto min-h-full sm:rounded-r-[20px]  object-cover"></img>
            </div>
        </div>
        {props.vector === undefined && <p className="text-center  sm:mb-5 sm:text-4xl py-4 font-bold">{props.text1}</p>}
    </>
    )
}