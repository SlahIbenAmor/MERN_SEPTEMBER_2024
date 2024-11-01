import react , {useState} from 'react';
import axios from 'axios';

const ProductForm = ({setSubmit}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleTitleChange = e => {
        setTitle(e.target.value);
    }

    const handlePriceChange = e => {
        setPrice(e.target.value);
    }

    const handleDescriptionChange = e => {

        setDescription(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products' , {title , price , description})
        .then(res => {
            console.log(res);
            setSubmit(true);
        })
        .catch(err => console.error(err));
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' onChange={handleTitleChange}/>
            </div>

            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id='price' onChange={handlePriceChange}/>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' onChange={handleDescriptionChange}/>
            </div>

            <button type="submit">Create</button>
        </form>
    )
}

export default ProductForm;