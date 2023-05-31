import { Link } from 'react-router-dom';
import GermanyBanner from './components/GermanyBanner';
import { FiFilter } from "react-icons/fi"
import { VscTriangleDown} from "react-icons/vsc"
import { useRef, useState } from 'react';
import { Dropdown, Space } from 'antd';
import Merch from './components/Merch';
import { useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BreadcrumbsComponent from './components/BreadcrumbsComponent';

export default function ProductsByType() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "#", text: "Bếp ga mini"}]
    return (
    <>
    <BreadcrumbsComponent content={content}/>
    <MerchesTool/>
    <Link to="/" target="_blank"><GermanyBanner/></Link>
    </>
    )
}

function MerchesTool() {
    const merches = [{id:"15", thumbnail: "picture6-1679373893.png", name: "Bếp ga mini Maxsun MS-3500CS", initialPrice: "599.000đ", saleAmount:"-33%", finalPrice:"399.000đ"}, 
    {id:"14", thumbnail: "max-crv-1683774380.jpg", name: "Bếp ga mini Maxsun MS-520", initialPrice: "289.000đ", saleAmount:"-21%", finalPrice:"229.000đ"},
    {id:"13", thumbnail: "picture1e-1679554391.jpg", name: "Bếp ga mini Maxsun MS-3800SP", initialPrice: "359.000đ", saleAmount: "-19%", finalPrice: "289.000đ"}, 
    {id:"12", thumbnail: "b2-1679628790.jpg", name: "Bếp ga mini Kovea CUBE", initialPrice: "1.389.000đ", saleAmount:"-14%", finalPrice:"1.189.000đ"},
    {id:"11", thumbnail: "picture37-1679552718.png", name: "Bếp ga mini Kovea X-ON (PINK)", initialPrice: "1.629.000đ", saleAmount:"-12%", finalPrice:"1.429.000đ"},
    {id:"10", thumbnail: "picture6-1679373893.png", name: "Bếp ga mini Kovea X-ON (WHITE)", initialPrice: "1.629.000đ", saleAmount:"-12%", finalPrice:"1.429.000đ"}, 
    {id:"9", thumbnail: "max-crv-1683774380.jpg", name: "Bếp ga mini Maxsun MS-77", initialPrice:"529.000đ", saleAmount:"-6%", finalPrice:"499.000đ"},
    {id:"8", thumbnail: "picture1e-1679554391.jpg", name: "Bếp ga mini Maxsun MS-3800", initialPrice:"349.000đ", saleAmount:"-20%", finalPrice:"279.000đ"}, 
    {id:"7", thumbnail: "b2-1679628790.jpg", name: "Bếp ga mini Maxsun MS-6000R", initialPrice:"469.000đ", saleAmount:"-17%", finalPrice:"389.000đ"},
    {id:"6", thumbnail: "picture37-1679552718.png", name: "Bếp ga mini Maxsun MS-N3600R", initialPrice:"449.000đ", saleAmount:"-18%", finalPrice:"369.000đ"},
    {id:"5", thumbnail: "picture6-1679373893.png", name: "Bếp ga mini Maxsun MS-7", initialPrice:"499.000đ", saleAmount:"-8%", finalPrice:"459.000đ"}, 
    {id:"4", thumbnail: "max-crv-1683774380.jpg", name: "Bếp ga mini Maxsun MS-N7S", initialPrice:"599.000đ", saleAmount:"-17%", finalPrice:"499.000đ"},
    {id:"3", thumbnail: "picture1e-1679554391.jpg", name: "Bếp ga mini Maxsun MS-808", initialPrice:"579.000đ", saleAmount:"-17%", finalPrice:"479.000đ"}, 
    {id:"2", thumbnail: "b2-1679628790.jpg", name: "Bếp ga mini Maxsun MS-3500", initialPrice:"289.000đ", saleAmount:"-14%", finalPrice:"249.000đ"},
    {id:"1", thumbnail: "picture37-1679552718.png", name: "Bếp ga mini Maxsun MS-8000", initialPrice:"399.000đ", saleAmount:"-8%", finalPrice:"369.000đ"}]
    const [outerCount, setOuterCount] = useState(merches.length);
    const [filter, setFilter] = useState(null);
    const [sort, setSort] = useState("");
    const convertedPrice = (s) => {
        return parseInt(s.finalPrice.replace(".", "").replace(".", "").replace("đ", ""))
    }
    const criteria = (p) => {
        if (filter === "Dưới 500 nghìn") {
            return p < 500000
        } else if (filter === "Từ 500 - 1 triệu") {
            return p >= 500000 && p <= 1000000
        } else if (filter === "Từ 1 - 2 triệu") {
            return p >= 1000000 && p <= 2000000
        } else if (filter === "Trên 2 triệu") {
            return p > 2000000
        } else {
            return true
        }
    }
    const order = (a, b) => {
        if (sort === "Giá tăng dần") {
            return convertedPrice(a) - convertedPrice(b)
        } else if (sort === "Giá giảm dần") {
            return convertedPrice(b) - convertedPrice(a)
        } else if (sort === "Tên sản phẩm A-Z"){
            return a.name.localeCompare(b.name)
        } else if (sort === "Tên sản phẩm Z-A") {
            return b.name.localeCompare(a.name)
        } else if (sort === "Cũ -> Mới") {
            return a.id - b.id
        } else {
            return b.id - a.id
        }
    }
    const isFirstRender = useRef(true)
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            let count = 0
            for (let x in merches) {
                criteria(convertedPrice(merches[x])) && count++ 
            }
            setOuterCount(count);
        }
    }, [filter]);

    const customDropdown = (props) => {
        let items = null;
        let options = null;
        const list = (array, type) => {
            return array.map((i) => <div key={i.toString()} onClick={() => {type === "filter" ? setFilter(i) : setSort(i)}}
            className={(type === "filter" ? i === filter : i === sort) ? "border-blue-500 py-2 px-4 m-2 border rounded-md hover:border-blue-500"
            : "border-black py-2 px-4 m-2 border rounded-md hover:border-blue-500"}>
                {type === "filter" ? i : i === sort ? <><CheckCircleOutlineIcon className='text-blue-500 mr-1'/><span>{i}</span></> 
                        : <span>{i}</span>}
            </div>)
        }
        
        if (props === "Giá") { 
          options = ["Dưới 500 nghìn", "Từ 500 - 1 triệu", "Từ 1 - 2 triệu", "Trên 2 triệu"]
          items = [
              {
              label: <><div class="flex">{list(options, "filter")}</div>
                  <div class="py-4 bg-gray-200 mt-2 text-center">
                      <button onClick={() => setFilter(null)} class="py-2 px-4 rounded-md border-[#C4171D] text-[#C4171D] border">Bỏ chọn</button>
                      </div></>
              }
          ]
       } else {
          options = ["Giá tăng dần", "Giá giảm dần", "Mới -> Cũ", "Cũ -> Mới", "Tên sản phẩm A-Z", "Tên sản phẩm Z-A"]
          items = [{label: <>{list(options, "sort")}</>},]
        }
         return (
          <Dropdown menu={{items}} trigger={['click']} placement={props === "Giá" ? "bottomLeft" : "bottomRight"}>
            <button onClick={(e) => e.preventDefault()}>
                <Space class="ft flex items-center h-full ml-2 px-4 py-2 border border-[#A1A1A2] rounded-md bg-white">
                    {props} <VscTriangleDown/>
                </Space>
            </button>
          </Dropdown>
         )
    }
    return (
        <>
            <div class="sm:mx-8 mx-2 py-4 flex border-b border-[#A1A1A2]">
                <div class="bg-[#C4171D] text-white font-medium flex items-center w-max py-2 px-5 rounded-md">
                    <span class="mr-1"><FiFilter/></span> Bộ lọc
                </div>
                {customDropdown("Giá")}
            </div>
            <div class="sm:mx-8 mx-2 py-4 flex justify-between items-center border-b border-[#A1A1A2]">
                <div id="count" class="font-medium">{outerCount} bếp ga mini</div>
                {customDropdown("Sắp xếp theo")}
            </div>
            <div class="sm:mx-8 mt-5 flex flex-wrap  justify-between sm:justify-start">
                {merches.filter(el => {return criteria(convertedPrice(el))})
                .sort((a, b) => {return order(a, b)})
                .map(item => <Merch key={item.id} name={item.name} tag1="FLASH SALE.png" 
                                thumbnail={item.thumbnail} initialPrice={item.initialPrice}  
                                saleAmount={item.saleAmount} finalPrice={item.finalPrice}  
                                width=" sm:w-[23.6%] w-[44%]" rank=""/>)}
            </div>
        </>
    )
}
