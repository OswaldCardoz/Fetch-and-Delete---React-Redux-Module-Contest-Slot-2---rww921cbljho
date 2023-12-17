import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ data,onDelete}) {
    const {msg } = useContext(AuthContext);

    return (
        <div className="data">
            <div>{data.id}</div>
            <div>Bus Name: {data.busName}</div>
            <div>{data.ticketPrice}/-</div>
            <div>From: {data.source}</div>
            <div>To: {data.destination}</div>
            <button onClick={onDelete} disabled={msg !== ""}>Delete</button>
        </div>
    );
}
export default DataItem;
