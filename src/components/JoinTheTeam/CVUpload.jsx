import CustomButton from "../CustomButton";

const CVUpload = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col">
        <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-white w-full mb-4">
          Join Our Team - Apply Today
        </h2>
        <p className="text-[#ffffffb2] mb-4 font-poppins font-normal text-[18px] leading-[30.8px">
          Interested in joining our team? We'd love to learn more about you and
          your skills. Please send us your CV, and we'll get in touch with you.
        </p>
        <div>
          <input
            type="file"
            className="file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60 w-[35%]"
          />
          <CustomButton
            text="Send"
            styles="py-4 px-6 bg-blue-500 font-poppins font-medium text-[18px] text-white outline-none mt-10 rounded-[10px] hover:bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default CVUpload;
