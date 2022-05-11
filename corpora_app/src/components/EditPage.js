import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchProductsById, FetchEditProduct } from "../store/actions/fetchProducts";
import { useNavigate, useParams } from "react-router-dom";

export default function FormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [editProduct, setEditProduct] = useState({
    title: "",
    price:"",
    description:"",
    category:'',
    image:"",
    rating:{
      rate: 0,
      count: 0
    }
  });
  
  useEffect(() => {
    dispatch(FetchProductsById(id)).then((data) => {
    setEditProduct(data);
  });
  }, [dispatch, id]);
  
  function productImputHandler(e) {
    const { value, name } = e.target;
    const newInput = { ...editProduct };
    newInput[name] = value;
    setEditProduct(newInput);
  }
  
  function editProductHandler(e) {
    e.preventDefault()
    delete editProduct._id;
    dispatch(FetchEditProduct(id,editProduct))
    navigate("/table")
  }

  return (
    <div className="flex justify-center mt-28">
      <form className="flex w-full max-w-lg space-x-3 ">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">Edit Product</div>
          <div className=" max-w-xl gap-4 m-auto">
            <div className=" relative mb-5">
              <label className="text-gray-700 ">
                Title
              </label>
              <input onChange={productImputHandler} value={editProduct.title} name="title" type="text" className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Title" />
            </div>

            <div className=" relative mb-5">
              <label className="text-gray-700 ">
                Price
              </label>
              <input onChange={productImputHandler} value={editProduct.price} name="price" type="number" className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="price" />
            </div>

            <label className="text-gray-700" >
              category
              <select defaultValue={editProduct.category} name="category" onChange={productImputHandler} className="mt-1 mb-5 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <option disabled value="">
                  Select an category
                </option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </label>

            <div className=" relative mb-5">
              <label className="text-gray-700 ">
                Image Url
              </label>
              <input onChange={productImputHandler} value={editProduct.image} name="image" type="text" className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Image Url" />
            </div>

            <div className="col-span-2 mb-5">
              <label className="text-gray-700 ">
                description
              </label>
              <label className="text-gray-700" >
                <textarea onChange={productImputHandler} value={editProduct.description} name="description" className="mt-1 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="description" rows="5" cols="40"></textarea>
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button onClick={editProductHandler} type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
