import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo";
import {
  HiColorSwatch,
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";

const Footer = () => {
  return (
    <section class="py-5 bg-emerald-500 ">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          <div>
            <Logo></Logo>
            <ul className="mt-5 text-white space-y-4">
              <li>
                <span className="flex gap-1 items-center">
                  <HiLocationMarker></HiLocationMarker>Dhaka,Bangladesh
                </span>
              </li>
              <li>
                <span className="flex gap-1 items-center">
                  <HiMail></HiMail>support@domain.com
                </span>
              </li>
              <li>
                <span className="flex gap-1 items-center">
                  <HiPhone></HiPhone>(+62)81 6754 345
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold">Quick Links</p>
            <ul class="mt-5  space-y-4 text-white">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Instructor </Link>
              </li>
              <li>
                <Link to={"/"}>Class</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold">Useful Links</p>
            <ul class="mt-5  space-y-4 text-white">
              <li>
                <Link to={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/"}>Terms and Conditions</Link>
              </li>
              <li>
                <Link to={"/"}>Disclaimer</Link>
              </li>
              <li>
                <Link to={"/"}>Support</Link>
              </li>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold">Work Hours</p>
            <ul class="mt-5  space-y-4 text-white">
              <li>
                <span className="flex gap-1 items-center">
                  <HiColorSwatch></HiColorSwatch>9 AM - 5 PM , Monday - Saturday
                </span>
              </li>
              <h2>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h2>
              <button className="py-3 px-5 bg-amber-500 rounded-xl">Join the Class</button>
            </ul>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-800" />

        <div class="flex flex-wrap items-center justify-center">
          <p class="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
