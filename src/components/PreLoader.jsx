import { Oval } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <div className="h-screen w-full bg-backgroundApp flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#84d3ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#84d3ff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default PreLoader;
