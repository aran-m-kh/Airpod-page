import { FaApple, FaRegUser} from "react-icons/fa";
import { navbarData } from "../data/MockData";
import { InavbarData } from "../types & intefaces/Types&Interfaces";
function Navbar() {

  
  
  return (
    <nav className="py-5 xl:px-24 px-10 flex justify-between items-center text-white z-20 relative">
      
      <div className="flex gap-1 items-center justify-center">
        
        <FaApple className="text-3xl"/>
        <h1 className="text-3xl font-semibold ">AirPods Max</h1>
      
      </div>
      
      <div className="hidden md:block">

        <ul className="flex items-center justify-center gap-4 text-2xl">
          {navbarData.map((item : InavbarData) => {
            return (
                <li key={item.id}>
                    <a className="inline-block text-base px-3 uppercase hover:text-indigo-900 duration-300" href={item.link}>{item.title}</a>
                </li>
            )
          })}
          <button className="text-xl ps-14 hover:text-indigo-900 duration-300">
            <FaRegUser />
          </button>
        </ul>
      
      </div>
    
    </nav>
  )
}

export default Navbar
