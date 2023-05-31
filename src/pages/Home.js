
import { useState} from 'react';
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, Scrollbar, Navigation, Grid } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid'
import 'swiper/css/autoplay';
import Merch from './components/Merch.js'
import GermanyBanner from './components/GermanyBanner.js'
import TabBar from './components/TabBar.js'
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { VscTriangleDown } from 'react-icons/vsc';
import FlashSaleTimer from './components/FlashSaleTimer.js';

  function Category(props) {
    const [hover, setHover] = useState(false)
    let textColor;
    let shadow;
    if (hover) {
      textColor = "text-[#C4171D]"
      shadow = "shadow-[0_5px_40px_-20px_rgba(0,0,0,0.3)]"
    } else {
      textColor = "text-black"
      shadow = ""
    }
    return (
      <div className="text-center" onMouseOver={()=>setHover(true)} 
      onMouseOut={()=>setHover(false)}>
              <div className={shadow + " shadow-[#C4171D] bg-white aspect-square px-1 transition-all duration-200 sm:px-5 m-3 flex items-center justify-between rounded-[35%] overflow-hidden"}>
                <img alt="" src={props.thumbnail} className=""/>
              </div>
              <p className={textColor + " font-medium"}>{props.name}</p>
      </div>
    )
  }
  
  function MerchType() {
    return (
      <div className="h-full">
        <div className={"h-full relative flex items-center"}>
          <Swiper loop={true} autoplay={{ delay: 5000, disableOnInteraction: false, }}  className="h-full" 
           pagination={{type: "fraction"}} navigation={true} modules={[Pagination, Navigation, Grid, Autoplay]} 
           breakpoints={{
              0: {slidesPerView: 2, grid: {rows: 2}},
            640: {slidesPerView: 3, grid: {rows: 1}},
          }}>
            {[0, 1, 2, 3, 4].map((i) => 
            <SwiperSlide className='!h-[45%] sm:!h-full' key={i}>
                <Merch tag1="FLASH SALE.png" tag2="NEW.png" thumbnail="image 38.png"
                    initialPrice="1.127.000đ" saleAmount="-15%" finalPrice="980.000"
                    disableLiked="y" width=" sm:w-[95%] sm:mt-[30%]" rank=""
                    name="Bếp ga đôi Electrolux nhập khẩu từ nước Đức - ETG729GKTR"/></SwiperSlide>)}
          </Swiper>
      </div>
      </div>
    )
  }
   function HowToReach(props) {
    return (
      <div className="flex bg-white p-6 sm:mx-2 my-2 sm:my-0 sm:w-[35%]">
              <div className="w-[30%] flex justify-center mt-2"><img alt="" src={props.logo} className="mr-4 h-20"/></div>
              <div className='flex-1'>
                <b className="text-[#C4171D] sm:text-xl">{props.string1}</b>
                <p className="text-[12px] sm:text-[16px] mb-2">{props.string2}</p>
                <Link to="/lien-he" target="_top" className={" px-6 py-2.5 transition-all duration-300 hover:border-white border border-black relative rounded-full group overflow-hidden font-medium bg-white text-black inline-block rounded-full "}>
                  <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-[#C4171D] group-hover:w-full"}></span>
                  <div className={"relative group-hover:text-white flex items-center justify-center"}>
                    {props.content} <span className="ml-1"><BiRightArrowAlt/></span>
                </div>
              </Link>
              </div>
          </div>
    )
   }

   function ImgSlideToolbar(props) {
    return (
      <div className="min-h-[600px] sm:min-h-0 text-center sm:text-start flex flex-col sm:flex-row justify-between sm:items-center bg-gradient-to-b from-[#D9D3C7] from-80% to-[#f3f4f6] sm:to-[#D9D3C7] to-80% mx-2 sm:mx-8 mt-5 rounded-3xl h-[550px] sm:h-[450px]">
          <div className="relative sm:px-12 py-5 w-full sm:w-2/5 ">
              <b className="btext1 text-[22px] sm:text-[220%] overflow-hidden">{props.text1}</b>
              <p className="btext2 mt-4  overflow-hidden text-[18px]">{props.text2}</p>
              <Link to="#" target="_top" className={"mt-5 px-6 py-2.5 border border-black relative rounded-full group overflow-hidden font-medium bg-black text-white inline-block rounded-full "}>
                  <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                  <div className={"relative group-hover:text-black flex items-center justify-center undefined"}>
                  Xem thêm <span className="ml-1"><BiRightArrowAlt/></span>
                </div>
              </Link>
          </div>
          <div className={"h-[45%] sm:h-full w-full sm:w-3/5 mb-auto ml-auto "}>
                      <img className="h-full w-full rounded-b-3xl sm:!rounded-bl-none sm:rounded-r-3xl" src={props.pic}></img>
          </div>   
      </div>
    )
   }
  
   function Catalog(props) {
    const merches = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => 
    <Merch key={item} tag1="FLASH SALE.png" tag2="NEW.png" name="Bếp ga đôi Electrolux nhập khẩu từ nước Đức - ETG729GKTR"
    thumbnail="image 37.png" initialPrice="1.250.000đ" saleAmount="-15%" finalPrice="3.300.000" 
    width={props.isALeaderboard ? " sm:w-[23.5%] w-full" : " sm:w-[23.5%] w-[44%]"} 
    rank={props.isALeaderboard ? item : ""}  isFlex={props.isALeaderboard && "flex items-center sm:block"}/>
      )
    return (
      <>
        <div className="sm:mx-8 flex flex-wrap justify-center">
            {merches}
        </div>
      </>
    )
   }
  
  function ScrollbarCarousel() {
    const categories = [
      {link:"/bep-ga-mini", thumbnail:"a-1679467958.jpg",name:"Bếp ga mini"},
      {link:"", thumbnail:"c-1679467973.jpg",name:"Bếp ga dã ngoại"},
      {link:"",  thumbnail:"b-1679467983.jpg",name:"Bếp nướng, bếp lẩu"},
      {link:"",  thumbnail:"d-1679467991.jpg",name:"Nồi & Chảo"},
      {link:"",  thumbnail:"e-1679468001.jpg",name:"Khò ga"},
      {link:"",  thumbnail:"ngh-120001-1684227543.jpg",name:"Trang bị dã ngoại"},
      {link:"",  thumbnail:"f-1679468009.jpg",name:"Nước hoa xịt phòng"},
      {link:"",  thumbnail:"g-1679468018.jpg",name:"Quạt sưởi điện"},
      {link:"",  thumbnail:"picture1d-1679456051.jpg",name:"Bình ga mini"}          
  ]
    return (
      <>
      <div>
        <Swiper className="h-[400px] sm:h-[270px] mb-auto custom-scrollbar" loop={true}  
          autoplay={{ delay: 5000, disableOnInteraction: false, }} modules={[Pagination, Autoplay, Grid]} breakpoints={{
            0: {
              slidesPerView: 3, grid: {rows: 2}
            },
            640: {
              slidesPerView: 6, grid: {rows: 1}
            },
          }} pagination={{ clickable: true }}>
              {categories.map((c) => <SwiperSlide key={c.name} className='!h-1/2'>
                                        <Link to={c.link} target='_top'>
                                          <Category thumbnail={c.thumbnail} name={c.name} />
                                        </Link>
                                      </SwiperSlide>)}
        </Swiper>

        </div></>
    )
  }

  function FlashSaleBanner() {
    const deadline = new Date("June 01, 2023 00:00:00");
    return (
      <>
        {deadline.getTime() > new Date().getTime() && 
        <div className=" fs h-[1150px] sm:h-[600px] pt-64 sm:pt-0 sm:pl-20 my-2 sm:my-8 sm:flex justify-between items-center bg-no-repeat bg-[url('./background/1440x6806.png')] bg-[#c4171d]">
            <FlashSaleTimer width="w-[45%] sm:w-1/5 " text="KẾT THÚC SAU" extraStyle=" sm:mt-16 mx-auto sm:mx-0" deadline={deadline}/>
            <div className={"sm:w-[70%] h-[780px] sm:h-full mt-6 sm:mt-0 sm:mr-7"}>
                <MerchType/>
            </div>
        </div>}
        </>
    )
  }

  export default function Home() {
    const banners = [
      {redirectTo: "/bep-ga-mini", pic: "", swapTo2: "", swapTo1: ""},
      {redirectTo: "#", pic: " (3)", swapTo2: " sm:order-2", swapTo1: " sm:order-1"},
      {redirectTo: "#", pic: " (2)", swapTo2: "", swapTo1: ""},
    ]
    return (
      <>
      <TabBar currentTab="/"/>
      <Swiper loop={true} autoplay={{ delay: 5000, disableOnInteraction: false, }} className='banner animate-fade-in-down'   modules={[Autoplay, Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
          <SwiperSlide>
            <ImgSlideToolbar text1="Hè sang cùng MaxSun Thắp lửa hạnh phúc gia đình" 
              text2="Cùng gia đình tận hưởng bữa cơm thân mật ngày cuối năm với những món ngon bằng ngọn lửa hạnh phúc."
              pic="happy-big-asian-family-sitting-big-dinner-table-outdoors-celebrating-lunar-new-year-decorations-with-best-wishes-inscription-background1.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <ImgSlideToolbar text1="Thương hiệu chuẩn Hàn Quốc MaxVina"
              text2="Ngập tràn ưu đãi - Ưu đãi đến 50%. Liên hệ 096 224 7455 để được tư vấn và nhận ưu đãi ngày hôm nay!!!"
              pic="393_1680159239_217642532073f02a.png"/>
          </SwiperSlide>
      </Swiper>     
        <p className="text-center font-bold mb-5 mt-5 sm:mt-20 sm:text-4xl py-4">Bạn đang muốn tìm sản phẩm</p>
        <div className="mx-auto sm:mx-8">
          <ScrollbarCarousel/>
        </div>
        <div><GermanyBanner/></div>
        <p className="text-center font-bold my-8 sm:my-16 sm:text-3xl">Có thể bạn quan tâm</p>
      <Catalog isALeaderboard={false}/>

      <FlashSaleBanner/>
      <div className="mt-20">
        {banners.map((b) =>
            <div key={b.pic} className="h-[1250px] sm:h-[540px] sm:flex sm:mx-8 justify-between items-center bg-white mb-20">
              <div className={"h-[35%] sm:h-full sm:w-[38%] " + b.swapTo2}>
                <Link to={b.redirectTo} target="_top"><img alt="" src={"Frame 661580" + b.pic + ".png"} className="w-full h-full"/></Link>
              </div>
              <div className={"sm:w-[62%] h-[65%] sm:h-full mt-6 sm:mt-0" + b.swapTo1}>
                      <MerchType></MerchType>
              </div>
            </div>
        )}
        </div>
      <p className="text-center font-bold my-10 sm:text-3xl"><span className="bg-[#C4171D] text-white py-0.5 sm:py-1 px-1 sm:px-4 rounded-md">TOP</span> sản phẩm bán chạy</p>
      <Catalog isALeaderboard={true}/>
      <Link to="/san-pham-ban-chay" target='_top'>
      <div className="text-center mx-auto mb-5">
          <button className={"mt-5 px-6 py-2.5 border border-black relative rounded-full group overflow-hidden font-medium bg-black text-white inline-block rounded-full "}>
                    <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                    <div className={"relative group-hover:text-black flex items-center justify-center undefined"}>
                    Xem thêm <span className="ml-1"><VscTriangleDown/></span>
                  </div>
          </button>
        </div>
        </Link>
        <div className="sm:flex justify-center items-center py-32 px-4 bg-no-repeat bg-cover bg-[url('./background/ho-chi-minh-city-vietnam-during-sunse1.png')] bg-center">
          <HowToReach logo="Vector (12).png" content="Tìm ngay" string1="MaxVina Store" string2="Tìm cửa hàng gần nơi bạn nhất." btn="Tìm ngay" btnWidth="w-4/5 sm:w-1/2"/>
          <HowToReach logo="phone-1677031577.png" content="Tư vấn ngay" string1="Chăm sóc khách hàng" string2="Bạn có thắc mắc với sản phẩm." btn="Tư vấn ngay" btnWidth="w-full sm:w-2/3"/>      
        </div>
        </>
    )
  }