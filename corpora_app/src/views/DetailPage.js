import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchProductsById } from "../store/actions/fetchProducts";
import banner from "../asset/banner.png";

export default function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [Product, setProduct] = useState({
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
      setProduct(data);
  });
  }, [dispatch, id]);

  return (
    <>
     <img src={banner} alt="banner" className="mt-28 mb-10 hidden md:block" />
      <div className="max-w-screen-xl mx-auto p-8 sm:p-0 mt-28 sm:mt-0">
        <h2 className="text-3xl font-extrabold leading-9 text-gray-900 mb-0"></h2>
        <div className="sm:flex items-start gap-8 flex-wrap justify-center">
          <div className="w-full sm:w-1/5">
            <img className="w-full sm:h-80 object-scale-down" src={Product.image} alt={Product.title}/>
          </div>

          <div className="mt-10 sm:mt-0 sm:w-2/5">
            <p className="text-sm text-red-600 font-medium leading-6 ">{Product.category}</p>
            <p className="text-3xl font-medium leading-10 text-gray-900">{Product.title}</p>
            <p className="text-base leading-6 text-gray-500">{Product.rating.rate} ({Product.rating.count} reviews)</p>
            
            <p className="mt-10">
              <p className="text-4xl font-medium leading-6 text-gray-900">$ {Product.price}</p>
            </p>
            
            <p className="mt-10">
              <p className="text-lg font-medium leading-6 text-gray-900">Description Product</p>
              <p className="text-base leading-6 text-gray-500">{Product.description}</p>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
