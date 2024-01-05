const Vision = () => {
  return (
    <div  className="h-screen w-screen lg:h-[60vh] ">
      <div className="h-full w-full lg:w-11/12 lg:mx-auto lg:flex lg:justify-between">
        <div className="lg:w-[30%] lg:h-4/5 w-11/12 h-1/3 bg-white mx-auto">
          <p
            style={{ color: "#548235" }}
            className="px-5 pt-10 font-black text-4xl"
          >
            Vision
          </p>
          <div className="lg:items-start lg:mt-5 flex justify-center items-center h-2/3 w-full mx-auto">
            <p className="text-black opacity-75 text-justify px-5">
              Mitigate climate change and sustainably boost food production
              through Smart Irrigation.
            </p>
          </div>
        </div>
        <div className="lg:w-[30%] lg:h-4/5 w-11/12 h-1/3 bg-white mx-auto">
          <p
            style={{ color: "#548235" }}
            className="px-5 pt-10 font-black text-4xl"
          >
            Mission
          </p>
          <div className="lg:items-start lg:mt-5 flex justify-center items-center h-2/3 w-full mx-auto">
            <p className="text-black opacity-75 text-justify px-5">
              We provide farmers with innovative technology solutions that
              optimize water and energy use while increasing productivity and
              climate resilience.
            </p>
          </div>
        </div>
        <div className="lg:w-[30%] lg:h-4/5  w-11/12 h-1/3 bg-white mx-auto">
          <p
            style={{ color: "#548235" }}
            className="px-5 pt-10 font-black text-4xl"
          >
            Objective
          </p>
          <div className="lg:items-start lg:mt-5 flex justify-center items-center h-2/3 w-full mx-auto">
            <p className="text-black opacity-75 text-justify px-5 ">
              Provide Affordable Smart Irrigation Systems
              <br />
              Build Climate Resilience.
              <br />
              Improve Farmers Livelihood.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
