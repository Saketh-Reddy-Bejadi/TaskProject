import logo from "../assets/tasks.png";


export const Header = () => {
  return (
    <div>
        <nav>
            <img className="imglogo" src={logo}  alt="" />
            <p className='Heading'>TaskVista</p>
        </nav>
    </div>
  )
}
