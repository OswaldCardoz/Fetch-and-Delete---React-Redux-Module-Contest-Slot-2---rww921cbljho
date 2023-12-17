import { useContext, useEffect } from "react";
import { AuthContext } from "./_app";

import DataItem from "./dataItem";
function Dashboard() {
  const { data, setData, msg, setMsg } = useContext(AuthContext);

  return (
    <div id="dashboardPage">
      <div id="message">msg</div>


      <DataItem />




    </div>
  );
}
export default Dashboard;
