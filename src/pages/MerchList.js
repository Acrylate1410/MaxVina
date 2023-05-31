import GermanyBanner from "./components/GermanyBanner";
import Merch from "./components/Merch"
import { Radio } from 'antd';
import TabBar from "./components/TabBar"
import { useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import FlashSaleTimer from "./components/FlashSaleTimer";
import RedBanner from "./components/RedBanner";

export default function MerchList() {
    const url = useLocation().pathname;
    return(
        <>
        <TabBar currentTab={url.slice(1)}/>
        {url === "/flash-sale" ?
        <><div class=" animate-fade-in-down h-[100px] sm:h-[280px] pr-7 sm:pr-0 sm:mx-8 my-2 sm:my-8 sm:rounded-[35px] flex sm:justify-center justify-end items-center bg-no-repeat bg-cover bg-center bg-[url('./background/812_1679451017_867641a6389a4d05.png')]">
                    <FlashSaleTimer width="w-2/5 sm:w-1/5 " text="THỜI GIAN CÒN LẠI" deadline={new Date("June 01, 2022 00:00:00")}/>
            </div>
            <p className="text-center  sm:mb-5 sm:text-4xl py-4 font-bold">Sản phẩm Flash Sale</p></>
        : (url === "/san-pham-moi" ? <RedBanner src="61_1679467407_185641aa38f71436.png" text1="Sản phẩm mới" text2="Cập nhật xu hướng thời thượng, công nghệ tiên tiến vượt trội."/>
         : 
         <RedBanner src="728_1679467331_862641aa343d6c9d.png" text1="Sản phẩm bán chạy" text2="TOP sản phẩm được người tin dùng lựa chọn!"/>
         )
        }

        <Merches/>
        <Link to="/" target="_blank"><GermanyBanner/></Link>
        </>
    )
}


function Merches() {
    const [filter, setFilter] = useState("Tất cả");
    const merches = [{type: "Bếp ga phủ sứ", thumbnail: "picture6-1679373893.png"}, 
    {type: "Bình ga mini", thumbnail: "max-crv-1683774380.jpg"},
    {type: "Bình ga mini", thumbnail: "picture1e-1679554391.jpg"}, 
    {type: "Quạt sưởi điện", thumbnail: "b2-1679628790.jpg"},
    {type: "Trang bị dã ngoại", thumbnail: "picture37-1679552718.png"}]
    return(<>
        <div className="whitespace-nowrap overflow-x-auto flex sm:justify-center mb-5 types">
            {["Tất cả", "Bếp ga phủ sứ", "Quạt sưởi điện", "Bình ga mini", "Trang bị dã ngoại"]
            .map((i) => 
            <button key={i} onClick={() => i !== filter && setFilter(i)} 
            className={i === filter ? 
                "text-white py-1 px-4 font-medium mx-2 rounded-full hover:text-white bg-[#C4171D]" :
                "text-white py-1 px-4 font-medium mx-2 rounded-full transition-all duration-100 hover:bg-[#C4171D] hover:text-white bg-black"}>{i}</button>)}

        </div>
        <div class="sm:mx-8 flex flex-wrap justify-between sm:justify-start">
        {merches.filter(el => {
                if (filter === 'Tất cả') {
                    return true
                }
                return el.type === filter;
        }).map((item) => 
            <Merch tag1="FLASH SALE.png" rank=""
            name={item.type}
            thumbnail={item.thumbnail} initialPrice="1.250.000đ"  saleAmount="-15%" finalPrice="3.300.000"  width=" sm:max-w-[23.5%] w-[44%]"></Merch>
            )
        }
        </div></>
    )
}