import { FaApple, FaRegUser} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import { navbarData } from "../data/MockData";
import { InavbarData } from "../types & intefaces/Types&Interfaces";
function Navbar() {
  return (
    <nav className="py-8 xl:px-32 px-10 flex justify-between items-center text-white">
      
      <div className="flex gap-1 items-center ">
        
        <FaApple className="text-3xl"/>
        <h1 className="text-4xl font-semibold ">AirPods Max</h1>
      
      </div>
      
      <div className="hidden md:block">

        <ul className="flex items-center justify-center gap-7 text-3xl">
          {navbarData.map((item : InavbarData) => {
            return (
                <li key={item.id}>
                    <a className="inline-block text-xl px-3 uppercase" href={item.link}>{item.title}</a>
                </li>
            )
          })}
          <button className="text-2xl ps-14">
            <FaRegUser />
          </button>
        </ul>
      
      </div>

      <div className="md:hidden">
          <MdMenu className="text-4xl"/>
      </div>
    
    </nav>
  )
}

export default Navbar
