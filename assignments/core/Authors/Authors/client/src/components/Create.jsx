import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const tempObj = { name };

        axios.post("http://localhost:8000/authors/new", tempObj)
            .then(res => {
                console.log("✅ Successfully created:", res.data);
                navigate("/authors"); 
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message);
                }
                setErrors(errorArray);
            });
    };

    const handleCancel = () => {
        setName(""); 
    };

    return (
        <div>
            <Link to='/authors'>Home</Link>
            <h5 className='text-center fs-1 text-success'>Add a New Author</h5>
            <div>
                {errors.map((err, i) => (
                    <p key={i} className='text-danger'>{err}</p>
                ))}
            </div>

            <form onSubmit={submitHandler}>
                <div className='form-group mb-5'>
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <button type='button' onClick={handleCancel} className='btn btn-warning'>Cancel</button>
                <input type="submit" className='btn btn-success' value="Submit" />
            </form>
        </div>
    );
};

export default Create;
