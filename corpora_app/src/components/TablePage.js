import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../store/actions/fetchProducts";
import { useNavigate } from "react-router-dom";

export default function TablePage() {
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

  if (products === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <tbody>
        {products.map((item, index) => {
          return (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img alt="profil" src={item.image} className="mx-auto object-cover rounded-full h-14 w-14 " />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{item.title}</p>
                    <p className="text-gray-900 whitespace-no-wrap text-lg mt-1">$ {item.price}</p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
              </td>
              <td className=" py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{item.rating.rate}</p>
                <p className="text-gray-900 whitespace-no-wrap">({item.rating.count} viewers)</p>
              </td>
              <td className="px-10 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <span className="relative inline-block w-full px-3 py-3 font-semibold text-green-900 leading-tight">
                  <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">{item.category}</span>
                </span>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                  <button onClick={() => fetchProductByIdHandler(item._id)} type="button" className="py-2 px-6 xl:px-10 md:px-8  bg-blue-800 hover:bg-blue-600  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">Edit</button>
                <button onClick={() => deleteHandler(item._id)} type="button" className="py-2 px-4 mt-5 bg-red-800 hover:bg-red-600  text-white text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
