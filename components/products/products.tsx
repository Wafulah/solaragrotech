import Image from "next/image";

const Products = () => {
  return (
    <div className="h-[200vh] lg:h-[160vh] mt-5 w-screen ">
      <div className="h-1/6 w-full flex items-center lg:text-center lg:justify-center">
        <h1 className="sub-head-text text-white px-5 ">Our <span className="exterior">Services</span></h1>
      </div>
      <div className="w-full h-5/6">
        <div className=" lg:flex lg:justify-center lg:w-2/3 lg:mx-auto h-1/2 w-full">
          <div className="lg:w-[40%] lg:h-full w-11/12 h-1/2 mx-auto lg:mr-2 relative">
            <div className="w-full h-3/4 relative">
              <div className="transparentColor w-full lg:1/3 h-1/2 absolute bottom-0 z-10 transparent-25">
                <p className="text-white opacity-75 px-2 pt-1 ">
                  AI-driven automation optimizes water usage in real-time for
                  increased yields.
                </p>
              </div>{" "}
              <Image
                src="/irrigation.jpg"
                alt="SolarAgroTech Image"
                fill={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-1/4 w-full">
              <p className="text-white opacity-75 px-5 text-base pt-2">
                Precision Irrigation Systems
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] lg:h-full w-11/12 h-1/2 mx-auto lg:ml-2 relative">
            <div className="w-full h-3/4 relative">
              <div className="transparentColor w-full lg:1/3 h-1/2  absolute bottom-0 z-10 transparent-25">
                <p className="text-white opacity-75 px-2 pt-1 ">
                  Affordable solar pumps and panels, coupled with free
                  installation, promote sustainable and eco-friendly farming
                  practices.
                </p>
              </div>{" "}
              <Image
                src="/solar.jpg"
                alt="SolarAgroTech Image"
                fill={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-1/4 w-full">
              <p className="text-white opacity-75 px-5 text-base pt-2">
                Solar-Powered Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:w-2/3 lg:mx-auto h-1/2 w-full">
          <div className="lg:w-[40%] lg:h-full w-11/12 h-1/2 lg:mr-2 mx-auto relative">
            <div className="w-full h-3/4 relative">
              <div className="transparentColor w-full lg:1/3 h-1/2  absolute bottom-0 z-10 transparent-25">
                <p className="text-white opacity-75 px-2 pt-1 ">
                  Competitive-priced filters ensure a clean water supply,
                  enhancing crop health and preventing soil degradation.
                </p>
              </div>
              <Image
                src="/purify.jpg"
                alt="SolarAgroTech Image"
                fill={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-1/4 w-full">
              <p className="text-white opacity-75 px-5 text-base pt-2">
                Smart Water Purification
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] lg:h-full w-11/12 h-1/2 mx-auto lg:ml-2 relative">
            <div className="w-full h-3/4 relative">
              <div className="transparentColor w-full lg:1/3 h-1/2  absolute bottom-0 z-10 transparent-25">
                <p className="text-white opacity-75 px-2 pt-1 ">
                  Instant notifications empower farmers with 24/7 field
                  monitoring, facilitating informed decisions for optimal crop
                  management.
                </p>
              </div>{" "}
              <Image
                src="/iot.jpg"
                alt="SolarAgroTech Image"
                fill={true}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-1/4 w-full">
              <p className="text-white opacity-75 px-5 text-base pt-2">
                IoT Sensors and Real-Time Monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Products;
