//import CustomButton from "../CustomButton";

const CVUpload = () => {
  return (
    <section id="cv" className="flex justify-center items-center">
      <div className="f sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-11/12">
        <div className="flex-1 flex flex-col">
          <h2 className="font-poppins font-semibold xs:text-[38px] text-[24px] text-white w-full mb-4">
            Join Our Team - Apply Today
          </h2>
          <p className="text-[#ffffffb2] mb-4 font-poppins font-normal xs:text-[18px] text-[16px] leading-[30.8px">
            Interested in joining our team? We&apos;d love to learn more about
            you and your skills. Please send us your CV to the following email
            address and we&apos;ll get in touch with you.
          </p>
          <div className="bg-btn-gradient w-fit py-1 px-2 rounded-md">
            <p className="text-white">codejoy@creations.com</p>
          </div>
          {/* <div>
          <input
            type="file"
            className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 w-[35%]"
          />
          <CustomButton
            text="Send"
            styles="py-4 px-6 bg-blue-500 font-poppins font-medium text-[18px] text-white outline-none mt-10 rounded-[10px] hover:bg-blue-600"
          />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default CVUpload;
