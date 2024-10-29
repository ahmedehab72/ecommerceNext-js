import Link from "next/link";
const Account = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="flex items-center justify-start mt-10 md:ms-16 ms-4">
          <Link
            href={"/"}
            className="font-light text-gray-400 hover:text-gray-600"
          >
            Home{" "}
          </Link>
          <Link
            href={"account"}
            className="font-light ms-1 hover:text-gray-600"
          >
            {" "}
            / My Account{" "}
          </Link>
        </div>
        <div className="flex items-center justify-start mt-10 md:me-16 me-4">
          <p>
            Welcome! <span className="text-red-500">Eng Ahmed</span>
          </p>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col lg:w-full w-[90%] justify-center   ">
        <div className="left w-full lg:w-1/4 m-10 p-10 shadow-lg   ">
          <div>
            {" "}
            <h3 className="font-semibold my-4">Manage My Account</h3>
            <div className="ms-4">
              {" "}
              <Link
                className="block hover:text-red-500 text-sm my-2 text-red-500"
                href="account"
              >
                My Profile
              </Link>
              <Link className="block hover:text-red-500 text-sm my-2" href="">
                Address Book
              </Link>
              <Link className="block hover:text-red-500 text-sm my-2" href="">
                My Payment Options
              </Link>
            </div>
          </div>

          <div>
            {" "}
            <h3 className="font-semibold mt-6 mb-4">My Orders</h3>
            <div className="ms-4">
              {" "}
              <Link className="block hover:text-red-500 text-sm my-2 " href="">
                My Returns
              </Link>
              <Link className="block hover:text-red-500 text-sm my-2" href="">
                My Cancellations
              </Link>
            </div>
          </div>
          <div>
            {" "}
            <h3 className="font-semibold my-6">My WishList</h3>
          </div>
        </div>
        <div className="right w-full lg:w-3/4 m-10 p-10 shadow-lg items-start  ">
          <h2 className="text-red-600 font-semibold text-lg mb-4">
            {" "}
            Edit Your Profile
          </h2>

          <div className="md:flex flex-row  w-full justify-between items-center ">
            <div className="md:w-[45%] w-full">
              <label htmlFor="fname">First Name</label>

              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                className="p-3 w-full  my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
                placeholder="Md"
              />
            </div>

            <div className="md:w-[45%] w-full">
              <label htmlFor="lname">Last Name</label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                className="p-3 w-full  my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
                placeholder="Rimel"
              />
            </div>
          </div>
          <div className="md:flex flex-row  w-full justify-between items-center ">
            <div className="md:w-[45%] w-full">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 w-full  my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div className="md:w-[45%] w-full">
              <label htmlFor="address">Address</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                className="p-3 w-full  my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>

          <label htmlFor="currentpass">Current Password</label>
          <input
            type="password"
            id="currentpass"
            name="currentpass"
            className="p-3 w-full my-2 rounded-sm border-none focus:border-0 bg-gray-100 "
            placeholder="Current Passwod"
          />
          <input
            type="password"
            className="p-3 w-full my-2 rounded-sm border-none focus:border-0 bg-gray-100 "
            placeholder="New Passwod"
          />
          <input
            type="password"
            className="p-3 w-full my-2 rounded-sm border-none focus:border-0 bg-gray-100 "
            placeholder="Confirm New Passwod"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 rounded-sm py-2 px-8 my-4  text-white "
          >
            Save Changes
          </button>
          <button
            type="submit"
            className=" rounded-sm py-2 px-8 my-4 focus:text-red-500 hover:text-gray-500"
          >
            Cancel
          </button>
        </div>
      </section>
    </>
  );
};

export default Account;
