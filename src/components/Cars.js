import React from "react";
import { useState, useEffect } from "react";
import Car from "./Car";

function Cars() {
  const [cars, setCars] = useState([]);
  const [dealerName, setDealerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [currPage, setCurrPage] = useState(1);


  async function handleSoldCars() {
    const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/soldcars',
      {
        method: 'GET',
        credentials: 'include'
      });
    if (!response.ok) {
      alert("Something Wrong");
    }
    if (response.ok) {
      const Data = await response.json();
      const data = Data.data;
      setCars(data);
      setCurrPage(1);
    }
  }

  async function handleDealerCars() {
    const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/dealercars',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dealerName }),
        credentials: 'include'
      });
    if (!response.ok) {
      alert("Something Wrong");
    }
    if (response.ok) {
      const Data = await response.json();
      const data = Data.data;
      console.log(data);
      setCars(data);
      setCurrPage(1);
    }
  }




  async function handleOwnerCars() {
    const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/clientcars',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ownerName }),
        credentials: 'include'
      });
    if (!response.ok) {
      alert("Something Wrong");
    }
    if (response.ok) {
      const Data = await response.json();
      const data = Data.data;
      setCars(data);
      setCurrPage(1);
    }
  }


  useEffect(() => {
    async function fn() {
      const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/cars',
        {
          method: 'GET',
          credentials: 'include'
        });
      if (response.ok) {
        const data = await response.json();
        setCars(data);
      }
      if (!response.ok) {
        alert("Login Please");
      }
    }
    fn();
  }, []);


  const handlePageChange = (page) => {
    setCurrPage(page);
  }

 

    const pages = Math.ceil(cars.length/3 );

    let pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }

    let si=(currPage-1)*3;
    let li=si+3;

     const filteredArr = cars.slice(si,li);

  return (
    <div>
      {
        filteredArr.length > 0 ?
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="offset-lg-1 col-lg-4">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Dealer's  Name" aria-label="dealer Name" aria-describedby="button-addon2" value={dealerName} onChange={(e) => setDealerName(e.target.value)} />
                  <button class="btn btn-outline-primary btn-info" type="button" id="button-addon2" onClick={handleDealerCars}><h6 style={{ color: "white" }}>search</h6></button>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-4 ">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Owner's  Name" aria-label="dealer Name" aria-describedby="button-addon2" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                  <button class="btn btn-outline-primary btn-info" type="button" id="button-addon2" onClick={handleOwnerCars}><h6 style={{ color: "white" }}>search</h6></button>
                </div>
              </div>

              <div className=" col-lg-2 ">
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-primary mb-3" onClick={handleSoldCars}>Sold cars</button>
                </div>
              </div>

            </div>

            <div className="row mt-4">
              <div className="col-12">
                <h2 className="d-flex justify-content-center" style={{ color: "teal", fontFamily: "inherit" }}>Available Cars</h2>
              </div>
            </div>

            <div>
              {
                filteredArr.map((car) => (
                  <Car {...car} />
                ))
              }
            </div>


            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      {
                        pagesArr.map((page) => (
                          <li className="page-item" ><a className='page-link' onClick={() => handlePageChange(page)}>{page} </a></li>
                        ))
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

          </div> :
          <div></div>
      }
    </div>
  );
}

export default Cars;

