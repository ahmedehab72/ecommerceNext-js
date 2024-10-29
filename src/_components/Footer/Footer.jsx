import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <>
      <footer className=" bg-black lg:p-6">
        <div className="mx-auto w-full ">
          <div className="grid grid-cols-2  px-4 py-6 lg:py-8 md:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Exclusive
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href=" " className=" hover:underline">
                    Subscribe
                  </Link>
                </li>
                <li className="mb-4">
                  <p>Get 10% off your first order</p>
                </li>
                <li className="mb-4">
                  <div className="absolute">
                    <input
                      type="text"
                      className="rounded-sm  bg-black border p-2 "
                      placeholder="Enter your email"
                    />
                    <SendIcon className="relative right-10 cursor-pointer" />
                  </div>
                </li>
              </ul>

            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Company
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href=" " className=" hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Help center
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Legal
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Download
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Android
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    Windows
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href=" " className="hover:underline">
                    MacOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-center">
            <span className="text-sm text-gray-400  sm:text-center">
              © 2024 <Link href=" ">Eng Ahmed</Link>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
