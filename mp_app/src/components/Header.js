import logo from "../assets/tasks.png";
import "./Header.css"


export const Header = () => {
  return (
    <div>
        <nav>
            <img className="imglogo" src={logo}  alt="" />
            <h1 className='Heading' >Tasks List</h1>
        </nav>
    </div>
  )
}
