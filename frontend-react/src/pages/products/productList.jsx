import { useListProductsQuery } from "../../services/productServiceApi";

const ListProducts = () => {
  const responseInfo = useListProductsQuery();

  if (responseInfo.isLoading) return <div>Loading...</div>;
  if (responseInfo.isError)
    return <div>Error occurred: {responseInfo.error.error}</div>;

  const products = responseInfo.data;

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedProducts = chunkArray(products, 4);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Product List</h1>
      {chunkedProducts.map((row) => (
        <div className="flex flex-wrap -mx-4" key={row[0].id}>
          {row.map((product) => (
            <div
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8"
              key={product.id}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="w-full h-56 object-cover object-center"
                  src={product.image_link}
                  alt="Product"
                />
                <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-gray-600 mr-1">
                      Technology Used:
                    </span>
                    <span className="text-sm">{product.technical_details}</span>
                  </div>
                 
                  <p className="text-gray-700 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-1">
                        Rating:
                      </span>
                      <span className="text-yellow-500">{product.rating}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
