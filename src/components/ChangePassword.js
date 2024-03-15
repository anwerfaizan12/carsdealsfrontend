import { useState } from "react";
import { Navigate } from 'react-router-dom';


function ChangePassword() {
  const[newPassword,setNewPassword]=useState("");
  const [oldPassword,setOldPassword]=useState("");
  const[email,setEmail] = useState("");
  const [redirect,setRedirect]=useState(false);



  const handlePassword=async(e)=>{
    e.preventDefault();
    const response=await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/user/updatepassword',{
    method:'POST',
    body:JSON.stringify({oldPassword,newPassword,email}),
    headers:{'Content-Type':'application/json'},
    credentials:'include',
    });
    if(response.ok){
      alert("Password updated successfully")
        setRedirect(true);
    }
    else{
      alert("Wrong credentials");
    }
  }

  if(redirect===true){
    alert("Password Updated Successfully")
     return <Navigate to ={'/login'}/>
  }

  return (
    <div className="login">
    <div className="container mt-5">
    <div className="row">
    <div className="col-12">
    <h2 className="login d-flex justify-content-center">Change Password</h2>
    <form onSubmit={handlePassword}>
    <div class="mb-3">
      <input type="email" className="form-control" required="true" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div class="mb-3">
      <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Old Password" aria-describedby="passwordHelp" value={oldPassword} onChange={(e)=>{setOldPassword(e.target.value)}}/>
    </div>
    <div className="mb-3">
      <input type="password" className="form-control" required="true" placeholder="New Password" id="exampleInputPassword1" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
      </div>
    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary mb-2 mt-3">submit</button>
    </div>
  </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ChangePassword;
