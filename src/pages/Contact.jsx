import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  return (
    <div className="h-screen contact-background">
      <div className="bg-[#171717]/90 h-screen w-full flex flex-col justify-center items-center">
        <div>
          <h2 className="text-6xl font-bold text-white text-center mb-10">
            Contact us.
          </h2>
        </div>
        <div className="w-full flex md:flex-row justify-center items-center flex-col sm:pt-16 md:py-6">
          <div className="w-4/12 flex justify-center items-start flex-col mt-5">
            <p className="font-bold text-white text-[18px]">
              Phone: +1 (555) 123-4567
            </p>
            <p className="font-bold text-white text-[18px] my-3">
              Email: codejoy@creations.com
            </p>
            <p className="font-bold text-white text-[18px]">
              1989 Cornelia Street. Nashville, Tennessee.
            </p>
            <p className="uppercase text-[#F2F2F2] font-arial text-[12px] font-[300] mt-20">
              Monday to Friday 9:00 am - 6:00 PM.
            </p>
          </div>
          <form className="w-4/12 flex flex-col justify-center items-start">
            <input
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white font-normal w-full mb-5"
              id="name"
              name="name"
              placeholder="Name"
              type="text"
            />
            <input
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white  font-normal w-full mb-5"
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
            <textarea
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white  font-normal w-full mb-4"
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
            />
            <div className="flex flex-row items-center justify-start w-full">
              <input type="checkbox" />
              <p className="ml-3 text-[18px] font-normal text-[#737a7a]">
                I agree to CodeJoy Creations
                <Link className="text-[#dfded4]" to="#">
                  disclaimer policy.
                </Link>
              </p>
            </div>

            <CustomButton
              type="submit"
              text="Send"
              styles="h-10 border-2 border-primary py-4 px-9 flex items-center justify-center bg-transparent text-white font-arial text-[15px] font-medium mt-5 rounded-3xl"
            />
          </form>
        </div>
      </div>
      {/* Create alert for submit button or redirect to another page message and disclaimer page for privacy policy. */}
    </div>
  );
};

export default Contact;
