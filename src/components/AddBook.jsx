import { useState } from "react";
import axios from "axios";

function AddBook({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    const API_URL = process.env.REACT_APP_API_URL

    const createProduct = (formData) =>
      axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    await createProduct(formData);
   
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddBook;
