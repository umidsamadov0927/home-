import '../App.css'
import {Link} from "react-router-dom";
export default function Header () {
    return (
        <>
            <header className="header py-6 bg-gray-900">
                <div className="w-[1300px] mx-auto">
                    <div className=" flex items-center justify-between">
                        <Link to="/" className="cursor-pointer">My web site</Link>
                        <div className="flex gap-4">
                            <Link to='/about' className="cursor-pointer hover:underline">About</Link>
                            <Link to="/contact" className="cursor-pointer hover:underline">Contact</Link>
                            <Link to="/tutorial" className="cursor-pointer hover:underline">Tutorial</Link>
                            <Link to="/api" className="cursor-pointer hover:underline">Api</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}