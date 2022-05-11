import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/actions/fetchProducts";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function deleteHandler(id) {
    dispatch(deleteProduct(id));
  }
  function fetchProductByIdHandler(id) {
    navigate(`/edit/${id}`);
  }
  function detailProductHandler(id) {
    navigate(`/detail/${id}`);
  }

  if (products === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {products.map((item, index) => {
          return (
            <div className="shadow-lg rounded-xl p-4 bg-white dark:bg-gray-800 w-42 xl:w-72 m-auto " key={index}>
              <div className="w-36 sm:w-full h-full text-left">
                <div className="flex h-full flex-col justify-between">
                    <img onClick={() => detailProductHandler(item._id)} alt={item.title} src={item.image} className="object-scale-down h-36 xl:h-48 hover:opacity-80 cursor-pointer" />
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-bold mt-4 text-ellipsis overflow-hidden whitespace-nowrap  leading-snug sm:truncate">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs text-red-600">{item.category}</p>
                    <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">$ {item.price}</p>
                  <div className="sm:flex items-center justify-between gap-4 w-full mt-6">
                    <button onClick={() => fetchProductByIdHandler(item._id)} type="button" className="py-2 px-4 bg-blue-800 hover:bg-blue-600 mb-2 sm:mb-0 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                      Edit
                    </button>
                    <button onClick={() => deleteHandler(item._id)} type="button" className="py-2 px-4  bg-red-800 hover:bg-red-600  text-white text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
