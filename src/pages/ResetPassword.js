import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CustomButton from './components/CustomButton';

export default function ResetPassword() {
    return <div className="mx-2 my-8 sm:m-8">
        <b className="text-2xl">Lấy lại mật khẩu</b>
        <p className="my-4">Vui lòng điền email của bạn và làm theo hướng dẫn được gửi tới email.</p>
        <div className='relative sm:w-[52%] flex items-center'>
            <MailOutlineOutlinedIcon className='absolute left-4'/>
            <input className="w-full py-3 pl-12 border border-[#DADCE0] bg-[#f3f4f6]" placeholder="Email"></input>
        </div>
        <CustomButton extraStyle="w-fit my-4 " c1="[#C4171D]" c2="[#C4171D]" c3="white" content="Gửi"/>
    </div>
}