import logo from "../assets/tasks.png";


export const Header = () => {
  return (
    <div>
        <nav>
          <div className="navSec1" >
            <img className="imglogo" src={logo}  alt="" />
            <p className='Heading'>TaskVista</p>
          </div>
          <div><p className="home">Home</p></div>
        </nav>
    </div>
  )
}
