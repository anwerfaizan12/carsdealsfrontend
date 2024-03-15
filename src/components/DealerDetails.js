import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DealerDetails() {

    const [dealerData, setDealerData] = useState([]);
    const [isAuthorize, setIsAuthorize] = useState(false);
    const [dealer, setDealer] = useState("");
    const [currPage, setCurrPage] = useState(1);


    const handlePageChange = (page) => {
        setCurrPage(page);
    }

    useEffect(() => {
        async function fn() {
            const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/deal/dealerdetails', {
                method: 'GET',
                credentials: 'include'
            });

            if (!response.ok) {
                alert("Not Autorized");
            }

            if (response.ok) {
                const data = await response.json();
                const Data = data.data;
                setIsAuthorize(true);
                setDealerData(Data);
                setDealer(data.username);

            }
        }
        fn();

    }, [])

    const pages = Math.ceil(dealerData.length / 3);

    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i);
    }

    let si = (currPage - 1) * 3;
    let li = si + 3;

    const filteredArr = dealerData.slice(si, li);


    return (
        <div>
            {
                isAuthorize === true
                    ?
                    <div>
                        {
                            dealerData.length > 0 ? <div className='container-fluid'>

                                <div className="row">
                                    <div className='col-12 d-flex justify-content-center'>
                                        <h2 className="mt-1" style={{ color: "teal", fontFamily: "fantasy" }}>Dealer Name - {dealer}</h2>
                                    </div>
                                    <div className='offset-lg-4 offset-2 col-2 d-flex justify-content-center mt-5 mb-4'>
                                        <h1 style={{ color: "teal", fontFamily: "fantasy" }}>All - Deals</h1>
                                    </div>
                                    <div className='offset-lg-0 offset-2 col-4 d-flex justify-content-center mt-5 mb-4'>
                                        <Link to="/createcar" style={{ color: "blue", fontFamily: "rever-layer" }}><h3>Create Car</h3></Link>
                                    </div>
                                </div>

                                {
                                    filteredArr.map((item) => (

                                        <div className='row mt-3'>
                                            <div className='offset-lg-2 col-lg-4 mb-1'>
                                                <div className="card"  >
                                                    <img src={`https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/${item.carImage}`} className="card-img-top" alt="..." />
                                                </div>
                                            </div>
                                            <div className=' col-lg-4  d-flex align-items-center cars'>
                                                <div className="card-body">
                                                    <h1 className="card-title d-flex justify-content-center mt-1" style={{ color: "teal", fontFamily: "fantasy" }}> Details</h1>
                                                    <h5 className="d-flex justify-content-center mt-3" style={{ color: "teal", fontFamily: "fantasy" }}>Car Type - {item.type}</h5>
                                                    <h5 className="d-flex justify-content-center mt-3" style={{ color: "teal", fontFamily: "fantasy" }}> Car Name - {item.name}</h5>
                                                    <h5 className="d-flex justify-content-center mt-3" style={{ color: "teal", fontFamily: "fantasy" }}> Car Model - {item.model} </h5>
                                                    <h5 className="d-flex justify-content-center mt-3" style={{ color: "teal", fontFamily: "fantasy" }}>Location - {item.location}</h5>
                                                    <div className='d-flex justify-content-center mt-3 mb-2'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                }

                                <div className='row'>
                                    <div className='col-12'>
                                        <div className="d-flex justify-content-center mt-3">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination">
                                                    {
                                                        pagesArr.map((page) => (
                                                            <li className="page-item"><a className='page-link' onClick={() => handlePageChange(page)}>{page}</a></li>
                                                        ))
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>

                            </div>
                                :

                                <div className='container-fluid'>
                                    <div className="row mt-5">
                                        <div className='offset-1 col-11 d-flex justify-content-center'>
                                            <h2 className="mt-1" style={{ color: "teal", fontFamily: "fantasy" }}>Dealer Name - {dealer}</h2>
                                        </div>
                                        <div className='offset-5  col-3 d-flex justify-content-center mt-5 mb-4'>
                                            <h1 style={{ color: "teal", fontFamily: "fantasy" }}>No Deals</h1>
                                        </div>

                                        <div className=' offset-lg-1 col-lg-11 d-flex justify-content-center mt-5 mb-4'>
                                            <Link to="/createcar" style={{ color: "blue", fontFamily: "rever-layer" }}><h3>Create Car</h3></Link>
                                        </div>
                                    </div>
                                </div>

                        }
                    </div>
                    :
                    <div>
                    </div>
            }
        </div>
    )
}
