import { useListProductsQuery } from "../../services/productServiceApi";

import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

const ListProducts = () => {
  const responseInfo = useListProductsQuery();

  if (responseInfo.isLoading) return <div>Loading...</div>;
  if (responseInfo.isError)
    return <div>Error occurred: {responseInfo.error.error}</div>;

  const products = responseInfo.data;
  console.log(products);

  return (
    <>
    <div className="flex justify-center items-center mt-8 mb-4 px-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Card key={product.id} className="group">
                <CardHeader color="blue-gray">
                  <img
                    src={product.image_link}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      {product.rating}
                    </Typography>
                  </div>
                  <Typography color="gray">{product.technical_details}</Typography>
                  <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <Tooltip content={product.price}>
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-black-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <BanknotesIcon className="h-5 w-5" />
                      </span>
                    </Tooltip>
                    <Tooltip content={`65" HDTV`}>
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-black-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <TvIcon className="h-5 w-5" />
                      </span>
                    </Tooltip>
                    <Tooltip content="Fire alert">
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-black-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <FireIcon className="h-5 w-5" />
                      </span>
                    </Tooltip>
                    <Tooltip content="Python">
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-black-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                      <img src="./python.png" alt="metamask" className="h-6 w-6" />
                      
                      </span>
                    </Tooltip>
                    {/* Add more tooltips/icons here */}
                  </div>
                </CardBody>
                <CardFooter className="pt-3">
                  <Button
                    size="lg"
                    fullWidth={true}
                    className="bg-gray-300 text-black hover:bg-gray-500 hover:shadow-md"
                  >
                    <Typography variant="h6" className="text-purple-600 inline">
    {product.price}
  </Typography> &nbsp;&nbsp;&nbsp; Add to cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
</>
  );
};

export default ListProducts;
