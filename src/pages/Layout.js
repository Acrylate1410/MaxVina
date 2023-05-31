import { useState, useRef, useEffect} from 'react';
import React from 'react'
import { BiUpArrowAlt} from "react-icons/bi";
import { AiOutlineClose} from "react-icons/ai"

import Hamburger from 'hamburger-react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import { Outlet, Link } from "react-router-dom";
import Tool from './components/Tool.js'
import { BsInstagram, BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai"
import {Collapse} from 'antd';
import {IoMdMail} from "react-icons/io"
import CustomButton from './components/CustomButton.js';
import ModalToggle from './components/ModalToggle.js';
import HQInfo from './components/HQInfo.js';
import CustomAccordion from './components/CustomAccordion.js';
const { Panel } = Collapse;

export default function Layout() {

    const data = [
      {thumbnail: "3370260686053838711253796572866085674327606n-1679898575 (1).jpg", name: "BẾP GA MINI", types: ["Bếp ga siêu nhỏ", "Bếp ga công suất lớn", "Bếp ga inox", "Bếp ga phủ sứ", "Bếp ga cao cấp", "Bếp ga hồng ngoại"]},
      {thumbnail: "2a-1679898622.jpg", name: "BẾP GA DÃ NGOẠI", types: []},
      {thumbnail: "2b-1679898633.jpg", name: "BẾP NƯỚNG, BẾP LẨU", types: []},
      {thumbnail: "2d-1679898641.jpg", name: "NỒI & CHẢO", types: ["Nồi lẩu", "Chảo nướng"]},
      {thumbnail: "2c-1679898648.jpg", name: "KHÒ GA", types: []},
      {thumbnail: "gas-heater-1684291759.jpg", name: "TRANG BỊ DÃ NGOẠI", types: []},
      {thumbnail: "2f-1679898656.png", name: "NƯỚC HOA XỊT PHÒNG", types: []},
      {thumbnail: "2h-1679898665.jpg", name: "QUẠT SƯỞI ĐIỆN", types: []},
      {thumbnail: "screenshot1678938312-1679898771.png", name: "BÌNH GA MINI", types: []}
    ]
    const destination = useRef()

    const floatingButtons = [<img alt="" className="mx-auto" src="Frame.png" />, 
    <img alt="" className="mx-auto" src="Vector (16).png" />,
    <BiUpArrowAlt className="text-3xl" onClick={() => destination.current.scrollIntoView({behavior: 'smooth'})}/>]
    
    return (
        <div className="App bg-gradient-to-tr from-[#f3f4f6] from-70% to-[#f3f4f6] sm:to-[#fee2e2]" ref={destination}>
            <div className="fixed right-0 bottom-14 z-20">
            {floatingButtons.map((b, index) => <button key={index} href='#' className="border-[#A1A1A2] border-[0.5px] flex justify-center items-center rounded-full bg-white h-10 w-10 mt-5 mx-1">{b}</button>)}
      </div>
      <div className="hidden sm:flex justify-between px-8 py-5 bg-white z-[1100] relative">
          <div className="flex items-center">
            <Tool effDisabled="pointer-events-none" margin="ml-3" src="location" name="Địa chỉ" verticalAlignment="items-center sm:mr-3" />
            <p>Lô đất CN5.1B, KCN Đình Vũ, P. Đông Hải 2, Q. Hải An, TP Hải Phòng, Việt Nam</p>
          </div>
          <div className="flex items-center">
            <Tool margin="ml-3" src="question" name="Hỗ trợ" verticalAlignment="items-center" />
            <Divider orientation='vertical' className='hidden sm:block !mx-5' flexItem/>
            <Tool margin="ml-3" src="tele" name="096 224 7455" verticalAlignment="items-center" />
          </div>
        </div>
        <div className='z-[1100] bg-gradient-to-r from-[#f3f4f6] from-50% to-[#f3f4f6] sm:to-[#fee2e2] sticky z-20 top-0'>
          <header className=" flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-8 py-5">
            <div className="order-1">
              <div className="sm:hidden">
                <React.Fragment key="left">
                  <VerticalMenu data={data}/>
                  </React.Fragment>
              </div>
              <div className={"hidden sm:block relative"}>
                <HorizontalMenu data={data}/>
              </div>
            </div>
            <div className="sm:mx-11  order-2 ">
              <Link target="_top"  to="/"><div><img alt="" src="logo.png" /></div></Link>
            </div>
            <div className="flex relative w-full sm:w-1/2 order-4 sm:order-3 mt-4 sm:mt-0">
              <input className="w-full h-4/5  pl-4 py-2 rounded-full placeholder:text-[15px]" placeholder="Nhập từ khóa tìm kiếm..." />
              <img alt="" src="Frame 661505.png" className="absolute right-1 h-[80%] top-[10%]" />
            </div>
            <div className="flex items-center order-3  sm:order-4 font-medium">
              <Link to="/gio-hang" target="_top">
                <Tool margin="ml-3" src="cart" name="Giỏ hàng" display="hidden sm:block" 
                verticalAlignment="items-center sm:ml-6" />
              </Link>
              <Divider orientation='vertical' className='hidden sm:block !mx-5' flexItem/>
              <ModalToggle orientation="h"/>
            </div>
          </header>
        </div>
        
        <Outlet/>
        
        <footer className='bg-white mt-8 pt-1'>
          <div className="sm:flex justify-between mx-4 sm:mx-8 mt-5 pb-8 border-b border-b-[#F1F1F1]">
            <Link target="_top" to="/"><div><img alt="" src="logo.png" className="mx-auto sm:m-0 sm:h-4/5"/></div></Link>
            <CustomTextField/>
          </div>
          <div className="sm:flex mx-4 sm:mx-8 justify-between mt-2 mb-5">
              <Collapse bordered={false} expandIconPosition="end" defaultActiveKey={['1']} collapsible='disabled' className="sm:w-1/3">
                  <Panel showArrow={false}  header="CÔNG TY TNHH DAESUN VINA" key="1">
                      <HQInfo/>
                  </Panel>
              </Collapse>
              <CustomAccordion type="info"/>  
              <CustomAccordion type="policy"/>   
              <Collapse bordered={false} expandIconPosition="end" defaultActiveKey={['1']} collapsible='disabled' >
                  <Panel showArrow={false}  header="THEO DÕI CHÚNG TÔI" key="1">
                  <div className="flex items-center">
                  <a href="#" className="hover:text-[#C4171D] text-4xl transition-none"><BsFacebook/></a>    
                  <a href="#" className="ml-2 flex items-center justify-center hover:bg-[#C4171D] hover:text-white w-[36px] h-[36px] rounded-full text-xl bg-black text-white"><BsInstagram/></a>
                  <a href="#" className="ml-2 hover:text-[#C4171D] text-[43px]  transition-none"><AiFillTwitterCircle/></a>
                  </div>
                  </Panel>
              </Collapse>
          </div>
          <p className="text-center p-10">Copyright © 2022 Maxvina - All rights reserved</p>
      </footer>
  </div>
    )
  }

  function CustomTextField() {
    const [alertMessage, setAlertMessage] = useState("")
    const ref = useRef("")
    return (
      <div className="sm:flex sm:w-[55%]">
          <div className="flex items-center relative sm:w-[70%] sm:my-0 my-4">
              <IoMdMail className="absolute left-4 text-[25px] z-10"/>
              <div className='h-full w-full mr-3 relative'>
                <input ref={ref} onBlur={() => ref.current.value === "" ? setAlertMessage("Email không được phép rỗng") :
              !ref.current.value.endsWith("@gmail.com") ? setAlertMessage("Email không hợp lệ") : setAlertMessage("")} placeholder="Email" className="border border-[#DADCE0] h-full w-full rounded-full pl-12 sm:pl-12 py-2 placeholder:text-[15px]"/>
                <p className={' absolute left-10 text-red-600'}>{alertMessage}</p>
            </div>
          </div>
          <button onClick={() => ref.current.value === "" ? setAlertMessage("Email không được phép rỗng") :
              ref.current.value.endsWith("@gmail.com") && alert("Successful")} 
            className={"sm:w-[30%] w-full px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full "}>
                  <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                  <div className={"relative group-hover:text-[#C4171D] flex items-center justify-center undefined"}>
                  ĐĂNG KÝ NGAY
            </div>
          </button>
      </div>
    ) 

    
  }


  function VerticalMenu(props) {
    const [vMenu, setVMenu] = useState({button: false, state: {top: false, left: false, bottom: false, right: false,}})
    let mask;
    if (vMenu.button) {
      mask = "h-[100vh] opacity-60"
    } else {
      mask = "h-[0vh] opacity-0"
    }
    const list = () => (
      <Box sx={{width: "100%"}} role="presentation" onKeyDown={() => setVMenu({button: false, state: { ...vMenu.state, ["left"]: false }})}>
        <List>
            <ListItem className="!py-4 flex !justify-between">
              <Link target="_top" to="/"><div><img src="logo.png"/></div></Link>
              <AiOutlineClose onClick={() => setVMenu({button: false, state: { ...vMenu.state, ["left"]: false }})}/>
            </ListItem>
            <ModalToggle orientation="v"/>
            <ListItem>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>{props.data[0].name.charAt(0).toUpperCase() + props.data[0].name.slice(1).toLowerCase()}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                      {props.data[0].types.map(i => <p key={i}>{i}</p>)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
            {[1, 2].map(i => 
              <ListItem key={i}>
                  <ListItemText primary={props.data[i].name.charAt(0).toUpperCase() + props.data[i].name.slice(1).toLowerCase()}/>
              </ListItem>)}
            <ListItem>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>Nồi & chảo</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                      <p>Nồi lẩu hương vị kép</p>
                      <p>Chảo nướng chống dính</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ListItem>
            {['Khò ga', 'Nước hoa xịt phòng', 'Quạt sưởi điện', 'Bình ga mini', 'Bình ga dã ngoại'].map(i =>
              <ListItem key={i}><ListItemText primary={i} /></ListItem>)}
        </List>
      </Box>
    );
    return (
      <>
        <div onClick={() => setVMenu({button: false, state: { ...vMenu.state, ["left"]: false }})} 
        className={'transition-[opacity] duration-500 absolute bg-black left-0 top-0 w-[100vw] ' + mask}></div>
        <div onClick={() => setVMenu({button: !vMenu.button, state: { ...vMenu.state, ["left"]: true }})}>
          <Hamburger size={20} toggled={vMenu.button}/>
        </div>
        <Drawer anchor={"left"} open={vMenu.state["left"]} 
            onClose={() => setVMenu({button: false, state: { ...vMenu.state, ["left"]: false }})}>
            {list("left")}
        </Drawer>
      </>
    )

  }

  function HorizontalMenu(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    let height, mask;
    if (menuOpen) {
      height = "h-[80vh]"
      mask = "h-[90vh] opacity-60"
    } else {
      height = "transition-[height] duration-300 h-[0vh]"
      mask = "h-[0vh] opacity-0"
    }
    return (
      <div>  
        <button onClick={() => setMenuOpen(!menuOpen)} >
            <Hamburger size={20} toggled={menuOpen} />
        </button>
        <div onClick={() => setMenuOpen(false)} className={'transition-[opacity] duration-500 absolute bg-black left-[-32px] w-[100vw] top-[70px] ' + mask}></div>  
        <div className={"absolute left-[-32px] top-[70px] bg-white w-[100vw] hidden sm:flex flex-wrap overflow-y-auto " + height}>
          {props.data.map((i) => <div className="pl-8 pt-8" key={i.name}>
                <HorizontalMenuProductTypeLink product={i}/>
                {i.types.map((i) => <a key={i} href="#" className="block hover:text-[#C4171D] text-bold">{i}</a>)}
            </div>)}
          </div>
        </div>
    )
  }

  function HorizontalMenuProductTypeLink(props) {
    const [textColor, setTextColor] = useState("")
    let glare;
    if (textColor === "") {
      glare = "left-[-100%]"
    } else {
      glare = "left-[100%] transition-[left] duration-[1000ms]"
    }
    return (
        <Link to="/bep-ga-mini" target='_top' onMouseOver={()=>setTextColor("text-[#C4171D]")} onMouseOut={()=>setTextColor("")}>
          
          <div className="w-[200px] h-[120px] overflow-hidden flex justify-center relative">
            <div className={'opacity-40 w-full h-[40px] absolute bg-gradient-to-t from-white to-transparent rotate-[-45deg] z-10 top-10 ' + glare}></div>
            <img className="h-full rounded-[10px]" alt="" src={props.product.thumbnail}/>
          </div>
          <b className={"block text-bold my-3 " + textColor}>{props.product.name}</b>
        </Link>
    )
  }

