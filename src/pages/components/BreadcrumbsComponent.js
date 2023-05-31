import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
export default function BreadcrumbsComponent(props) {
    return (
        <div class="border-y border-[#A1A1A2] py-4 text-[#A1A1A2]  overflow-x-auto w-full flex sm:px-8">
                {props.content.map(i => <div key={i.key} className='flex items-center'>
                    <Link to={i.link} target='_top'>
                        <p className='overflow-hidden whitespace-nowrap text-ellipsis mx-4 '>{i.text}</p>
                    </Link>
                    {i.key !== props.content.length && <p>|</p>}
                </div>) }
        </div>
    )
}