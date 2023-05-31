import { FcGoogle } from "react-icons/fc";
import { Modal } from 'antd';
import { TextField } from '@mui/material';
import CustomButton from './CustomButton.js';
import { useState } from "react";
import Tool from "./Tool.js";
import { BsFacebook } from "react-icons/bs";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";


export default function ModalToggle(props) {
    const [isModalOpen, setModalOpen] = useState({state: false, form: "Đăng nhập"});
    let buttonWidth
    isModalOpen.form === "Đăng nhập" ? buttonWidth = "sm:w-2/5" : buttonWidth = ""
    return (
      <>
      <div className={!isModalOpen.state ? "hidden" :
        "fixed w-[100vw] h-[120vh] bg-black left-0 top-0 opacity-60 z-[1200]"} 
        onClick={() => { setModalOpen({ state: false, form: "Đăng nhập" }); }}></div>
      <div className={!isModalOpen.state ? "hidden" :
        "custom-modal fixed w-[90vw] sm:w-[50vw] h-[90vh] left-[5%] right-[5%] sm:left-[25%] sm:right-[25%] top-[5%] top-0 overflow-y-auto z-10 rounded-[20px] z-[1300]"}>

        <div className="relative p-8 sm:p-10 text-center bg-white">
            <b className="text-2xl">{isModalOpen.form}</b>
            <TextField className="w-full !my-3 p-2" placeholder='Nhập tên của bạn' label="Nhập tên của bạn" />
            {isModalOpen.form === "Đăng ký" && <TextField className="w-full !my-3 p-2" placeholder='Nhập email' label="Nhập email" />}
            <TextField type="password" className="w-full !my-3 p-2" placeholder='Nhập mật khẩu' label="Nhập mật khẩu" />
            {isModalOpen.form === "Đăng ký" && <TextField type="password" className="w-full !my-3 p-2" placeholder='Nhập lại mật khẩu' label="Nhập lại mật khẩu" />}
            <div className={isModalOpen.form === "Đăng nhập" ? 'my-2 sm:flex items-center sm:justify-between' : "my-2 sm:flex items-center justify-center"}>
              {isModalOpen.form === "Đăng nhập" && <Link className="block text-[#4f46e5] hover:text-[#4f46e5] text-start" to="/forgotpassword" target="_top">Quên mật khẩu</Link>}
              <button className={"ml-auto w-full my-8 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full " + buttonWidth}>
                    <span className={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                    <div className={"relative group-hover:text-[#C4171D] flex items-center justify-center undefined"}>
                    {isModalOpen.form + " ngay"} <span className="ml-1"><BiRightArrowAlt/></span>
                  </div>
              </button>
            </div>
            <p>Hoặc đăng nhập bằng</p>
            <button type="button" className="bg-zinc-100 text-black sm:w-4/5 w-full my-3 py-4 h-10 border-2 mx-auto flex justify-center items-center">
              <FcGoogle className='w-6 h-6 mr-2' /> Sign in with Google
            </button>
            <button type="button" className="bg-zinc-100 text-black sm:w-4/5 w-full my-3 py-4 h-10 border-2 mx-auto flex justify-center items-center">
              <BsFacebook className='w-6 h-6 mr-2 text-[#3b82f6]' /> Sign in with Facebook
            </button>
            {isModalOpen.form === "Đăng nhập" &&
              <p>Bạn chưa có tài khoản? 
                <button className="ml-1 text-[#4f46e5] hover:text-[#4f46e5]"
                    onClick={() => setModalOpen(previousState => {
                      return { ...previousState, form: "Đăng ký" };
                    })}>Đăng ký ngay</button>
              </p>}
          </div>

        </div>
      {props.orientation === "h" ?
            <button className={" flex text-start items-center hover:text-[#C4171D]"}>
              <div className={"w-4 h-4 sm:ml-0 mr-0 sm:mr-3 relative ml-3"} onClick={()=>{setModalOpen({state: true, form: "Đăng nhập"});}}>
                <CgProfile class="text-[20px]"/></div>
              <p className="hidden sm:block">
                <span onClick={()=>{setModalOpen({state: true, form: "Đăng ký"});}}>Đăng ký/</span>
                <span onClick={()=>{setModalOpen({state: true, form: "Đăng nhập"});}}>Đăng nhập</span></p>
            </button>
        : props.orientation === "v" ?
        <>
        <ListItem className="text-white bg-[#C4171D] p-3" onClick={()=>{setModalOpen({state: true, form: "Đăng ký"});}}>
          <ListItemText primary={'Đăng ký (Bạn chưa đăng nhập)'} />
        </ListItem>
        <ListItem className="flex">
            <a onClick={()=>setModalOpen({state: true, form: "Đăng nhập"})} className="block w-1/2 flex justify-center py-3 border-r border-b border-black"><Tool src="profile" name="Đăng nhập" margin="mr-2" verticalAlignment="items-center"/></a>
            <Link to="/gio-hang" target="_top"  className="block w-1/2 flex justify-center py-3 border-b border-black"><Tool src="cart" name="Giỏ hàng" verticalAlignment="items-center" margin="mr-4"/></Link>
        </ListItem></> : <button onClick={()=>setModalOpen({state: true, form: "Đăng nhập"})} className="text-blue-500">Xin mời đăng nhập để đặt hàng</button>
       }
        
      </>
    )
  }
