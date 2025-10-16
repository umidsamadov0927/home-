import { useSelector, useDispatch } from "react-redux";
import { increment , decrement , showName } from "../features/counterSlice.js";
import { fetchUsers } from "../features/apiCard.js";

export function Counter() {
    const count = useSelector((state)=> state.counter.value);
    const showStudyName = useSelector((fullName)=> fullName.counter.name);
    const showProducts = useSelector((state)=>state.products.products);
    const dispatch = useDispatch();

    return (
        <div className="bg-black">
            <div className="bg-green-500">
                <button onClick={()=> dispatch(increment())}>+</button>
                <p>{count}</p>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <button onClick={()=>dispatch(showName())}>Study</button>
            <p>{showStudyName}</p>

            <button onClick={()=> dispatch(fetchUsers())}>get products</button>
            <pre>{JSON.stringify(showProducts, null, 2)}</pre>
        </div>
    )
}