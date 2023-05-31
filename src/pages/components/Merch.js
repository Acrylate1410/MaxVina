
import { useState} from 'react';
import { Link } from "react-router-dom";
import LikeBtn from './LikeBtn';

  export default function Merch(props) {
    const [hover, setHover] = useState(false)
    let color, thumbnailPadding, glare;
    if (!hover) {
      color = "text-black"
      thumbnailPadding = ""
      glare = "left-[-100%]"
    } else {
      color = "text-[#C4171D]"
      thumbnailPadding = "scale-110"
      glare = "left-[100%] transition-[left] duration-[1000ms]"
    }

    let rankDivColor = "";
    if (props.rank === 1) {
      rankDivColor = "bg-[#C4171D]"
    } else if (props.rank === 2) {
      rankDivColor = "bg-[#EC3138]"
    } else if (props.rank === 3) {
      rankDivColor = "bg-[#FF7277]"
    } else if (props.rank >= 4 ) {
      rankDivColor = "bg-[#666666]"
    }
    return (
     <Link to="/chi-tiet-san-pham" target="_top" className={"p-4 mx-2 my-4 sm:m-2 relative bg-white block" + props.width}
        onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}>
      <img alt="" src={props.tag1} className="absolute left-2 top-[-6px] sm:w-[50px] w-[35px] z-50"/>
        <img alt="" src={props.tag2} className="absolute left-12 sm:left-16 top-[-6px] sm:w-[50px] w-[35px] z-50"/>
        <LikeBtn position1="right-3 top-5" position2="right-4 top-4"/>
        <div class={props.isFlex}>
              <div className="justify-center relative flex items-center sm:min-h-[210px] sm:max-h-[210px] py-10 sm:py-0 overflow-hidden">
                <div className={'opacity-30 w-full h-[80px] absolute bg-gradient-to-t from-white to-transparent rotate-[-45deg] z-10 ' + glare}></div>
                <img alt="" className={thumbnailPadding + " sm:max-h-[200px] transition-[transform] duration-300"} src={props.thumbnail}/>
              </div>
        
        <div className='text-[10px] sm:text-[12px]'>
        {props.rank !== "" && <span className={"text-white py-0.5 px-2 rounded-md mb-5 text-base " + rankDivColor}>TOP {props.rank}</span>}
          <div className={"ell text-base sm:text-lg sm:min-h-[60px] sm:max-h-[60px] " + color}><div class="overflow-hidden text-ellipsis">{props.name}</div></div>
            {props.saleAmount != null &&       
              <>
                <s class="text-base sm:text-lg text-gray-500">{props.initialPrice}</s>
                <span className="text-[#C4171D] ml-1 sm:ml-5 text-base sm:text-lg">{props.saleAmount}</span><br /></>
            }
            <b class="text-lg sm:text-xl">{props.finalPrice}</b>
        </div>
        </div>
     </Link>
    )
  }

