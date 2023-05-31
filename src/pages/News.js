import { useState } from "react"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent";
import { Radio } from 'antd';
import RedBanner from "./components/RedBanner";
import { Link } from "react-router-dom";

export default function News() {
    const [filter, setFilter] = useState("Tất cả");
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "#", text: filter === "Tất cả" ? "Bài viết" : filter}]
    const news = [{thumbnail: "nuoc-hoa-web-1684738043.jpg", type: "Tips hay mỗi ngày", title: "5 cách giữ cho căn phòng luôn thơm mát", date: "16/03/2023"},
                {thumbnail: "thit-bo-uop-gia-vi-hoa-hoi-01-1678938520.jpg", type: "Tips hay mỗi ngày", title: "Mách bạn cách chọn thịt bò ngon đúng chuẩn", date: "16/03/2023"},
                {thumbnail: "aaaa4x-1684917591.png", type: "Tips hay mỗi ngày", title: "5 bước sử dụng bếp ga mini an toàn, tiết kiệm gas", date: "16/03/2023"},
                {thumbnail: "10-bi-quyet-giup-thiet-ke-bep-dep-don-gian-cho-khong-gian-hep-1024x768-1678940198.jpg", type: "Ưu đãi của tôi", title: "Bí quyết cho gian bếp đẹp sạch và an toàn", date: "16/03/2023"},
                {thumbnail: "giabaonhieu-1684489543.jpg", type: "Tips hay mỗi ngày", title: "Bình ga mini giá bao nhiêu?", date: "16/03/2023"},
                {thumbnail: "nhung-dung-cu-ve-sinh-nha-bep-1678938116.jpeg", type: "Tips hay mỗi ngày", title: "Bạn đã biết vệ sinh bếp ga mini đúng cách?", date: "16/03/2023"},
                {thumbnail: "screenshot1678937811-1678937844.png", type: "Tips hay mỗi ngày", title: "Bí quyết cho bữa tiệc nướng thơm ngon, tròn vị", date: "16/03/2023"},]
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <RedBanner vector="contact.png" src="420_1679542821_256641bca25d9e3a.png" text1="TRUYỀN THÔNG" text2="TIN TỨC VÀ SỰ KIỆN"/>
            <div className="flex mb-8 sm:my-8 sm:justify-center overflow-x-auto whitespace-nowrap text-ellipsis news-filter">
                {["Tất cả", "Tips hay mỗi ngày", "Ưu đãi của tôi", "Video"].map((i) =>
                    <button key={i} onClick={() => filter !== i && setFilter(i)} 
                        className={i !== filter ? 
                            "mt-4 sm:mt-0 py-2 sm:py-3 font-medium mx-2 rounded-full hover:bg-[#C4171D] hover:text-white border border-black hover:border-[#C4171D] px-8 transition-all duration-100" :
                            "mt-4 sm:mt-0 py-2 sm:py-3 font-medium mx-2 rounded-full border border-[#C4171D] bg-[#C4171D] text-white px-8"}>
                            {i.toUpperCase()}
                    </button>
                )}
            </div>
            <div className="mx-2 sm:mx-8 flex flex-col sm:grid grid-cols-3">
                {news.filter(el => {
                    if (filter === 'Tất cả') {
                        return true
                    }

                    return el.type === filter;
                }).map((i, index) => ((index - 3) % 5 === 0) ? 
                <New key={index} width="aspect-[4/3] sm:aspect-[2.032/1] col-span-2 " data={i}/> : <New width="aspect-[4/3] sm:aspect-square " data={i}/>)}
            </div>
        </>
    )
}


function New(props) {
    const [eff, setEff] = useState({border: "", scale: ""})
    return (
            <Link to="/article" target="_top" className={"relative mt-4 overflow-hidden rounded-[10px] sm:mr-3 " + props.width}  
                    onMouseOver={()=> setEff({border: "border-b border-b-white", scale: "scale-110"})}
                    onMouseOut={()=> setEff({border: "", scale: ""})}>
                <img src={props.data.thumbnail} 
                
                className={"transition-[transform] duration-300 w-full h-full object-cover " + eff.scale}></img>
                <div className="absolute bottom-0 bg-[#00000099] w-full p-4">
                    <b className={"text-white " + eff.border}>{props.data.title}</b>
                    <p className="text-[#999999] mt-2">{props.data.date}</p>
                </div>
            </Link>
    )
}