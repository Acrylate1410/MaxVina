import { useEffect, useRef, useState } from "react"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import RedBanner from "./components/RedBanner"
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import RedeemIcon from '@mui/icons-material/Redeem';

export default function Cart() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
                    {key: 2, link: "#", text: "Giỏ hàng"}]
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <RedBanner vector="cart1.png" src="411_1679544686_47641bd16e49c9a.png" text1="GIỎ HÀNG" text2="THÔNG TIN SẢN PHẨM"/>
            <div className="bg-white mx-2 sm:mx-8 rounded-[20px] mb-24">      
                <div className="mx-8 py-4 flex border-b-2 border-[#C4171D] font-bold">
                    <div className="w-1/2 text-center text-[14px] sm:text-[16px]">Danh sách món hàng</div>
                    <div className="hidden sm:block w-[12%] text-end">Đơn giá</div>
                    <div className="hidden sm:block w-[30%] text-center">Số lượng</div>
                    <div className="hidden sm:block flex-1 text-end">Tổng cộng</div>
                </div>
                <div className="mx-8 border-b border-b-[#BDBDBD]"><CartItem/></div>
                <div className="sm:w-2/5 ml-auto flex flex-col items-end px-8">
                    <AggregateTableRow text1="Tiền hàng" text2="0đ"/>
                    <VoucherForm/>
                    <AggregateTableRow text1="Tổng tiền thanh toán" text2="0đ"/>
                <Link to="/thanh-toan" target="_top" className="my-8">
                    <div class={"px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full "}>
                        <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                        <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center"}>
                        Tiến hành thanh toán <span class="ml-1"><BiRightArrowAlt/></span>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}

function VoucherForm() {
    const [isEntered, setEntered] = useState(false)
    const input = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        input.current.value === "ACR400" ? setEntered(true) : alert("Không tồn tại mã giảm giá này")
    }
    return (
        <>
        {!isEntered ? <form className="flex w-full relative items-center py-4">
            <RedeemIcon className="absolute left-2 text-[#C4171D]"/>
            <input placeholder="Nhập mã Voucher:" className="w-3/5 sm:w-[70%] py-2 pl-10" ref={input}/>
            <button onClick={handleSubmit} className="flex-1 bg-[#C4171D] py-2 text-white rounded-full ml-4 font-medium" 
            >Áp dụng</button>
        </form>
        : <AggregateTableRow text1="Voucher giảm giá" text2="-100.000đ"/>}
        </>
    )
}

function AggregateTableRow(props) {
    return (
        <div className="flex w-full border-y border-y-[#F1F1F1] py-4">
            <p className="w-2/3 text-end text-[#666666]">{props.text1 + ":"}</p>
            <b className="flex-1 text-end text-[#C4171D] text-[20px]">
                {props.text2}</b>
        </div>
    )

}

function CartItem() {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
        {quantity !== "disable" && 
            <div className="flex flex-wrap items-center py-6">

                    <div className="w-3/4 sm:w-1/2 flex items-center">
                        <button onClick={() => setQuantity("disable")}><div className="text-[10px] sm:text-[16px] rounded-full bg-gray-400 hover:bg-[#C4171D] w-4 h-4 sm:w-7 sm:h-7 text-white text-center">x</div></button>
                        <ProductLink/>
                    </div>
               
                <div className="w-1/4 sm:w-[12%] text-end text-[10px] sm:text-[16px]"><b>330.000đ</b></div>
                <div className="w-3/4 sm:w-[30%] text-center mt-4 sm:mt-0">
                    <div className="w-max border border-gray-400 sm:mx-auto ml-8 flex items-center rounded-full p-0.5 sm:p-1">
                        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                            <div className="text-[10px] sm:text-[16px] rounded-full bg-gray-400 hover:bg-[#C4171D] w-4 h-4 sm:w-7 sm:h-7 text-white text-center">-</div>
                        </button>
                        <input className="mx-2 text-[10px] sm:text-[16px] text-center sm:w-8 w-3" onChange={(e) => 
                            {isNaN(parseInt(e.target.value)) || parseInt(e.target.value) < 1 ? setQuantity(1) : setQuantity(parseInt(e.target.value))}} 
                            value={quantity}></input>
                        <button onClick={() => setQuantity(quantity + 1)}>
                            <div className="text-[10px] sm:text-[16px] rounded-full bg-gray-400 hover:bg-[#C4171D] w-4 h-4 sm:w-7 sm:h-7 text-white text-center">+</div>
                        </button>
                    </div>
                </div>
                <div className=" mt-4 sm:mt-0 w-1/4 sm:w-[8%] text-end font-bold text-[10px] sm:text-[16px]">330.000đ</div>
            </div>}
        </>
    )
}

function ProductLink() {
    const [textColor, setTextColor] = useState("")
    return (
        <Link target="_top" to="/chi-tiet-san-pham" onMouseOver={() => setTextColor("text-[#C4171D]")}
        onMouseOut={() => setTextColor("")}>
            <div className="flex items-center">
                <img src="image 1.png" className="sm:mx-6 mx-1 w-2/5 sm:w-auto"></img>
                <p className={"text-[10px] sm:text-[16px] " + textColor}>Bếp ga đôi Electrolux nhập khẩu từ nước Đức - ETG729GKTR</p>
            </div>
        </Link>
    )
}
