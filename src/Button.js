import { useState } from "react"

export default function Button({color, Size, name, click, msg}){

    return (
        <>
            <button onClick={()=>click(msg)} style={{backgroundColor:color, fontSize:Size}}>{name}</button>
        </>
        
    )
}

// function Button1({color, Size, name, click}){

//     return (
//         <>
//             <button onClick={()=>click(name)} style={{backgroundColor:color, fontSize:Size}}>{name}</button>
//         </>
        
//     )
// }

          //이게 없으면 자바에서의 프라이빗 모드?가됨