import '../App.css'
import {useState} from "react";

export default function Index () {
    let [name, setName] = useState('umid')


    function editName (name) {
        setName(name)
    }
    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={()=>editName("samadov")}>btn</button>
                hello index page
            </div>
        </>
    )
}