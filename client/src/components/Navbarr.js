import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../JS/userSlice/userSlice';

function Navbarr() {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate=useNavigate()

  return (
    <div >
      <header className="header">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
          <a href="#">
            <div className="logo d-flex flex-row align-items-center justify-content-start">
              <img src="images/dot.png" alt="" />
              <div>
                Sport<span>fit</span>
              </div>
            </div>
          </a>
          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
               <Link to="/services">Classes &amp; Services</Link>
              </li>
              <li>
                <Link to="/equipement">Equipement</Link>
              </li>
              <li>
               <Link to="/nutrition">Nutrition</Link>
              </li>
                  <li>
               <Link to="/profil">Profil</Link>
              </li>
            </ul>
          </nav>
        { !user? 
        <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"15px", fill:"#ff9711",marginRight:"10px"}}><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
            <Link to="/login" style={{textDecoration:"none", color:"white"}}><div>Sign in</div></Link>
          </div>:
          <div style={{marginLeft:"50px", display:"flex", justifyContent:"space-around"}}><h5>Hello {user?.name}</h5><button    onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" style={{width:"50px", fill:"white"}}/></svg></button></div>
        }
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbarr
