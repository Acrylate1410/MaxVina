import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import RedBanner from "./components/RedBanner"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { TextField } from '@mui/material';
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import ModalToggle from "./components/ModalToggle"; 
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#C4171D',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#C4171D',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: "solid",
    borderWidth: "3px",
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    ...(ownerState.active && {backgroundColor: '#C4171D',}),
    ...(ownerState.completed && {backgroundColor: '#C4171D',}),
  }));
  
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {{1: <CheckIcon />, 2: <CheckIcon />, 3: <CheckIcon />,}[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  
  
function CustomizedSteppers() {
    const [activeStep, setActiveStep] = useState(0)
    return (
        <>
      <Stack spacing={4} className="mx-auto mb-16 sm:w-[60%] mt-8">
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {['Thông tin giao hàng', 'Thông tin thanh toán', 'Hoàn thành'].map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {activeStep === 0 ?
        <div className="sm:flex mx-8 justify-between">
            <div className="sm:w-[60%] bg-white pb-8">
                <div className="sm:flex justify-between border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4">
                    <div className="text-[#C4171D] flex items-center font-medium"><GoLocation/><span className="ml-2">Thông tin người nhận hàng</span></div>
                    <p>Bạn đã có tài khoản? <ModalToggle/></p>
                </div>
                <div className="flex flex-wrap justify-around">
                    <TextField className="w-[94.5%] sm:w-[45%] !my-3 p-2 mx-4" placeholder='Họ và tên' label="Họ và tên" />
                    <TextField className="w-[94.5%] sm:w-[45%] !my-3 p-2 mx-4" placeholder='Email' label="Email" />
                    <TextField className="w-[94.5%] sm:w-[45%] !my-3 p-2 mx-4" placeholder='Số điện thoại' label="Số điện thoại" />
                    <TextField className="w-[94.5%] sm:w-[45%] !my-3 p-2 mx-4" placeholder='Địa chỉ chi tiết' label="Địa chỉ chi tiết" />
                    <select className="w-[94.5%] sm:w-[45%] h-[55px] my-3 block border border-[#cccccc] hover:border-black px-2">
                        <option value="volvo">Tỉnh/thành phố</option>
                    </select>
                    <select className="w-[94.5%] sm:w-[45%] h-[55px] my-3 border border-[#cccccc] hover:border-black px-2">
                        <option value="volvo">Quận/Huyện</option>
                    </select>
                    <TextField multiline className="w-[94.5%] !my-3 p-2 mx-4" placeholder='Ghi chú thêm' label="Ghi chú thêm" />
                </div>
                <FormControlLabel control={<Checkbox defaultChecked/>} label=" Giao hàng đến cùng địa chỉ"  className="!mx-5 !block !my-4"/>
                <button onClick={() => setActiveStep(1)}class={"ml-4 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full "}>
                    <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                    <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center"}>
                    Tiến hành thanh toán <span class="ml-1"><BiRightArrowAlt/></span>
                    </div>
                </button>
            </div>
            <div className="sm:w-[38%]">
                <CartInPayment/>
            </div>
            
        </div> : activeStep === 1 ?
        <div className="sm:flex mx-8 justify-between">
            <div className="sm:w-[60%] bg-white h-max">
                <div className="border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4">
                    <div className="text-[#C4171D] flex items-center font-medium"><span><CreditCardIcon className="mr-2"/>Thông tin thanh toán</span></div>
                </div>
                <div className="px-4 sm:px-8">
                    <p className="my-8">Vui lòng chọn hình thức thanh toán</p>
                    <FormControl className="rd">
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} 
                                label={<PaymentMethod logo="image 84.png" text1="Thanh toán khi nhận hàng (COD)" text2="Thanh toán tiền mặt khi nhận hàng"/>} />
                            <FormControlLabel value="male" control={<Radio />} 
                                label={<PaymentMethod logo="image 85.png" text1="Chuyển khoản ngân hàng" text2="Thanh toán cực kỳ tiện lợi, nhanh chóng, và an toàn."/>} />
                            <FormControlLabel value="other" control={<Radio />} 
                                label={<PaymentMethod logo="image 79.png" text1="Thanh toán bằng VNPay" text2="Quét mã QR từ ứng dụng ngân hàng"/>} />
                        </RadioGroup>
                    </FormControl>
                    <br></br>
                    <button onClick={() => setActiveStep(2)} class={"my-12 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full "}>
                        <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                        <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center"}>
                        Xác nhận đơn hàng <span class="ml-1"><BiRightArrowAlt/></span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="sm:w-[38%]">
                <div className="border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4 bg-white mt-8 sm:mt-0">
                    <div className="flex items-center justify-between">
                        <span className=" text-[#C4171D] font-medium"><AccountCircleOutlinedIcon/> Thông tin người nhận hàng</span>
                        <button onClick={() => setActiveStep(0)}>Sửa</button>
                    </div>
                </div>
                <div className="px-4 sm:px-8  py-4 bg-white">
                    <p>Họ tên</p>
                    <b>NGUYEN DUNG BT</b>
                </div>
                <div className="px-4 sm:px-8  py-4 bg-white">
                    <p>Email</p>
                    <b>dungnguyen@gmail.com</b>
                </div>
                <div className="px-4 sm:px-8  py-4 bg-white">
                    <p>Số điện thoại</p>
                    <b>098.9999.9999</b>
                </div>
                <div className="px-4 sm:px-8  py-4 bg-white">
                    <p>Địa chỉ</p>
                    <b>Số 85, Vũ Trọng Phụng, Phường Thanh Xuân, TP. Hà Nội</b>
                </div>
                <div className="px-4 sm:px-8  py-4 bg-white mb-8">
                    <p>Ghi chú</p>
                    <b>Đóng gói cẩn thận có xốp chống shock</b>
                </div>
                <CartInPayment/>
            </div>

        </div>
        :
        <>
            <div className="text-center sm:w-[55%] w-[90%] mx-auto">
                <b className="text-[20px]">Chúc mừng!</b><br/>
                <b className="text-[20px]">Đơn hàng của bạn đã được đặt thành công!</b>
                <p className="my-4">Cảm ơn bạn đã sử dụng sản phẩm/dịch vụ của Max Vina. Mã đơn hàng của bạn là #NW321120, chúng tôi đang xử lý và thông báo lại sớm nhất cho bạn.</p>
                <p>Quý khách khi cần hỗ trợ xin vui lòng liên hệ Hotline: <span className="text-[#C4171D]">024.6286.0808</span> hoặc email: 
                <span className="text-[#C4171D]"> hotro@MaxVina.vn</span></p>
                <div className="flex justify-around">
                <button class={"my-12 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-white text-[#C4171D] inline-block rounded-full sm:w-[40%] w-[48%]"}>
                        <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-[#C4171D] group-hover:w-full"}></span>
                        <div class={"relative group-hover:text-white flex items-center justify-center text-[12px] sm:text-[16px]"}>
                        Đến đơn hàng của tôi 
                        </div>
                </button>
                <button class={"my-12 px-6 py-2.5 border border-[#C4171D] relative rounded-full group overflow-hidden font-medium bg-[#C4171D] text-white inline-block rounded-full sm:w-[40%] w-[48%]"}>
                        <span class={"absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-300 ease-out transform bg-white group-hover:w-full"}></span>
                        <div class={"relative group-hover:text-[#C4171D] flex items-center justify-center text-[12px] sm:text-[16px]"}>
                        Tiếp tục mua hàng <span class="ml-0.5 sm:ml-1"><BiRightArrowAlt/></span>
                        </div>
                </button>
                </div>
            </div>
        </>}
      </>
    );
  }

export default function Payment() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
                    {key: 2, link: "/gio-hang", text: "Giỏ hàng"}]
    return (<>
    <BreadcrumbsComponent content={content}/>
    <RedBanner vector="cart2.png" src="194_1680055423_48164239c7f9449e.png" text1="GIỎ HÀNG" text2="THANH TOÁN ĐƠN HÀNG"/>
    <CustomizedSteppers/>
    </>)
}


function PaymentMethod(props) {
    return (
        <div class="flex h-[100px] sm:h-[80px] items-center justify-between">
            <div className="w-[24%] sm:w-[80px] flex justify-center items-center">
                <img src={props.logo} className="h-[20px]"></img>
            </div>
            <div className="flex-1">
                <b className="sm:text-[12px]">{props.text1}</b>
                <p className="sm:text-[12px] text-[14px]">{props.text2}</p>
            </div>
        </div>
    )
}


function AggregateTableRow(props) {
    return (
        <div className="flex justify-between my-8 mx-4 sm:m-8">
            <p>{props.text1}</p>
            <b className="text-[#C4171D]">{props.text2}</b>
        </div>
    )
}

function CartInPayment() {
    return (
    <div className="bg-white h-max pb-1">
        <div className="flex justify-between border-b-2 border-b-[#C4171D] px-4 sm:px-8 py-4 mt-8 sm:mt-0">
            <div className="text-[#C4171D] flex items-center font-medium"><span><ShoppingCartOutlinedIcon/> Giỏ hàng</span></div>
            <Link to="/gio-hang" target="_top">Sửa</Link>
        </div>
        <CartItem/>

        <AggregateTableRow text1="Tiền hàng:" text2="0đ"/>
        <AggregateTableRow text1="Mã giảm giá:" text2="0đ"/>
        <AggregateTableRow text1="Phí vận chuyển:" text2="Vui lòng nhập địa chỉ"/>
        <AggregateTableRow text1="Tổng tiền thanh toán:" text2="0đ"/>
    </div>
    )
}

function CartItem(props) {
    return (
        <div className="sm:mx-8 mx-4">
            <Link to="/chi-tiet-san-pham" target="_top">
                <div class="flex items-center border-b border-b-black py-4">
                    <div className="w-1/5 mr-4"><img src="may-suoi-sgh-1001-1684311660.jpg" className="mx-auto"></img></div>
                    <div className="flex-1">
                        <p>Máy sưởi ga du lịch SGH - 100</p>
                        <p>x1 <span className="font-bold ml-2">1.299.000đ</span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


