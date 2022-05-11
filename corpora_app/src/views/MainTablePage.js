import TablePage from "../components/TablePage";

export default function MainTablePage() {

    return (
      <div className="py-8 mt-28">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" className="w-1/5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                    Product
                  </th>
                  <th scope="col" className="w-1/3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                    Description
                  </th>
                  <th scope="col" className="w-2/12 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                    Rating
                  </th>
                  <th scope="col" className="w-1/5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                    Category
                  </th>
                  <th scope="col" className="w-1/3 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal"></th>
                </tr>
              </thead>
              <TablePage />
            </table>
          </div>
        </div>
      </div>
    );
}
