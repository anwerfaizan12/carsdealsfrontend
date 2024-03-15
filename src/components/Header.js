import { useContext,useEffect} from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import { userContext } from "../context/contextprovider";

 

function Header() {

    const {userInfo,setUserInfo} = useContext(userContext);
    


    useEffect(() => {
        const verifyCookie = async () => {
          try {
            const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/user/profile', {
              method: 'GET',
              credentials: 'include', // Include credentials (cookies) in the request
            });

    
            if (response.ok) {
              const Data = await response.json();
              const data = Data.data;
              setUserInfo(data.username);
            } else {
              console.error('Failed to verify cookie');
            }
          } catch (error) {
            console.error('Error during fetch:', error);
          }
        };
    
        verifyCookie();
      }, []); // Run the effect once when the component mounts
    

    const username=userInfo;

    return (
        <div className="container-fluid  mb-2 header p-3" style={{backgroundColor:"cyan"}}>
                <div className="row">
                    <div className="col-3">
                        <Link to="/cars" className="logo display-6 fw-bold" style={{color:"blue"}}>All-Cars</Link>
                    </div>
                    <div className="col-3  offset-5 ">
                    {
                        username === "" ?(
                        <div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" to="/login" ><h5 style={{color:"blue"}}>Login</h5></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link fw-bold" to="/register"><h5 style={{color:"blue"}}>Register</h5></Link>
                            </li>
                        </ul>
                        </div>):
                        (
                            <div>
                            <ul className="nav justify-content-center">
                            <li className="nav-item p-1">
                                <h6 className="nav-link fw-bold mt-2 " >{username}</h6>
                            </li>
                            <li className="nav-item mt-2">
                            <Link className="nav-link fw-bold" to="/logout"> logout</Link>
                            </li>
                             </ul>
                            </div>
                        )
                    }          
                    </div>
                </div>
            </div>
    );
}

export default Header;
