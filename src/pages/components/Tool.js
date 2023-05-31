import Badge from '@mui/material/Badge';
import {AiOutlineQuestionCircle, AiOutlineMail} from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BsTelephone, } from "react-icons/bs";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Tool(props) {  
    let hoverEff = "hover:text-[#C4171D] "
    if (props.effDisabled === "pointer-events-none") {
      hoverEff = "";
    }
    let logo = "";
    if (props.src === "location") {
      logo = <GoLocation class="text-[20px]"/>
    } else if (props.src === "profile" ) {
      logo = <CgProfile class="text-[20px]"/>
    } else if (props.src === "question") {
      logo = <AiOutlineQuestionCircle class="text-[20px]"/>
    } else if (props.src === "tele") {
      logo = <BsTelephone class="text-[20px]"/>
    } else if (props.src === "mail") {
      logo = <AiOutlineMail class="text-[20px]"/>
    } else if (props.src === "cart") {
      logo = <div><Badge badgeContent={0} color="error" showZero><ShoppingCartOutlinedIcon/></Badge></div>
    }
    return (
      <button className={hoverEff + " flex text-start " + props.verticalAlignment + " " + props.effDisabled}>
        <div className={"w-4 h-4 sm:ml-0 mr-0 sm:mr-3 relative " + props.margin}>{logo}</div>
        <p className={props.display}>{props.name}</p>
      </button>
    )
  }