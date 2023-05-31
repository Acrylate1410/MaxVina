import BreadcrumbsComponent from "./components/BreadcrumbsComponent";
import CustomButton from "./components/CustomButton"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Divider,} from "@mui/material";
import { Radio } from 'antd';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import LikeBtn from "./components/LikeBtn";
import FlashSaleTimer from "./components/FlashSaleTimer";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import Merch from "./components/Merch";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CheckIcon from '@mui/icons-material/Check';


export default function ProductDetails() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "/bep-ga-mini", text: "Bếp ga mini"},
    {key: 3, link: "#", text: "Bếp ga mini Maxsun MS-3500CS"}]
    return (
        <div className="sm:pb-16">
            <BreadcrumbsComponent content={content} />
            <div className="sm:px-8 px-2 sm:flex justify-between pt-8  bg-white ">
                <div className="sm:w-[48%] relative  mt-[-1.5rem]">
                    <LikeBtn position1="left-6 top-10" position2="left-5 top-10" />
                    <Slide/>
                    
                </div>
                <div className="sm:w-[48%] mt-6 sm:mt-0">
                    <FlashSaleBanner/>
                    <b className="sm:text-2xl ">Bếp ga mini Maxsun MS-3500CS</b><br></br>
                    <div className="flex my-4"><b className="my-2 mr-4">Màu sắc</b><ColorRadio/></div>
                    <hr className="my-4"/>
                    <div className="leading-loose">
                        <b>Đặc tính sản phẩm</b>
                        <p>Công suất: <span className="ml-6">1.5 kW</span></p>
                        <p>Kích thước: <span className="ml-6">326 x 277 x 91 mm</span></p>
                        <p>Trọng lượng: <span className="ml-6">1.6 kg</span></p>
                    </div>
                    <hr className="my-4"/>
                    <div>
                        <b>399.000đ</b>
                        <s className="ml-8 mr-4">599.000đ</s>
                        <s class="text-[#C4171D]">-33%</s>
                    </div>
                    <div className="flex justify-between sm:my-8 my-4">
                        <div className="w-[49%]" onClick={() => alert("Thêm vào giỏ hàng thành công")}>
                        <button class={"w-full h-full text-[11px] sm:text-[16px] py-2 sm:py-4 border border-[#C4171D] relative rounded-full group overflow-hidden bg-white text-[#C4171D] inline-block rounded-full "}>
                            <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-[#C4171D] group-hover:w-full"}></span>
                            <div class={"relative group-hover:text-white flex items-center justify-center font-bold"}>
                            THÊM VÀO GIỎ HÀNG <ShoppingCartOutlinedIcon className="ml-1"/>
                            </div>
                        </button>
                        </div>
                        <Link to="/gio-hang" target="_top" className="w-[49%]">
                            <button class={"w-full text-[11px] h-full sm:text-[16px] py-2 sm:py-4 border border-[#C4171D] relative rounded-full group overflow-hidden bg-[#C4171D] text-white inline-block rounded-full "}>
                                <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                                <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center font-bold"}>
                                MUA NGAY <BiRightArrowAlt className="ml-1 text-[20px]"/>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="bg-[#F5F5F5] px-4 sm:px-8 py-4">
                        <div className="mb-2"><b>Ưu đãi thêm</b></div>
                        <hr className="border-black"/>
                        <div className="my-4">
                            <CheckCircleOutlineIcon className="text-green-600 mr-4"/>
                            <span className="font-bold">Hỗ trợ</span> vận chuyển lên tới 70.000 vnđ.
                        </div>
                        <hr className="border-black"/>
                        <div className="my-4">
                            <CheckCircleOutlineIcon className="text-green-600 mr-4"/>
                            Lỗi là đổi mới trong <span className="font-bold">7 ngày</span>.</div>
                        <hr className="border-black"/>
                        <div className="my-4 flex">
                            <CheckCircleOutlineIcon className="text-green-600 mr-4"/>
                            <span>Đổi trả và bảo hành cực dễ </span> 
                            <span className="font-bold sm:ml-1"> chỉ cần số điện thoại</span>.</div>
                        <hr className="border-black"/>
                        <div className="flex items-center my-4">
                            <CheckCircleOutlineIcon className="text-green-600 mr-4"/>
                            <img src="endow1-1677206938.png" className="mr-1"></img>
                            Giảm thêm 100k khi thanh toán qua thẻ Visa</div>
                        <hr className="border-black"/>
                        <div className="my-4">
                            <CheckCircleOutlineIcon className="text-green-600 mr-4"/>
                            Sản phẩm <span className="font-bold">chính hãng</span>.</div>
                    </div>
                </div>
            </div>
            <TabsComponent/>
        </div>
    )
}

function ColorRadio() {
    const [color, setColor] = useState("")
    return (
        <div className="flex">
            <button className={color === 1 ? "text-blue-600 border border-black mr-2 flex items-center px-2" :
        "border border-black mr-2 flex items-center px-2"} onClick={() => setColor(1)}>
            {color === 1 ? <><CheckIcon className=""/> Vàng chanh</> : <>Vàng chanh</>}
            </button>
            <button className={color === 2 ? "text-blue-600 border border-black flex items-center px-2" :
                    "border border-black flex items-center px-2"} onClick={() => setColor(2)}>
            {color === 2 ? <><CheckIcon className=""/> Xanh bạc hà</> : <>Xanh bạc hà</>}</button>
        </div>
    )
}

function FlashSaleBanner() {
    const deadline = new Date("June 01, 2023 00:00:00");
    return (
        <>
            {deadline.getTime() > new Date().getTime() &&
                <div class="h-[100px] sm:h-[150px] rounded-[10px] flex justify-end items-center pr-4 mb-8
                bg-no-repeat bg-cover bg-center bg-[url('./background/812_1679451017_867641a6389a4d05.png')] mt-4 sm:mt-0">
                    <FlashSaleTimer width="w-[45%]" text="THỜI GIAN CÒN LẠI" deadline={new Date("June 01, 2022 00:00:00")}/>
                </div>}

        </>
    )
}

function Slide() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = ["ms-3500cs4-1684294662.jpg", "3500cs2-1684294665.jpg", "3500cs3-1684294660.jpg", 
    "3500cs-1684294669.jpg", "3500cs-vali-1684294667.jpg", "https://swiperjs.com/demos/images/nature-1.jpg"]
    const deadline = new Date("June 01, 2022 00:00:00")
    let pos;
    deadline.getTime() > new Date().getTime() ? pos = "sm:top-[77%]" : pos = "sm:top-[65%]"
    return (
        <>
            <Swiper effect={"fade"} speed={2000} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }}
                modules={[EffectFade, FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2 h-[450px] sm:min-h-[700px]"
                autoplay={{ delay: 4000, disableOnInteraction: false, }}>
                {slides.map(i => <SwiperSlide key={i}><img className="hover:scale-110 mx-auto transition-[transform] duration-300 object-cover" src={i}/></SwiperSlide>)}
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} 
                breakpoints={{0: {slidesPerView: 4},640: {slidesPerView: 5},}} modules={[Thumbs, Autoplay]}
                className={"mySwiper w-3/4 top-[86%] !absolute left-[12.5%] " + pos}>
                {slides.map(i => 
                    <SwiperSlide key={i} className="border border-white hover:border-[#C4171D]">
                        <img src={i} />
                        </SwiperSlide>)}
            </Swiper>
        </>
    );
}



function TabsComponent() {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {setValue(newValue);};
    return (
    <div className="mx-2 sm:mx-8">
        <Box className="border-y border-y-black pt-4 my-8">
          <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'red'}}}>
              <Tab value="1" label="Thông tin chi tiết sản phẩm" 
              className="!mr-6 !font-bold hover:!text-[#C4171D]" />
              <Divider orientation='vertical' flexItem />
              <Tab value="2" label="Sản phẩm liên quan" className="!mx-6 !font-bold hover:!text-[#C4171D]" />
              <Divider orientation='vertical' flexItem />
              <Tab value="3" label="Hướng dẫn đặt hàng" className="!mx-6 !font-bold hover:!text-[#C4171D]" />
          </Tabs>
        </Box>
        {value === "1" ?
            <>
                <div className="sm:flex justify-between">
                    <div className="sm:w-[48%] text-justify">
                        <p>Bếp ga mini hồng ngoại MS-3500CS có kiểu dáng sang trọng, 
                            tinh tế với chất liệu Inox cao cấp nổi bật, 
                            độ bền cao cùng khả năng chịu nhiệt tốt, 
                            chống ăn mòn, dễ lau chùi sau mỗi lần sử dụng. 
                            Đặc biệt, bếp sở hữu công nghệ đầu đốt hồng ngoại làm từ sứ ceramic 
                            với khả năng tiết kiệm ga vượt trội lên đến 30% so với đầu đốt thông thường, 
                            không bị gió làm tắt bếp, đồng thời đốt cháy hoàn toàn lượng ga tiêu thụ.</p>
                        <ul className="list-disc ml-8">
                            <li>Bảo hiểm chống nổ 10 tỷ đồng.</li>
                            <li>Đầu đốt sứ hồng ngoại với khả năng tiết kiệm ga vượt trội lên đến 30% so với đầu đốt thông thường, 
                                không bị gió làm tắt bếp, đồng thời đốt cháy hoàn toàn lượng ga tiêu thụ.</li>
                            <li>Chất liệu Inox chống rỉ, chống cháy, dễ dàng vệ sinh.</li>
                            <li>Thiết bị chống nổ thế hệ mới: chống quá áp, tự động ngắt ga.</li>
                            <li>Được sản xuất với công nghệ Hàn Quốc, 
                                sản phẩm đạt chứng chỉ về chất lượng và an toàn như CSA, CE, AGA, KGS, CGAC, GU…</li>
                        </ul>
                    </div>
                    <table className="sm:w-[48%] bg-gray-200 mt-4 sm:mt-0">
                        <tr className="bg-black text-white">
                            <th colspan="2" className="py-4">Thông số kỹ thuật</th>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Thương hiệu</td>
                            <td className="w-1/2 border border-white pl-4 py-2">Maxsun (Hàn Quốc)</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Model</td>
                            <td className="w-1/2 border border-white pl-4 py-2">MS-3500CS</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Công Suất</td>
                            <td className="w-1/2 border border-white pl-4 py-2">1.5 kW</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Kích thước</td>
                            <td className="w-1/2 border border-white pl-4 py-2">326 x 277 x 91 mm</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Trọng lượng</td>
                            <td className="w-1/2 border border-white pl-4 py-2">1.6 kg</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Gas sử dụng</td>
                            <td className="w-1/2 border border-white pl-4 py-2">Bình gas mini (butane)</td>
                        </tr>
                        <tr>
                            <td className="w-1/2 border border-white pl-4 py-2">Bảo hành</td>
                            <td className="w-1/2 border border-white pl-4 py-2">1 năm</td>
                        </tr>
                    </table>
                </div>
            </> : <>{value === "2" ? 
            <div className="h-[400px] ">
                <Swiper loop={true} autoplay={{ delay: 5000, disableOnInteraction: false, }}  className="h-full similar h-[380px] sm:h-[460px]" 
                    pagination={{type: "fraction"}} navigation={true} modules={[Navigation, Autoplay, Pagination]} 
                    breakpoints={{
                        0: {slidesPerView: 2},
                        640: {slidesPerView: 4},
                    }}>
                        {[0, 1, 2, 3, 4].map((i) => 
                        <SwiperSlide key={i}>
                            <Merch key={i} tag1="FLASH SALE.png" tag2="NEW.png" name="Bếp ga đôi Electrolux nhập khẩu từ nước Đức - ETG729GKTR"
                                thumbnail="image 37.png" initialPrice="1.250.000đ" saleAmount="-15%" finalPrice="3.300.000" 
                                width=""
                                rank=""/></SwiperSlide>)}
                </Swiper>
            </div> : <><CustomRadio/></>}</>
        }
        </div>
  );
}

function CustomRadio() {
    const [chosen, setChosen] = useState("Vận chuyển")
    return (
        <div className="sm:flex">
            <div className="instruction flex flex-col sm:w-1/4" >
                {["Vận chuyển", "Đổi trả", "Bảo hành"].map((i) =>
                    <button key={i} className={i !== chosen ? `font-bold flex items-center justify-between 
                    rounded-[10px] transition-all duration-200 px-4
                    hover:bg-black hover:text-white bg-gray-200 text-black h-[50px] my-2` :
                    
                    `font-bold flex items-center justify-between 
                    rounded-[10px] transition-all duration-200 px-4
                    bg-black text-white h-[50px] my-2`} 
                    value={i} onClick={() => setChosen(i)}>
                            <span>{i}</span><SouthEastIcon/>
                    </button>
                )}
            </div>
            <div className=" sm:w-3/5 sm:ml-12 mt-4 sm:mt-0">
                {chosen === "Vận chuyển" ? 
                <>
                    <p className="mb-2">Với tiêu chí mang đến trải nghiệm mua sắm tuyệt vời nhất cho khách hàng, Max Vina hỗ trợ phí giao hàng lên đến 100.000 VNĐ trên 1 đơn hàng.</p>
                    <p className="mb-2">- Khu vực nội thành Hà Nội: 20.000 - 30.000 VNĐ</p>
                    <p className="mb-2">- Khu vực ngoại thành Hà Nội và các Tỉnh khác: phí giao hàng được tính dựa trên địa chỉ giao hàng và khối lượng đơn hàng và được thông báo tới khách hàng tại trang thanh toán. </p>
                    <p className="mb-2">THỜI GIAN GIAO HÀNG</p>
                    <p className="mb-2">- Khu vực nội thành Hà Nội, Max Vina hỗ trợ giao trong ngày.</p>
                    <p className="mb-2">- Khu vực ngoại thành Hà Nội và các Tỉnh khác thời gian giao hàng từ 01 - 05 ngày làm việc, phụ thuộc vào đơn vị vận chuyển chuyển phát hàng hóa.</p>
                    <p className="mb-2">- Thời gian giao hàng được bắt đầu tính sau khi đơn hàng của Quý khách được xác nhận thành công bằng cuộc gọi của nhân viên chăm sóc khách hàng của chúng tôi.</p>
                    <p className="mb-2">Quý khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng tại Hotline 0962 247 455 để được hướng dẫn và chăm sóc.</p>
                </>: <>{chosen === "Đổi trả" ? 
                <>
                    <p className="mb-2">Trong vòng 07 (bảy) ngày kể từ khi Khách hàng nhận được sản phẩm.</p>
                    <p className="mb-2">Sản phẩm được xác định lỗi bởi các kỹ thuật viên của chúng tôi.</p>
                    <p className="mb-2">Khách hàng có thể mang hàng trực tiếp đến cửa hàng của chúng tôi hoặc gửi sản phẩm qua đường bưu điện/chuyển phát nhanh.</p>
                    <p className="mb-2">- Thời gian tiếp nhận: Sáng từ 8h00 – 12h00; chiều từ 13h00 – 17h30 từ thứ 2 đến thứ 6</p>
                    <p className="mb-2">- Địa chỉ: Số 2, Ngõ 2 Trung Kính, P. Trung Hòa, Q. Cầu Giấy, Hà Nội</p>
                    <p className="mb-2">- Tổng đài:  0962 247 455</p>
                    <p className="mb-2">- Email: daesunvinacompany@gmail.com</p>
                    <p className="mb-2">Lưu ý: Khách hàng vui lòng chi trả chi phí chuyển phát sản phẩm đến cửa hàng. Chúng tôi sẽ hỗ trợ chiều trả sản phẩm cho Khách hàng.</p>
                </> : 
                <>
                    <p className="mb-2">Thời hạn bảo hành (tính từ ngày nhận hàng của khách hàng):</p>
                    <p className="mb-2">- Các loại bếp ga: 01 (một) năm </p>
                    <p className="mb-2">- Nồi, chảo: 01 (một) tháng</p>
                    <p className="mb-2">- Khò ga mini: 03 (ba) tháng</p>
                    <p className="mb-2">- Máy xịt thơm phòng: 06 (sáu) tháng</p>
                    <p className="mb-2">- Máy sưởi ga/điện: 01 (một) năm</p>
                    <p className="mb-2">- Đèn ga dã ngoại: 06 (sáu) tháng</p>
                    <p className="mb-2">Các sản phẩm được bảo hành miễn phí do lỗi kỹ thuật được xác định từ nhà sản xuất.</p>
                </>}</>}
            </div>
        </div>
    )
}