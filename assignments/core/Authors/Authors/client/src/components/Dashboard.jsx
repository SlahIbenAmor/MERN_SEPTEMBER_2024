import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);

            })
    }, [])

        const deleteMe = (id) => {
            axios.delete(`http://localhost:8000/authors/${id}`)
            .then(() => {
                setAuthors(authors.filter(author => author._id !== id));
            })
            .catch(err => console.error(err));
        };
    return (
        <div>
            <Link to="/authors/new" className='btn btn-primary'>Add a new author </Link>
            <h5 className='text-center fs.1 text-success'>We have quotes by:</h5>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        authors?.map((oneAuthor, index) => {
                            return (
                                <tr key={index}>
                                    <td scope='row'>{index + 1}</td>
                                    <td className='text-primary'>
                                        {oneAuthor.name}
                                    </td>
                                    <td>
                                        <Link to={`/authors/${oneAuthor._id}/edit`}>
                                            <button type='button' className='btn btn-warning'>Update</button>
                                        </Link>
                                        <button 
                                        type='button' 
                                        className='btn btn-danger' 
                                        onClick={() => deleteMe(oneAuthor._id)}
                                        style={{ marginLeft: "10px" }} 
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Dashboard