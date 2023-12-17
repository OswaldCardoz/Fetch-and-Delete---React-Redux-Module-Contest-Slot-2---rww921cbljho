import { useContext } from "react";
import { AuthContext } from "./_app";

function DataItem({ }) {
    const { } = useContext(AuthContext);

    return (
        <div className="data">
            <div></div>
            <div>Bus Name: </div>
            <div>/-</div>
            <div>From: </div>
            <div>To: </div>
            <button>Delete</button>
        </div>
    );
}
export default DataItem;
