import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backEndURL } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
  
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [shades, setShades] = useState([]);
  
    const [loader, setLoader] = useState(false);
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      setLoader(true);
      try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        shades.length > 0 && formData.append("shades", JSON.stringify(shades));
        image1 && formData.append("image1", image1);
        image2 && formData.append("image2", image2);
        image3 && formData.append("image3", image3);
  
        const response = await axios.post(
          backEndURL + "/api/product/add",
          formData,
          { headers: { token } }
        );
        if (response.data.success) {
          toast.success(response.data.message);
          setName("");
          setDescription("");
          setImage1(null);
          setImage2(null);
          setImage3(null);
          setPrice("");
          setShades([]);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    };
  
    return (
      <form
        className="flex flex-col w-full items-start gap-3"
        onSubmit={onSubmitHandler}
      >
        <div>
          <p className="mb-2">Upload Image</p>
          <div className="flex gap-2">
            <label htmlFor="image1">
              <img
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                className="w-20"
                alt=""
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>
            <label htmlFor="image2">
              <img
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                className="w-20"
                alt=""
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>
            <label htmlFor="image3">
              <img
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                className="w-20"
                alt=""
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-2">Product Name</p>
          <input
            type="text"
            placeholder="Type Here"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-[500px] px-3 py-2"
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Product Description</p>
          <textarea
            placeholder="Write Content Here..."
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-[500px] px-3 py-2"
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div>
          <p className="mb-2">Product Shades</p>
          <div className="flex gap-3">
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Ali")
                    ? prev.filter((item) => item !== "Ali")
                    : [...prev, "Ali"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Ali") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Ali
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Nins")
                    ? prev.filter((item) => item !== "Nins")
                    : [...prev, "Nins"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Nins") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Nins
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Sera")
                    ? prev.filter((item) => item !== "Sera")
                    : [...prev, "Sera"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Sera") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Sera
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Gen")
                    ? prev.filter((item) => item !== "Gen")
                    : [...prev, "Gen"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Gen") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Gen
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Nica")
                    ? prev.filter((item) => item !== "Nica")
                    : [...prev, "Nica"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Nica") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Nica
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Monix")
                    ? prev.filter((item) => item !== "Monix")
                    : [...prev, "Monix"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Monix") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Monix
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Chassy")
                    ? prev.filter((item) => item !== "Chassy")
                    : [...prev, "Chassy"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Chassy") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Chassy
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Lori")
                    ? prev.filter((item) => item !== "Lori")
                    : [...prev, "Lori"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Lori") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Lori
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Fhia")
                    ? prev.filter((item) => item !== "Fhia")
                    : [...prev, "Fhia"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Fhia") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Fhia
              </p>
            </div>
            <div
              onClick={() =>
                setShades((prev) =>
                  prev.includes("Hannie")
                    ? prev.filter((item) => item !== "Hannie")
                    : [...prev, "Hannie"]
                )
              }
            >
              <p
                className={`${
                  shades.includes("Hannie") ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                Hannie
              </p>
            </div>
            
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          disabled={loader}
        >
          {loader ? "Loading..." : "Add Product"}
        </button>
      </form>  
  );
};

export default Add;