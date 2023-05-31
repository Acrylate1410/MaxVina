import { Link } from "react-router-dom"
import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import RedBanner from "./components/RedBanner"
import { useRef } from "react"

export default function AboutUs() {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "#", text: "Giới thiệu"}]
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const scroll = (sec) => {
        let destination;
        if (sec === 1) {
            destination = section1
        } else if (sec === 2) {
            destination = section2
        } else {
            destination = section3
        }
        destination.current.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <>
            <BreadcrumbsComponent content={content}/>
            <RedBanner vector="cart2.png" src="770_1679631697_815641d2551b29e9.png" text1="GIỚI THIỆU" text2="VỀ CHÚNG TÔI"/>
            <div className="overflow-x-auto w-full whitespace-nowrap segments flex sm:justify-center">
                <div onClick={() => scroll(1)}><SegmentButton text="GIỚI THIỆU"/></div>
                <div onClick={() => scroll(2)}><SegmentButton text="TẦM NHÌN, XỨ MỆNH"/></div>
                <div onClick={() => scroll(3)}><SegmentButton text="GIÁ TRỊ CỐT LÕI"/></div>
            </div>
            <div className="text-center my-16" ref={section1}>
                <p className="text-xl">MAX VINA</p>
                <b className="text-[#C4171D] text-2xl sm:text-5xl">GIỚI THIỆU</b>
            </div>
            <div className="sm:flex items-center">
                <div className="sm:w-[40%] mx-2 sm:mx-8">
                    <p className="my-2">Max Vina là website bán hàng trực tuyến thuộc quyền sở hữu của Công ty TNHH Daesun Vina, đánh dấu bước tiến quan trọng trong việc đầu tư xây dựng kênh bán lẻ mang lại tiện ích cho người tiêu dùng.</p>
                    <p className="my-2">Với định hướng trở thành nhà cung cấp hàng đầu Việt Nam, Max Vina xác định phương châm chiến lược để luôn là sự lựa chọn số một của khách hàng:</p>
                    <p className="my-2">- Chất lượng sản phẩm vượt trội, phù hợp với Quy chuẩn Việt Nam.</p>
                    <p className="my-2">- Giá cả cạnh tranh, phù hợp với nhiều đối tượng khách hàng.</p>
                    <p className="my-2">- Giao hàng toàn quốc nhanh chóng, tiện lợi.</p>
                    <p className="my-2">- Chế độ hậu mãi: bảo hành lên tới 1 năm.</p>
                </div>
                <div className="flex-1 relative mx-2 sm:mx-8 flex justify-end items-center mt-16 sm:mt-0">
                    <img className="absolute w-[36%] aspect-[3/4] z-10 left-0 rounded-[20px]" src="269_1684479864_48164671f7804168.png"></img>
                    <div className="flex flex-col items-center w-3/4 relative">   
                        <img className="w-full aspect-[4/3] rounded-[20px]" src="762_1679535250_63641bac92567cf.png"></img>
                        <img className="w-2/3 aspect-[2/1] rounded-[20px] mt-4" src="206_1684479266_61064671d229221b.png"></img>
                    </div>
                </div>
            </div>

            <div className="text-center mt-16"  ref={section2}>
                <p className="text-xl">MAX VINA</p>
                <b className="text-[#C4171D] text-2xl sm:text-5xl">TẦM NHÌN & SỨ MỆNH</b>
            </div>
            <div className="sm:flex mx-2 sm:mx-8 items-center mt-16">
                <img src="852_1679536030_60641baf9e25b1a.png" className="sm:w-[55%] rounded-[20px]"></img>
                <div className="sm:ml-8 mt-4 sm:mt-0">
                    <div className="font-bold mb-4">Tầm nhìn</div>
                    <div>“Trở thành nhà cung cấp lớn mạnh trên thị trường Việt Nam cũng như vươn tầm phát triển trong khu vực và trên toàn thế giới”, tạo lập vị trí vững chắc trong khu vực và từng bước vươn lên tầm vóc quốc tế. Max Vina mong muốn xây dựng nên một thương hiệu Việt có uy tín trong tất cả các lĩnh vực tham gia kinh doanh, góp phần nâng cao chất lượng cuộc sống cho người Việt Nam cả về vật chất và tinh thần.</div>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row mx-2 sm:mx-8 items-center mt-16">
                <div className="sm:mr-8 sm:order-1 order-2 mt-4 sm:mt-0">
                    <div className="font-bold mb-4">Sứ mệnh</div>
                    <ul className="list-disc ml-5">
                        <li className="mt-2">Đối với khách hàng: An toàn là số 1, không ngừng cải tiến để nâng cao chất lượng sản phẩm vượt trên sự mong đợi của khách hàng.</li>
                        <li className="mt-2">Đối với nhân viên: Nhân viên chính là giá trị cốt lõi của thành công hiện tại và tương lai. Vì vậy, Max Vina luôn luôn cải tiến môi trường làm việc, chính sách đãi ngộ để nâng cao đời sống vật chất và tinh thần của cán bộ công nhân viên.</li>
                        <li className="mt-2">Đối với các đối tác: Hợp tác dựa trên cơ sở công bằng, cởi mở, tôn trọng và giúp đỡ lẫn nhau cùng phát triển.</li>
                        <li className="mt-2">Đối với xã hội: Tuân thủ pháp luật, xây dựng và nâng cao trách nhiệm với cộng đồng.</li>
                    </ul>
                </div>
                <img src="834_1679536074_253641bafcabd51d.png" className="sm:w-[55%] rounded-[20px] order-1 sm:order-2"></img>
            </div>

            <div  ref={section3} class="sm:flex flex-col justify-center items-center mt-16 py-16 bg-no-repeat bg-cover bg-[url('./background/beautiful-city-chongqingchina1.png')] bg-center relative">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#C4171DAD] backdrop-blur-sm"></div>
                <div className="text-center mx-2 sm:mx-56 z-10 relative">
                    <p className="text-white text-xl">MAX VINA</p>
                    <b className="text-white text-2xl sm:text-5xl">GIÁ TRỊ CỐT LÕI</b>
                    <p className="text-white my-12">Với định hướng “Kinh doanh phát triển bền vững”, các hoạt động kinh doanh của Max Vina luôn tạo ra lợi ích và giá trị thực, mong muốn đem đến cho thị trường những sản phẩm – dịch vụ theo phương châm “MAX VINA TRAO UY TÍN, CHẤT LƯỢNG – ĐƯỢC NHẬN LẠI NIỀM TIN”, luôn lấy sự hài lòng của khách hàng làm thước đo cho sự phát triển của doanh nghiệp.</p>
                    <div className="flex justify-between">
                        <div className="aspect-square rounded-full bg-white w-[30%] sm:w-1/4 border-[20px] border-[#FFFFFF1A] flex justify-center items-center">
                            <img src="603_1679537222_443641bb44695028.png"></img>
                        </div>
                        <div className="aspect-square rounded-full bg-white w-[30%] sm:w-1/4 border-[20px] border-[#FFFFFF1A] flex justify-center items-center">
                            <img src="207_1679537239_33641bb457b790c.png"></img>
                        </div>
                        <div className="aspect-square rounded-full bg-white w-[30%] sm:w-1/4 border-[20px] border-[#FFFFFF1A] flex justify-center items-center">
                            <img src="176_1679537255_683641bb4674283a.png"></img>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

function SegmentButton(props) {
    return (
        <Link class="ml-3 px-6 py-2.5 border border-black 
                relative rounded-full group overflow-hidden font-medium
                inline-block rounded-full hover:border-[#C4171D] hover:bg-[#C4171D] hover:text-white
                transition-all duration-300">{props.text}</Link>
    )
}