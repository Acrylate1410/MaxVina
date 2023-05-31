import { useState } from "react"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import { Link } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { BsInstagram, BsFacebook } from "react-icons/bs";
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import AttachmentIcon from '@mui/icons-material/Attachment';
export default function Article() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
                    {key: 2, link: "/bai-viet", text: "Tips hay mỗi ngày"},
                    {key: 3, link: "#", text: "5 cách giữ cho căn phòng luôn thơm mát"}]
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <div className="mx-2 sm:mx-8 sm:flex justify-between">
                <div className="sm:w-3/5">
                    <div className="text-4xl my-8 font-bold">5 cách giữ cho căn phòng luôn thơm mát</div>
                    <p>Không gian phòng làm việc hay phòng ngủ là nơi giúp bạn tái tạo năng lượng để dự định cho một ngày mới. 
                        Bởi vậy, căn phòng cần phải có một không gian thoáng đãng, có một mùi thơm dịu nhẹ, dễ chịu. 
                        Hãy đến với bài chia sẻ về cách làm thơm phòng, tạo nên nguồn cảm hứng cho mỗi chúng ta.</p>
                        <img src="nuoc-hoa-web-1684738043.jpg" className="my-4"></img>
                    <i>Không gian phòng làm việc hay phòng ngủ là nơi giúp bạn tái tạo năng lượng để dự định cho một ngày mới. 
                        Bởi vậy, căn phòng cần phải có một không gian thoáng đãng, có một mùi thơm dịu nhẹ, dễ chịu. 
                        Hãy đến với bài chia sẻ về cách làm thơm phòng, tạo nên nguồn cảm hứng cho mỗi chúng ta.</i>
                    <div className="text-2xl my-8 font-bold">1. Nước hoa xịt phòng</div>
                    <p className="mb-4">Nước hoa xịt phòng là sản phẩm khử mùi phòng chuyên dụng, hiệu quả nhất hiện nay. Nhưng hãy chú ý, bạn nên mua các sản phẩm có chiết xuất 100% từ thiên nhiên như hương chanh sả, hương quế, hương cà phê… sẽ an toàn với sức đề kháng của bạn hơn, tạo cho không gian của bạn một mùi hương dễ chịu, thoải mái, mang đến cho bạn phút giây thoải mái hơn.</p>
                    <p className="mb-4">Bạn có thể tham khảo dòng sản phẩm nước hoa xịt phòng Aroma Hommax sở hữu công nghệ khử hiện đại, giảm thiểu hoàn toàn mùi hôi trong không khí, mang lại trải nghiệm mùi hương thơm mát, nhẹ nhàng cho không gian sống của bạn.</p>
                    <p className="mb-4">Chiết xuất từ tinh dầu thơm tự nhiên, tinh chế dạng nước hoa cao cấp mang đến không gian sống đẳng cấp và khác biệt. Thích hợp sử dụng trong phòng khách, phòng ngủ, khách sạn, nhà hàng, cao ốc văn phòng,... hay những khu vực công cộng.</p>
                    <div className="py-4 border-y border-y-[#A1A1A2] flex flex-col sm:flex-row items-center justify-between mb-12">
                        <Link to="/bai-viet" target="_top" className={"px-6 py-2.5 border border-black relative rounded-full group overflow-hidden font-medium bg-white text-black inline-block rounded-full sm:w-[40%] w-[75%]"}>
                            <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-black group-hover:w-full"}></span>
                            <div className={"relative group-hover:text-white flex items-center justify-center text-[12px] sm:text-[16px]"}>
                            <ArrowBackIcon className="mr-3"/> Trở lại chuyên mục tin tức 
                            </div>
                        </Link>
                        <div className="flex items-center mt-4 sm:mt-0">
                            <div className="mr-3">Chia sẻ:</div>
                            <button className="mr-3 text-[22px] aspect-square w-8 border border-[#A1A1A2] rounded-full flex items-center justify-center"><BsFacebook/></button>
                            <button className="mr-3 aspect-square w-8 border border-[#A1A1A2] rounded-full flex items-center justify-center"><TwitterIcon/></button>
                            <button className="mr-3 aspect-square w-8 border border-[#A1A1A2] rounded-full flex items-center justify-center"><EmailIcon/></button>
                            <button className="aspect-square w-8 border border-[#A1A1A2] rounded-full flex items-center justify-center"><AttachmentIcon/></button>
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/3 bg-white px-6 h-max py-6 my-8">
                    <b>Tin đọc nhiều nhất</b>
                    <MostRead/>
                </div>
            </div>
        </>
    )
}

function MostRead() {
    const [textColor, setTextColor] = useState("");
    return (
        <Link to="#" target="_top" className="flex mt-4" onMouseOver={() => setTextColor("text-[#C4171D]")} onMouseOut={() => setTextColor("")}>
            <img src="nuoc-hoa-web-1684738043.jpg" className=" w-1/4 aspect-[4/3] mr-2"></img>
            <p className={textColor}>5 cách giữ cho căn phòng luôn thơm mát</p>
        </Link>
    )
}