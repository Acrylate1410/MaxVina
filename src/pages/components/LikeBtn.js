
import { BiHeart} from "react-icons/bi";
import { FcLike, } from "react-icons/fc";
import { useState } from "react";

export default function LikeBtn(props) {
    const [likeBtn, setLikeBtn] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault()
      alert("Bạn cần đăng nhập để thực hiện chức năng này")
    }
    return (
      <button className='bg-black' onClick={handleSubmit} 
      onMouseOver={()=>setLikeBtn("hidden")} onMouseOut={()=>setLikeBtn("")}>
        <p className={"z-[100] absolute text-white rounded-full text-center h-6 w-6 sm:h-8 sm:w-8 text-[18px] sm:text-2xl " + props.position1}>
          <FcLike/>
        </p>
        <p className={"z-[100] absolute bg-slate-300 text-white rounded-full text-center h-6 w-6  sm:h-8 sm:w-8 text-[18px] sm:text-2xl flex justify-center items-center " 
        + props.position2 + " " + likeBtn}>
          <BiHeart/>
        </p>
      </button>
    )
  }