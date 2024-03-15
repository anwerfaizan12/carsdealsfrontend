import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function CarDetails() {
    const {id} = useParams();
    console.log(id);
    const [isAuthorized,setIsAuthorized] = useState(false);
    const [carDetails,setCarDetails] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/cardetails/${id}`, {
                    method:'GET',
                    credentials:'include',
            })
                
                if(!response.ok){
                    alert("Something wrong");
                }
                if (response.ok) {
                    setIsAuthorized(true);
                    const data = await response.json();
                    const info = data.data;
                    setCarDetails(info);

                }
            } catch (error) {
                console.log(error);
            }
            }
        
        fetchData();
    },[]);

    return (
        <div>
            {isAuthorized === true ? 
                <div className='container-fluid mt-2 cardetails'>
                    <div className='row'>
                        <div className='col-lg-6 '>
                            <div className="card">
                                <img src={`https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/${carDetails.carImage}`}  className="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div className='col-lg-6 p-0 d-flex align-items-center'>
                            <div className="card-body">
                                <h1 className="card-title d-flex justify-content-center mt-2" style={{color:"teal", fontFamily:"fantasy"}}>Car Details</h1>
                                <h5 className= "d-flex justify-content-center mt-3" style={{color:"teal", fontFamily:"fantasy"}}>Type - {carDetails.type}</h5> 
                                <h5 className= "d-flex justify-content-center mt-3" style={{color:"teal", fontFamily:"fantasy"}}>Name - {carDetails.name}</h5> 
                                <h5 className= "d-flex justify-content-center mt-3" style={{color:"teal", fontFamily:"fantasy"}}>Model - {carDetails.model} </h5> 
                                <h5 className= "d-flex justify-content-center mt-3" style={{color:"teal", fontFamily:"fantasy"}}>Location - {carDetails.location}</h5> 
                                <div className='d-flex justify-content-center mt-3 mb-2'>
                                    <div className="d-flex justify-content-center" style={{backgroundColor:"lightblue",color:"white",borderRadius:"0.2rem" ,padding:"0.5rem"}}>
                                        <Link to={`/buy/${id}`}>buy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : <div></div>}
        </div>
    )
}