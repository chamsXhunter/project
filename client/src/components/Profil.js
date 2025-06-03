import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edituser, logout } from "../JS/userSlice/userSlice";
import "./profil.css"
import { useState } from "react";
import { deleteparticipation } from "../JS/participationSlice";

function Profil({ping, setping}) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fullname= `${user?.name || ''} ${user?.lastname || ''}`.trim();
  const [edited, setedited] = useState({
     name: user?.name,
  lastname: user?.lastname,
  email: user?.email,
  password:user?.password,

  })
  const participations=useSelector((state)=>state.participation.participationlist);
  console.log(participations)
  return (
    <div>


   

      <div className="profil" style={{    marginTop: "250px",
    marginBottom: "150px"}}>
     

 <>


  <div className="main-content">

    {/* Page content */}
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow" style={{marginTop:"4px"}}>
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img
                      src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                      className="rounded-circle" style={{marginTop:"68px"}}
                    />
                  </a>
                </div>
              </div>
            </div>
      
            <div className="card-body pt-0 pt-md-4" style={{marginTop:"113px"}}>
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">22</span>
                      <span className="description">Friends</span>
                    </div>
                    <div>
                      <span className="heading">10</span>
                      <span className="description">Photos</span>
                    </div>
                    <div>
                      <span className="heading">89</span>
                      <span className="description">Comments</span>
                    </div>
                 
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  {user?.name} {user?.lastname}<span className="font-weight-light">
                  </span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2" />
                 {user?.email}
                </div>
                  <a href="#!" className="btn btn-sm btn-primary"  onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}>
                    Logout
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 order-xl-1">
          <div className="card bg-secondary shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">My account</h3>
                </div>
                <div className="col-4 text-right">
                  <a href="#!" className="btn btn-sm btn-primary"  onClick={() => {
          dispatch(edituser({id:user?._id, edited}));
          setping(!ping);
        }}>
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="input-username"
                          className="form-control form-control-alternative"
                          placeholder={user?.name}
                          onChange={(e)=>setedited({...edited, name:e.target.value})}
                        
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="input-email"
                          className="form-control form-control-alternative"
                          placeholder={user?.lastname}
                          onChange={(e)=>setedited({...edited, lastname:e.target.value})}

                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Email
                        </label>
                         <input
                          type="email"
                          id="input-email"
                          className="form-control form-control-alternative"
                          placeholder={user?.email}
                          onChange={(e)=>setedited({...edited, email:e.target.value})}

                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Password
                        </label>
                        <input
                          type="email"
                          id="input-email"
                          className="form-control form-control-alternative"
                          placeholder={user?.password}
                          onChange={(e)=>setedited({...edited, password:e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
               <hr className="my-4" />
                {/* Address */}
                <h6 className="heading-small text-muted mb-4">
                  My Sessions
                </h6>
                <div className="pl-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group focused">
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          My Activities
                        </label>
                    
                      </div>
                      <table style={{width:"100%"}}>
                        <tr>
                          
                          <th>Activity</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                     { participations?.filter((el)=>el?.nameuser==fullname).map((el)=> <tr>
                         
                          <td>{el?.activity}</td>
                          <td>{el?.date}</td>
                          <td>{el?.status}</td>
                          <td><button style={{padding:"8px", border:"none"}} onClick={()=>{dispatch(deleteparticipation(el?._id));setping(!ping); alert("votre participation est annulé")}}>x</button></td>
                        </tr>)  }
                      </table>
                    </div>
                  </div>
                  <div className="row">
                  
          
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</>



      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
