import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-start mt-10 ms-16">
          <Link
            href={"/"}
            className="font-light text-gray-400 hover:text-gray-600"
          >
            Home{" "}
          </Link>
          <Link
            href={"contact"}
            className="font-light ms-1 hover:text-gray-600"
          >
            {" "}
            / Contact{" "}
          </Link>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col-reverse w-full justify-center items-center my- ">
        <div className="left w-full lg:w-1/4 m-10 p-10 shadow-lg lg:h-[70%]  ">
          <div className="mt-4 mb-8">
            <div className="flex items-center ">
              <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center text-white me-4 ">
                <PhoneIcon />
              </div>
              <h2>Call To Us</h2>
            </div>
            <p className="mt-4 mb-2">We are available 24/7, 7 days a week.</p>
            <p>Phone : +1234567890</p>
          </div>
          <hr />
          <div className="mt-8">
            <div className="flex items-center ">
              <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center text-white me-4 ">
                <EmailIcon />
              </div>
              <h2>Write To Us</h2>
            </div>
            <p className="mt-4 mb-2">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="my-2">Emails : customer@exclusive.com</p>
            <p>Emails : support@exclusive.com</p>
          </div>
        </div>
        <div className="right w-full lg:w-3/4 m-10 p-10 shadow-lg lg:h-[70%] ">
          {" "}
          <div className="lg:flex flex-row  w-full justify-between items-center ">
            <input
              type="text"
              className="p-3 w-full lg:w-[30%] my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
              placeholder="Your Name *"
            />
            <input
              type="text"
              className="p-3 w-full lg:w-[30%] my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
              placeholder="Your Email *"
            />
            <input
              type="text"
              className="p-3 w-full lg:w-[30%] my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
              placeholder="Your Phone *"
            />
          </div>
          <textarea
            placeholder="Your Massage"
            rows={7}
            className="resize-none p-3 w-full my-4 rounded-sm border-none focus:border-0 bg-gray-100 "
            name="massage"
            id="massage"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 rounded-sm py-2 px-8 my-4  text-white "
          >
            Send Massage
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
