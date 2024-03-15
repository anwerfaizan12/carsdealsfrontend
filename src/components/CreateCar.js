import { useState } from "react";
import { Navigate } from 'react-router-dom';

function CreateCar() {
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [file, setFile] = useState("");
    const [location, setLocation] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        try {
            if (!file) {
                setErrorMessage('Please select a file before uploading.');
                return;
            }

            const formData = new FormData();
            formData.append('name', name);
            formData.append('type', type);
            formData.append('model', model);
            formData.append('file', file);
            formData.append('location', location);


            const response = await fetch('https://carsdeals-git-main-faizan-s-projects-a419aec2.vercel.app/car/createcar', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            console.log(response.message);

            if (!response.ok) {
                alert("Not Authorized");
                return <Navigate to={"/"} />
            }

            if (response.ok) {
                alert("Car created successfully");
                setRedirect(true);
            }


        } catch (error) {
            setErrorMessage(error.message);
            console.error('Error uploading file:', error);
        }
    };

    if (redirect) {
        return <Navigate to="/dealerdetails" />;
    }

    return (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="login d-flex justify-content-center p-2 mb-4" style={{ color: "teal" }}>Enter Car Details</h2>
                            <form onSubmit={handleFileUpload}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" required="true" placeholder="Type" aria-describedby="textHelp" value={type} onChange={(e) => { setType(e.target.value) }} />
                                </div>
                                <div className="mb-3 ">
                                    <input type="text" className="form-control " required="true" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" required="true" placeholder="Model" value={model} onChange={(e) => { setModel(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" required="true" placeholder="Location" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="file" required="true" name="file" onChange={handleFileChange} />
                                </div>
                                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary mb-2 mt-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    );
}

export default CreateCar;
