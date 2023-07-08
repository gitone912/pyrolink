import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unSetUserToken } from "../features/authSlice";
import { getToken, removeToken } from "../services/LocalStorageService";
import ChangePassword from "./auth/ChangePassword";
import { useGetLoggedUserQuery } from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo, unsetUserInfo } from "../features/userSlice";

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
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://source.unsplash.com/random/?javascript",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      rating: 5,
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://source.unsplash.com/random/?programming",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      rating: 4,
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://source.unsplash.com/random/?python", 
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      rating: 3,
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://source.unsplash.com/random/?java",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 5,
    },
    {
      id: 5,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://source.unsplash.com/random/?typescript",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 1,
    },
    {
      id: 6,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://source.unsplash.com/random/?react",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 2,
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      rating: 3,
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://source.unsplash.com/random/?java",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 5,
    },
    // More products...
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
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
      dispatch(
        setUserInfo({
          email: data.data.email,
          name: data.data.name,
        })
      );
    }
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.classList.add("bg-white");
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
      <Carousel
        className="rounded-xl  carouselHeight "
        transition={{ duration: 1 }}
        autoplay={true}
      >
        <div className="relative h-full w-full">
          <img
            src="https://source.unsplash.com/random/?javascript"
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
                Top rated projects for you
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
            src="https://source.unsplash.com/random/?programming"
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
                Projects with hands on experience
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
            src="https://source.unsplash.com/random/?python"
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
                100% tutorials and codes
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

      <div className="flex justify-center items-center mt-8 mb-4 px-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
      </div>

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
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
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
                  <Typography color="gray">{product.description}</Typography>
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
                    <Tooltip content="Free wifi">
                      <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-black-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <WifiIcon className="h-5 w-5" />
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
      <div className="container mx-auto pt-16">
        <div className="lg:flex">
          <div className="xl:w-2/5 lg:w-2/5 bg-gray-600 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                Get in touch
              </h1>
              <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                Unlock your online potential with custom-designed websites
                tailored to your unique goals. Contact us today and let's bring
                your vision to life!
              </p>
              <div className="flex pb-4 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-4 text-white text-base">+91 6201933790</p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-4 text-white text-base">pyrolink@gmail.com</p>
              </div>
              <p className="text-lg text-white pt-10 tracking-wide">
                Kokar Industrial area, Ranchi, 834001
                <br />
                Jharkhand, India
              </p>
              <a href="javascript:void(0)">
                <p className="text-white pt-16 font-bold tracking-wide underline">
                  Location on map
                </p>
              </a>
            </div>
          </div>
          <div className="xl:w-5/5 lg:w-3/5  h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <form
              id="contact"
              className="bg-white py-4 px-8 rounded-tr rounded-br"
            >
              <h1 className="text-3xl text-gray-800 font-extrabold mb-6">
                Customized websites as per your needs and rate.{" "}
                <span className="text-purple-600">Contact us now!</span>
              </h1>
              <br></br>
              <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="tel"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder
                    name="message"
                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                    rows={8}
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
