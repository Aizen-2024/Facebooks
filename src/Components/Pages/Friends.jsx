import React,{useState,useEffect,createContext,useContext} from "react";
import Fetched from "../../Hooks/Fetched";

export const MessageContext=createContext()
export const Notification_context=createContext()
export function Messenger_data({children}){
    const[message,setMessage]=useState([])
    return(
        <MessageContext.Provider value={{message,setMessage}} >
            {children}
        </MessageContext.Provider>
    )
}
export function Notification_data({children}){
    const[notify,setNotify]=useState([])
    return(
           <Notification_context.Provider value={{notify,setNotify}}>
            {children}
           </Notification_context.Provider>
    )
}


const Main=()=>{
    const{message,setMessage}=useContext(MessageContext)
    const{notify,setNotify}=useContext(Notification_context)
    const[friendsList,setFriendsList]=useState([])
    const[online,setOnline]=useState(0);
    const[rclicked,setRclicked]=useState(0)
    const[fclicekd,setFclicked]=useState(false)
    const[oclicked,setOclicked]=useState(false)
    const[hiddenRequests,setHiddenRequests]=useState([])
    
    const Onlince_clicked=()=>{
        setFclicked(false)
        setRclicked(false)
        setOclicked(!oclicked)
        return(null)
    }

    const req_clicked=()=>{
        setRclicked(!rclicked);
        setFclicked(false);
        setOclicked(false)
        return (null)
    }
    
    const friends_Clicked=()=>{
        setFclicked(!fclicekd);
        setRclicked(false);
        setOclicked(false)
        return(null)
    }
    




const Request=({data})=>{
    const reqd=data.results;
    return(
        <div>
            {reqd.map((e,i)=> 
                !hiddenRequests.includes(i) && <div id="users_reqd" key={i}> 
                    <img src={e.picture.medium} style={{float:'left'}}/>
                    <h3>{e.name.first}</h3>
                    <h3>{e.name.last}</h3>
                    <h4>{e.dob.date}</h4>
                    <button onClick={()=>{setFriendsList([...friendsList, {
                        First_name:e.name.first,
                        Last_Name:e.name.last,
                        Birthdate:e.dob.date,
                        src:e.picture.medium
                    }]);
                    setNotify([...notify,`${e.name.first} added as a friends.`]);
                    setMessage([...message,{
                        First_name:e.name.first,
                        Last_Name:e.name.last,
                        Birthdate:e.dob.date,
                        src:e.picture.medium
                    }])
                    setHiddenRequests([...hiddenRequests, i]);}}>Add friend</button>
                    <button onClick={() => {
                            setNotify([...notify,`${e.name.first} friend request was deleted.`])
                            setHiddenRequests([...hiddenRequests, i])}}>
                        Remove requests
                    </button>
                </div>
            )}
        </div>
    )
}
    
    return(
        <div className="freinds_Container">
            <div id="bttn_container">
                <button onClick={Onlince_clicked}>{online} online</button>
                <button onClick={req_clicked}>Friend requests</button>
                <button onClick={friends_Clicked}>Your friends</button>
            </div>
            
            {oclicked?<div>
                <h1>NO online friends at the moment.</h1>
                </div>:null}
            
            
            {fclicekd?(
                <div>{
                friendsList.map((e,i)=>{
                return(<div key={i} id="freinds">
                    <img src={e.src} style={{float:'left'}}/>
                    <h3>{e.First_name}</h3>
                    <h3>{e.Last_Name}</h3>
                    <h4>{e.Birthdate}</h4>
                    </div>)
            })}</div>):null}
            
            
            {rclicked?(<div>
                <Fetched url={'https://randomuser.me/api/?results=50'} renderSuccess={Request}/>
            </div>):null}
            
        </div>
    )
}
export function Friends_page(){
    return(
        <Main/>
    )
}