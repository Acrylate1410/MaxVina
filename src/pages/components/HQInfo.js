import Tool from "./Tool"

export default function HQInfo(props) {
    const footerTools = [
        { verticalAlignment:"", src:"location",name:"Lô đất CN5.1B, KCN Đình Vũ, P. Đông Hải 2, Q. Hải An, TP Hải Phòng, Việt Nam"},
        {  verticalAlignment:"items-center",src:"tele",name:"096 224 7455"},
        {  verticalAlignment:"items-center",src:"mail",name:"daesunvinacompany@gmail.com"},
      ]
      return (
        <>
            {footerTools.map((t) => 
              <div className="mt-2" key={t.src}>
              <Tool effDisabled="pointer-events-none" margin=""  
              verticalAlignment={t.verticalAlignment} display="ml-2 sm:ml-1" src={t.src} name={t.name}>
              </Tool></div>)}
      </>
      )
}