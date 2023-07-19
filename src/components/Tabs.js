import React,{useState} from "react";

const Tabs=({value})=>{
    let [tab,setTab]=useState(0);
    return(
        <div>
            <ul>
                {
                     value.map((obj,i)=>{
                        // console.log(obj)
                        return(
                            <li onClick={()=>setTab(i)} >{obj.title}</li> 
                        )
                    })
                }
            </ul>
            <p>{value[tab].content}</p>
        </div>
    )
}
export default Tabs;