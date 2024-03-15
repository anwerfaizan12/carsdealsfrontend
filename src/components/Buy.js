import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Buy() {
    const [redirect, setRedirect] = React.useState(false);

    const id = useParams();
    const Id = id.id;
    console.log(Id);

    useEffect(() => {
        async function fn() {
            const response = await fetch(`https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/buy/${Id}`, {
                method: 'GET',
                credentials: 'include',
            });
            if (!response.ok) {
                alert("Login please");
            }
            if (response.ok) {
                setRedirect(true);
            }
        }
        fn();
    }, []);





    return (
        <div>
            {redirect === true ? <div>
                <div className='container-fluid buy'>
                    <div className='row mt-5'>
                        <div className='col-12 d-flex justify-content-center  mt-5'>
                            <h2 style={{ color: "teal" }}>You have made this deal successfully.</h2>
                        </div>
                        <div className="d-flex justify-content-center mt-4  offset-5 col-2" style={{ backgroundColor: "lightblue", color: "white", borderRadius: "0.2rem", padding: "0.5rem" }}>
                            <Link to={`/cars`}>All cars</Link>
                        </div>
                    </div>
                </div></div>
                :
                <div></div>}
        </div>

    );
}

export default Buy;
