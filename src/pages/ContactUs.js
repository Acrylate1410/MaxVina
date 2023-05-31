import RedBanner from "./components/RedBanner"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import { GoLocation } from "react-icons/go"
import HQInfo from "./components/HQInfo"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { TextField } from "@mui/material";
import { BiRightArrowAlt } from "react-icons/bi";

export default function ContactUs() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "#", text: "Liên hệ"}]
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <RedBanner vector="contact.png" text1="KẾT NỐI" text2="LIÊN HỆ VỚI CHÚNG TÔI" src="295_1679544492_148641bd0ac1a832.png"/>
            <div className="sm:flex mx-4 sm:mx-8 justify-between">
                <div className="sm:w-[60%] bg-white pb-8">
                    <div className="border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4">
                        <div className="text-[#C4171D] flex items-center font-medium">
                            <GoLocation className="mr-2"/><span className=" overflow-hidden whitespace-nowrap text-ellipsis">Danh sách cửa hàng và đại lý uỷ quyền</span></div>
                    </div>
                    <div className="px-4 sm:px-8 ">
                        <div className="bg-[#F1F1F1] px-6 py-3 font-bold mt-8">1. Trụ sở chính công ty</div>
                        <div className="px-6">
                            <p className="font-medium my-4">CÔNG TY TNHH DAESUN VINA</p>
                            <div class="text-[12px] sm:text-[16px]"><HQInfo lineHeight="mt-2"/></div>
                        </div>
                        <div className="bg-[#F1F1F1] px-6 py-3 font-bold mt-8">2. Danh sách đại lý ủy quyền</div>
                        <button className="text-start px-6 border border-[#D9D9D9] rounded-[5px] hover:border-[#C4171D] sm:w-[48%] my-4 relative">
                            <img src="icons8-map.png" className="absolute w-8 h-8 right-3 top-3"></img>
                            <p className="font-bold mb-2 mt-4">TP. Hà Nội</p>
                            <p className="font-bold">Văn phòng Hà Nội</p>
                            <p className="text-sm my-6"><span className="text-[#8B8B8B] mr-3">Địa chỉ:</span>Số 2 Ngõ 2 Trung Kính, Cầu Giấy, Hà Nội - Dịch Vọng - Cầu Giấy - Hà Nội</p>
                            <p className="text-sm my-6"><span className="text-[#8B8B8B] mr-3">Điện thoại:</span>0962.247.455</p>
                            <p className="text-sm my-6"><span className="text-[#8B8B8B] mr-3">Email:</span>daesunvinacompany@gmail.com</p>
                        </button>
                    </div>
                </div>
                <div className="sm:w-[38%] bg-white h-max mt-4 sm:mt-0">
                    <div className="border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4">
                        <div className="text-[#C4171D] flex items-center font-medium"><ForumOutlinedIcon className="mr-2"/>
                        <span className=" overflow-hidden whitespace-nowrap text-ellipsis">Nhập thông tin để kết nối với chúng tôi</span></div>
                    </div>
                    <div className="px-8 mt-4">
                        <TextField required className="!my-3 p-2 mx-4 w-full" placeholder='Họ và tên' label="Họ và tên" />
                        <TextField required className="!my-3 p-2 mx-4 w-full" placeholder='Email' label="Email" />
                        <TextField required className="!my-3 p-2 mx-4 w-full" placeholder='Số điện thoại' label="Số điện thoại" />
                        <TextField required multiline className="w-full !my-3 p-2 mx-4" placeholder='Ghi chú thêm' label="Ghi chú thêm" />
                        <button class={"my-8 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full w-full"}>
                            <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                            <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center"}>
                            Gửi thông tin <span class="ml-1"><BiRightArrowAlt/></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}