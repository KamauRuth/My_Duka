import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import './style.css'

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    brand: "",
    category: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    for (const key in form) {
      formData.append(key, form[key]);
    }
    
    if (image) {
      formData.append("image", image);
    }

    try {
        console.log("hello")
        await axios.post("http://localhost:5000/api/admin/add-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product added successfully!");
      setForm({
        name: "",
        sku: "",
        brand: "",
        category: "",
        price: "",
        description: "",
      });
      setImage(null);
    } catch (err) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="add-product">
      <Toaster />
      <div className="add-product-container">
        <form className="myform" onSubmit={handleSubmit}>
          <h1>Add New Product</h1>

          {["name", "sku", "brand", "category", "price"].map((field) => (
            <div className="input-box" key={field}>
              <label htmlFor={field}>{field[0].toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === "price" ? "number" : "text"}
                id={field}
                name={field}
                placeholder={`Enter ${field}`}
                value={form[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="input-box">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter product description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label htmlFor="image">Upload Product Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          <button type="submit" className="btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
