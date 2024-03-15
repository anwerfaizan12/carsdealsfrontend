import React from 'react';
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

function Car({ type, name, model, carImage, location ,_id }) {

    return (
        <div className='container-fluid'>
            <div className="row  mt-3">
                <div className='offset-lg-2 col-lg-4 mb-1'>
                    <div className="card"  >
                        <img src={'https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/' + carImage} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className='col-lg-4  d-flex align-items-center cars'>
                    <div className="card-body">
                        <h1 className="card-title d-flex justify-content-center mt-1" style={{ color: "teal", fontFamily: "fantasy" }}> Car Details</h1>
                        <h5 className="d-flex justify-content-center mt-3" style={{ color: "teal", fontFamily: "fantasy" }}> Type - {type}</h5>
                        <h5 className="d-flex justify-content-center mt-2" style={{ color: "teal", fontFamily: "fantasy" }}> Name - {name} </h5>
                        <h5 className="d-flex justify-content-center mt-2" style={{ color: "teal", fontFamily: "fantasy" }}> Model - {model}</h5>
                        <h5 className="d-flex justify-content-center mt-2" style={{ color: "teal", fontFamily: "fantasy" }}>Location - {location}</h5>
                        <div className='d-flex justify-content-center mt-3 mb-2'>
                            <div className="d-flex justify-content-center" style={{backgroundColor:"lightblue",color:"white",borderRadius:"0.2rem" ,padding:"0.5rem"}}>
                            <Link to={`/cardetails/${_id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Car;