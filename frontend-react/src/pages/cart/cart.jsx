import React from "react";
import './cart.css';


const NewComponent = () => {

      return (
        <div>
        <header className="mb-8">
          <h3 className="text-xl font-medium text-gray-700">Checkout</h3>
        </header>
        <main>
          <section className="checkout-form w-1/2">
            <form action="#!" method="get">
              <h6 className="font-medium">Contact information</h6>
              <div className="form-control mt-4">
                <label htmlFor="checkout-email" className="text-xs font-medium mb-1">E-mail</label>
                <div className="relative">
                  <span className="fa fa-envelope absolute top-1/2 left-0 transform -translate-y-1/2" />
                  <input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                </div>
              </div>
              <div className="form-control mt-4">
                <label htmlFor="checkout-phone" className="text-xs font-medium mb-1">Phone</label>
                <div className="relative">
                  <span className="fa fa-phone absolute top-1/2 left-0 transform -translate-y-1/2" />
                  <input type="tel" id="checkout-phone" name="checkout-phone" placeholder="Enter your phone..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                </div>
              </div>
              <br />
              <h6 className="font-medium">Shipping address</h6>
              <div className="form-control mt-4">
                <label htmlFor="checkout-name" className="text-xs font-medium mb-1">Full name</label>
                <div className="relative">
                  <span className="fa fa-user-circle absolute top-1/2 left-0 transform -translate-y-1/2" />
                  <input type="text" id="checkout-name" name="checkout-name" placeholder="Enter your name..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                </div>
              </div>
              <div className="form-control mt-4">
                <label htmlFor="checkout-address" className="text-xs font-medium mb-1">Address</label>
                <div className="relative">
                  <span className="fa fa-home absolute top-1/2 left-0 transform -translate-y-1/2" />
                  <input type="text" id="checkout-address" name="checkout-address" placeholder="Your address..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                </div>
              </div>
              <div className="form-control mt-4">
                <label htmlFor="checkout-city" className="text-xs font-medium mb-1">City</label>
                <div className="relative">
                  <span className="fa fa-building absolute top-1/2 left-0 transform -translate-y-1/2" />
                  <input type="text" id="checkout-city" name="checkout-city" placeholder="Your city..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                </div>
              </div>
              <div className="form-group mt-4">
                <div className="form-control">
                  <label htmlFor="checkout-country" className="text-xs font-medium mb-1">Country</label>
                  <div className="relative">
                    <span className="fa fa-globe absolute top-1/2 left-0 transform -translate-y-1/2" />
                    <input type="text" id="checkout-country" name="checkout-country" placeholder="Your country..." list="country-list" className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                    <datalist id="country-list">
                      <option value="India" />
                      <option value="USA" />
                      <option value="Russia" />
                      <option value="Japan" />
                      <option value="Egypt" />
                    </datalist>
                  </div>
                </div>
                <div className="form-control">
                  <label htmlFor="checkout-postal" className="text-xs font-medium mb-1">Postal code</label>
                  <div className="relative">
                    <span className="fa fa-archive absolute top-1/2 left-0 transform -translate-y-1/2" />
                    <input type="numeric" id="checkout-postal" name="checkout-postal" placeholder="Your postal code..." className="w-full px-10 py-2 border border-gray-300 rounded-lg outline-none text-xs font-semibold" />
                  </div>
                </div>
              </div>
              <div className="form-control checkbox-control mt-4">
                <input type="checkbox" id="checkout-checkbox" name="checkout-checkbox" className="mr-2" />
                <label htmlFor="checkout-checkbox" className="text-xs font-medium leading-4">Save this information for next time</label>
              </div>
              <div className="form-control-btn mt-6 flex justify-end">
                <button className="px-4 py-2 text-xs font-medium text-white bg-orange-500 border-0 rounded-lg cursor-pointer">Continue</button>
              </div>
            </form>
          </section>
          <section className="checkout-details w-2/5">
            <div className="checkout-details-inner bg-gray-200 rounded-lg p-4">
              <div className="checkout-lists">
                <div className="card flex items-center">
                  <div className="card-image w-1/3">
                    <img src="https://rvs-checkout-page.onrender.com/photo1.png" alt="" />
                  </div>
                  <div className="card-details flex flex-col">
                    <div className="card-name text-xs font-medium">Vintage Backbag</div>
                    <div className="card-price text-xs font-medium text-orange-500">$54.99 <span className="text-gray-700">$94.99</span></div>
                    <div className="card-wheel mt-4 border border-gray-300 w-24 p-2 rounded-lg text-xs flex justify-between">
                      <button className="bg-gray-300 text-gray-600 w-5 h-5 flex justify-center items-center border-0 rounded-md font-medium">-</button>
                      <span>1</span>
                      <button className="bg-gray-300 text-gray-600 w-5 h-5 flex justify-center items-center border-0 rounded-md font-medium">+</button>
                    </div>
                  </div>
                </div>
                <div className="card flex items-center">
                  <div className="card-image w-1/3">
                    <img src="https://rvs-checkout-page.onrender.com/photo2.png" alt="" />
                  </div>
                  <div className="card-details flex flex-col">
                    <div className="card-name text-xs font-medium">Levi Shoes</div>
                    <div className="card-price text-xs font-medium text-orange-500">$74.99 <span className="text-gray-700">$124.99</span></div>
                    <div className="card-wheel mt-4 border border-gray-300 w-24 p-2 rounded-lg text-xs flex justify-between">
                      <button className="bg-gray-300 text-gray-600 w-5 h-5 flex justify-center items-center border-0 rounded-md font-medium">-</button>
                      <span>1</span>
                      <button className="bg-gray-300 text-gray-600 w-5 h-5 flex justify-center items-center border-0 rounded-md font-medium">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-shipping flex justify-between mt-4">
                <h6 className="text-xs font-medium">Shipping</h6>
                <p className="text-xs font-medium">$19</p>
              </div>
              <div className="checkout-total flex justify-between mt-4">
                <h6 className="text-xs font-medium">Total</h6>
                <p className="text-xs font-medium">$148.98</p>
              </div>
            </div>
          </section>
        </main>
        <footer className="mt-4">
          <p className="text-xs text-gray-600">Created by - <a href="https://vetri-suriya.web.app/" className="text-orange-500">Vetri Suriya</a></p>
        </footer>
      </div>
      );
    };

export default NewComponent;