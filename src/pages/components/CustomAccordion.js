import { Link } from "react-router-dom";
import {Collapse} from 'antd';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
const { Panel } = Collapse;

export default function CustomAccordion(props) {
    const [isOpen, setOpen] = useState(false)
    let height, direction;
    if (isOpen) {
        height = "h-auto"
        direction = "rotate-90"
    } else {
        height = "h-0"
        direction = "rotate-0"
    }
    let footerLinks;
    props.type === "info" ? 
    footerLinks = {
        type: "THÔNG TIN CÔNG TY", 
        links: [{text: "Giới thiệu công ty", link: "/gioi-thieu"},
        {text: "Liên hệ",link: "/lien-he"},
        {text: "Blog",link: "/bai-viet"},
        {text: "Câu hỏi thường gặp",link: "/cau-hoi-thuong-gap"},
        {text: "Giải quyết khiếu nại",link: "/giai-quyet-khieu-nai"},]
    } :

    footerLinks = { 
        type: "CHÍNH SÁCH", 
          links: [{text: "Điều khoản dich vụ", link: "/dieu-khoan-dich-vu"},
          {text: "Chính sách bảo mật", link: "/chinh-sach-bao-mat"},
          {text: "Chính sách thanh toán", link: "/chinh-sach-thanh-toan"},
          {text: "Chính sách bảo hành", link: "/chinh-sach-bao-hanh"},
          {text: "Chính sách đổi trả", link: "/chinh-sach-doi-tra"},
          {text: "Chính sách giao hàng", link: "/chinh-sach-giao-hang"},
        ]
      }

    return (
        <>
          <div className="border-t border-t-[#F1F1F1] sm:border-t-0 text-[14px]" onClick={() => setOpen(!isOpen)}>
                <div className="py-[12px] flex justify-between items-center">
                    <b>{footerLinks.type}</b>
                    <div  className={"sm:hidden transition-[transform] duration-300 " + direction}><ChevronRightIcon/></div>
                </div>
                <div className={height + " sm:h-auto overflow-hidden transition-[height] duration-200"}>
                    {footerLinks.links.map((l) => 
                        <Link key={l.text} to={l.link} target="_top"><p class="block hover:text-[#C4171D]">{l.text}</p></Link>
                    )}
                </div>
            </div>
        </>
    )
}
