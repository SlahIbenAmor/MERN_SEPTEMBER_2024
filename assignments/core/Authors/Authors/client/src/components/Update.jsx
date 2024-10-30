import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const Update = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        const tempObj = { name };

        axios.put(`http://localhost:8000/authors/${id}/edit`, tempObj)
            .then(() => {
                navigate("/authors");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = Object.values(errorResponse).map(error => error.message);
                setErrors(errorArr);
            });
    };

    const handleCancel = () => {
        navigate("/authors");
    };

    return (
        <div>
            <Link to='/authors'>Home </Link>
            <h5 className='text-center fs-1 text-success'>Edit this Author</h5>
            <div>
                {errors.map((err, i) => (
                    <p key={i} className='text-danger'>{err}</p>
                ))}
            </div>

            <form onSubmit={submitHandler}>
                <div className='form-group mb-5'>
                    <label className="form-label">Name</label>
                    <input
                        value={name}
                        className='form-control'
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type='button' onClick={handleCancel} className='btn btn-warning'>Cancel</button>
                <input type="submit" className='btn btn-success' value="Update" />
            </form>
        </div>
    );
};

export default Update;
