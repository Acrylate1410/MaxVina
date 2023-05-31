import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

export default function TabBar(props) {
    const navs = [{link:"flash-sale", name: "Flash Sale"},
    {link:"san-pham-ban-chay", name: "Sản phẩm bán chạy"},
    {link:"san-pham-moi", name: "Sản phẩm mới"},
    {link:"bai-viet", name: "Tin tức"},
    {link:"lien-he", name: "Stores"}
  ]
    return (
        <nav className="border-y-2 py-2 flex sm:justify-center overflow-x-auto w-full">
        {navs.map((nav) => <div className="flex" key={nav.link}>
            {nav.link !== props.currentTab ?
              <div class="group text-black transition duration-300 mx-6 sm:mx-12">
                <Link target="_top" to={"/" + nav.link}>
                    <b class="group-hover:text-[#C4171D]  overflow-hidden whitespace-nowrap text-ellipsis">{nav.name}</b>
                    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#C4171D]"></span>
                </Link>
              </div>
              :
              <div class="group text-[#C4171D] mx-6 sm:mx-12">
                  <Link target="_top" to={"/" + nav.link}>
                    <b class="overflow-hidden whitespace-nowrap text-ellipsis">{nav.name}</b>
                    <span class="block max-w-full h-0.5 bg-[#C4171D]"></span>
                  </Link>
              </div>
            }
          {nav.name !== "Stores" &&<Divider orientation='vertical' flexItem/>} 
          </div>)}
          </nav>
    )
}