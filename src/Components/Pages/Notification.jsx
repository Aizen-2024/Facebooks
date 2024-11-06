import React, { useContext } from "react";
import { Notification_data } from "./Friends";
import { Notification_context } from "./Friends";

const Main=()=>{
    const{notify}=useContext(Notification_context)
    return(
        <div className="notification-list">
            <h1>New Notification</h1>
            {notify.map((e,i)=>{
                return(
                    <div key={i} className="notification-item">
                        <h1>{e}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export function Notification(){
    return(
        <div className="notification-wrapper">
            <Main/>
        </div>
    )
}