import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';

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

const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      rating: 3,
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      rating: 1,
    },
    // More products...
  ];
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  });

  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.data.email,
        name: data.data.name,
      });
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.data.email,
        name: data.data.name
      }));
    }
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    document.body.style.backgroundImage = 'none';
    document.body.classList.add('bg-white');
  }, []);

  return (
    <>
<style>
  {`
    .carouselHeight {
      height: 50vh;
    }
  `}
</style>
<Carousel className="rounded-xl  carouselHeight " transition={{ duration: 1 }} >
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" variant="text">
                Explore
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" variant="text">
                Explore
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" variant="text">
                Explore
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>


    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>



      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Card key={product.id} className="group">
                <CardHeader color="blue-gray">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                 
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                      {product.name}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      {product.rating}
                    </Typography>
                  </div>
                  <Typography color="gray">
                    {product.description}
                  </Typography>
                  <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                    <Tooltip content={product.price}>
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <BanknotesIcon className="h-5 w-5" />
                      </span>
                    </Tooltip>
                    <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
                    {/* Add more tooltips/icons here */}
                  </div>
                </CardBody>
                <CardFooter className="pt-3">
                  <Button size="lg" fullWidth={true}>
                  {product.price} &nbsp; Add to cart
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

export default Dashboard;


    