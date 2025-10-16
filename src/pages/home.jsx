import {Counter} from "../components/counter.jsx";

export default function Home (){
    return (
        <>
            <div>
                <Counter/>
                <h1 className="text-black text-[24px] text-center mt-[20%] font-[600]">Home page</h1>
            </div>
        </>
    )
}