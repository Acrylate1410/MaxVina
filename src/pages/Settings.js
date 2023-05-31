import { Radio } from "antd"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import { useState } from "react"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Modal } from 'antd';
import { TextField } from "@mui/material";
import { BiRightArrowAlt } from "react-icons/bi";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MopedIcon from '@mui/icons-material/Moped';
import CustomButton from "./components/CustomButton";
export default function Settings() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
                    {key: 2, link: "#", text: "Quản lý tài khoản"}]
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <RadioComponent/>
        </>
    )
}

function RadioComponent() {
    const [filter, setFilter] = useState("Thông tin cá nhân");
    const logo = (t) => {
        if (t === "Thông tin cá nhân") {
            return <AccountCircleOutlinedIcon/>
        } else if (t === "Thay đổi mật khẩu") {
            return <LockOutlinedIcon/>
        } else {
            return <NoteOutlinedIcon/>
        }
    }
    return (
        <div className="flex justify-between">
            <div className="w-1/4 mx-8">
                <Radio.Group className="settings flex flex-col mb-8 sm:my-8 sm:justify-center overflow-x-auto whitespace-nowrap text-ellipsis" 
                    defaultValue={filter} buttonStyle="solid">
                        {["Thông tin cá nhân", "Thay đổi mật khẩu", "Đơn hàng của tôi"].map((i) =>
                            <Radio.Button onClick={() => setFilter(i)} 
                            className="mb-4 bg-[#f3f4f6] font-medium mx-2 rounded-full hover:bg-white hover:text-black p-6 flex items-center" 
                            value={i}><span className="mr-2">{logo(i)}</span><span>{i}</span></Radio.Button>
                        )}
                </Radio.Group>
            </div>
            <div className="w-2/3 mx-8 my-8">
                <b className="text-3xl ">{filter}</b>
                {filter === "Thông tin cá nhân" ?
                    <><p className="my-4">Thông tin về bạn và các lựa chọn ưu tiên của bạn trên Maxvina</p>
                    <div className="bg-white p-8 rounded-[20px]">
                        <b>Thông tin cơ bản</b>
                        <div className="border border-[#F1F1F1]  my-4"><EditText field="Tên" value="Nguyen Van Dung"/></div>
                        <div className="border border-[#F1F1F1]  my-4"><EditText field="Ngày sinh" value="03 tháng 03 năm 1985"/></div>
                        <div className="border border-[#F1F1F1]  my-4"><EditText field="Giới tính" value="Nam"/></div>
                    </div>
                    <div className="bg-white p-8 rounded-[20px]">
                        <b>Thông tin liên hệ</b>
                        <div className="border border-[#F1F1F1]  my-4"><EditText field="Email" value="dungnguyenvan@gmail.com"/></div>
                        <div className="border border-[#F1F1F1] my-4"><EditText field="Số điện thoại" value="0917.888.568"/></div>
                    </div>
                    <div className="bg-white p-8 rounded-[20px] my-4">
                        <b>Địa chỉ nhận hàng</b>
                        <Locations/>
                    </div>
                    </>
                : filter === "Thay đổi mật khẩu" ?
                <><p className="my-4">Cài đặt để giúp bạn bảo mật tài khoản của mình</p>
                <div className="bg-white p-8 rounded-[20px]">
                    <b>Đăng nhập vào Maxvina</b>
                    <ChangePassword/>
                </div> 
                </>
                : 
                <><p className="my-4">Thông tin về các đơn hàng bạn đã đặt mua</p>
                <Order isFinished={false} orders={[""]}/>
                <Order isFinished={true} orders={[""]}/>
                </>
                }
            </div>
        </div>

    )
} 
function Order(props) {
    return (
        <div className="bg-white px-8 py-8 rounded-[20px] my-4">
            <div className="text-[#666666] flex items-center justify-between">
                <div>
                    <AccessTimeIcon className="mr-2"/>
                    <span>Thời gian mua hàng: </span>
                    <span className="font-bold text-black ml-1">12h30’ - 28/01/2023</span>
                </div>

                {!props.isFinished ? <div class={"px-6 py-2.5 border border-[#219653] relative rounded-full group overflow-hidden font-medium bg-white text-[#219653] inline-block rounded-full"}>
                    Đang giao hàng
                </div> : <>
                <div className="flex items-center text-[#219653] ">
                    <MopedIcon/>
                    <p className="mx-4">Giao hàng thành công</p>
                    <div class={"px-6 py-2.5 border border-[#219653] relative rounded-full group overflow-hidden font-medium bg-white text-[#219653] inline-block rounded-full"}>
                        Hoàn thành
                    </div>
                </div></>}
            </div>
            {props.orders.map(i => 
                <div className="flex items-center justify-between my-8">
                    <div className="w-3/5 flex items-center">
                        <img src="image 1+.png" className="mr-4"/>
                        <div>
                            <p>Bếp ga đôi Electrolux nhập khẩu từ nước Đức - ETG729GKTR</p>
                            <p>x 1</p>
                        </div>
                    </div>
                    <b>330.000đ</b>
                </div>
            )}
            <div className="text-end my-8">Thành tiền: <span className="ml-[25%] text-[#C4171D] font-bold text-[20px]">1.650.000đ</span></div>
            {!props.isFinished && 
            <div className="text-end"><CustomButton extraStyle="w-fit" c1="[#C4171D]" c2="[#C4171D]" c3="white" content="Huỷ đơn hàng"/></div>}
        </div> 
    )
}
function ChangePassword() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div className="flex items-center">
            <div className="w-1/4 py-2 my-4">Mật khẩu</div>
            <div className="flex-1">Thay đổi lần gần đây nhất: 4 thg 11, 2019</div>
             <button onClick={() => { setModalOpen(true); } } ><EditOutlinedIcon/></button>
             <Modal transitionName="" maskTransitionName="" open={isModalOpen}
                onOk={() => { setModalOpen(true); } } 
                onCancel={() => { setModalOpen(false); } }
                footer={null}>
                <div className="w-3/5 mx-auto">
                    <div className="font-bold text-center text-2xl mb-4">Thay đổi mật khẩu</div>
                    <TextField type="password" className="w-full !my-3 p-2" placeholder='Mật khẩu hiện tại' label="Mật khẩu hiện tại" />
                    <TextField type="password" className="w-full !my-3 p-2" placeholder='Mật khẩu mới' label="Mật khẩu mới" />
                    <TextField type="password" className="w-full !my-3 p-2" placeholder='Xác nhận mật khẩu mới' label="Xác nhận mật khẩu mới" />
                    <button class={"my-12 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full w-full"}>
                        <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                        <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center text-[12px] sm:text-[16px]"}>
                        Tiếp tục mua hàng <span class="ml-0.5 sm:ml-1"><BiRightArrowAlt/></span>
                        </div>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

function Locations() {
    const [defaultLocation, setDefaultLocation] = useState(1);
    const defaultDiv = <div className="flex">
    <div className="w-1/4"></div>
    <div className="border border-[#C4171D] text-[#C4171D] w-fit py-2 px-6 my-2">Mặc định</div></div>
    return (
        <>
            <div className="border border-[#F1F1F1] my-4" onClick={() => setDefaultLocation(1)}>
                <EditText field="Địa chỉ 1" value="Số 85 Vũ Trọng Phụng, Thanh Xuân, Hà Nội"/>
                {defaultLocation === 1 && defaultDiv}
            </div>
            <div className="border border-[#F1F1F1] my-4" onClick={() => setDefaultLocation(2)}>
                <EditText field="Địa chỉ 2" value="198 Dương Đông, Phú quốc, Kiên Giang"/>
                {defaultLocation === 2 && defaultDiv}
            </div>
        </>
    )
}

function EditText(props) {
    return (
        <div className="flex items-center">
            <div className="w-1/4 py-2 ">{props.field}</div>
                <div className="flex-1">{props.value}</div>
                <button><EditOutlinedIcon/></button>
        </div>
    )
}