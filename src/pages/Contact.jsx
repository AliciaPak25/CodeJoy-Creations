import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Please, provide your full name."),
    email: yup
      .string()
      .email("Please, provide a valid email.")
      .required("Please, provide your email."),
    message: yup.string().required("Please, write a message.").min(4),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you!",
        text: "We've received your message. Someone from our team will contact you soon.",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <div className="md:h-screen h-fit contact-background">
      <div className="bg-[#171717]/90 md:h-screen h-fit w-full flex flex-col justify-center items-center ss:pt-16 pt-20">
        <div>
          <h2 className="ss:text-5xl text-4xl font-bold text-white text-center mb-5">
            Contact us.
          </h2>
        </div>
        <div className="w-full flex md:flex-row justify-center items-center sm:pt-16 md:pt-6">
          <div className="w-4/12 md:flex justify-center items-start flex-col mt-5 hidden">
            <p className="font-bold text-white text-[17px]">
              Phone: +1 (555) 123-4567
            </p>
            <p className="font-bold text-white text-[17px] my-3">
              Email: codejoy@creations.com
            </p>
            <p className="font-bold text-white text-[17px]">
              1989 Cornelia Street. Nashville, Tennessee.
            </p>
            <p className="uppercase text-[#F2F2F2] font-poppins text-[13px] font-[300] mt-20">
              Monday to Friday 9:00 am - 6:00 PM.
            </p>
          </div>
          <form
            className="md:w-4/12 ss:w-5/12 w-9/12 flex flex-col justify-center md:items-start items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white font-normal w-full"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              type="text"
              {...register("fullName")}
            />
            <p className="text-red-600 mt-1 text-xs">
              {errors.fullName?.message}
            </p>
            <input
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white  font-normal w-full mt-4"
              id="email"
              name="email"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
            <p className="text-red-600 mt-1 text-xs">{errors.email?.message}</p>
            <textarea
              className="border px-3 py-2 border-[#ababab] bg-transparent text-[16px] text-white  font-normal w-full mt-4 resize-none overflow-auto"
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              {...register("message")}
            />
            <p className="text-red-600 mt-1 text-xs">
              {errors.message?.message}
            </p>
            <div className="flex flex-row items-center justify-start w-full mt-4">
              <input
                type="checkbox"
                value="isDisclaimerAccepted"
                {...register("isDisclaimerAccepted")}
              />
              <p className="ml-3 md:text-[15px] ss:text-[12px] text-[10px] font-normal text-[#737a7a]">
                I agree to CodeJoy Creations
                <Link className="text-[#dfded4] ml-1" to="/disclaimer">
                  disclaimer policy.
                </Link>
              </p>
            </div>

            <CustomButton
              theType="submit"
              text="Send"
              styles="h-10 border-2 border-primary py-4 px-9 flex items-center justify-center bg-transparent text-white font-poppins text-[15px] font-medium mt-4 rounded-3xl md:mb-0 mb-16"
            />
          </form>
        </div>
      </div>
      {/* Create alert for submit button or redirect to another page message and disclaimer page for privacy policy. */}
    </div>
  );
};

export default Contact;
