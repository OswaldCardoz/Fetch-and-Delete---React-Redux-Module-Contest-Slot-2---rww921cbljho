import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";

import DataItem from "./dataItem";
function Dashboard() {
  const { data, setData, msg, setMsg } = useContext(AuthContext);
  const API = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"


  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const res=await fetch(API);
        const json=await res.json();
        setData(res);
      }catch(error){
        console.error("error fetching data:",error);
      }
    };
    fetchData();
  },[])

  const handleDelete=(id)=>{
    if(!msg){
      const updatedData=data.filter((item)=>item.id !==id);
      setData(updatedData);
      setMsg("Data Deleted");

      setTimeout(()=>{
        setMsg("");
      },3000);
    }
  };

  return (
    <div id="dashboardPage">
      <div id="message">{msg}</div>
      {Array.isArray(data)&&data.map((item)=>(
      <DataItem key={item.id} data={item} onDelete={()=>handleDelete(item.id)} />))}
    </div>
  );
}
export default Dashboard;
