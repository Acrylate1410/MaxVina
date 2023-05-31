export default function GermanyBanner() {
    const quadrilaterals = [
      { src:"Vector (18).png", height: 43 },
      { src:"Vector.png", height: 70}, 
      { src:"Mask group.png", height: 90 }
]
  return (
    <div className="sm:mx-8 mt-12 bg-gradient-to-b
          sm:bg-gradient-to-r from-black from-10% sm:from-55% to-[#e02424] relative pb-52 sm:pb-20">
          <div class="px-4 pb-4 pt-12 text-center sm:text-start sm:ml-12">
            <b class="text-[#C4171D] text-xl sm:text-2xl ">Bếp ga gia đình nhập khẩu Germany</b>
            <p class="text-white sm:w-2/5">Sản phẩm đạt giải thưởng về thiết kế, được làm từ thép không rỉ có màu sắc sang trọng và hài hoà.</p>
          </div>
          <img alt="" src="Frame 661541.png" class="mb-0"/>
          {quadrilaterals.map((q) => 
          <img alt="" key={q.src} src={q.src} class={"absolute bottom-0 right-0 sm:h-[" + q.height + "%]"}></img>)}
    </div>
  )
  }