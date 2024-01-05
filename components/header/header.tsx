import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="h-screen w-screen">
        <div className="lg:h-full w-full h-3/4 relative">
          <h1 className="pt-10 head-text text-white px-5">
            <span className="interior"> Precision Farming </span> Through{" "}
            <span className="exterior">Smart </span>{" "}
            <span className="interior">Irrigation.</span>
          </h1>
        </div>

        <div className="w-full h-screen ">
          <div className="lg:h-full w-full h-3/4 relative">
            <div className="transparentColor w-full h-full absolute z-10 flex-col flex justify-center text-center items-center">
              <h1 style={{ color: "#548235" }} className="pt-5 text-3xl  px-5">
                SolarAgroTech
              </h1>
              <p className="text-white pt-3 mb-head-text px-5">
                Where Every <br />{" "}
                <span style={{ color: "rgb(3, 178, 82)" }}>Drop</span> <br />
                Matters
              </p>
            </div>
            <Image
              src="/header.jpg"
              alt="SolarAgroTech Image"
              fill={true}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-white text-lg px-4 pt-2 text-justify lg:pt-10 lg:text-lg lg:px-10">
            <p className="lg:pt-10 px-5 lg:px-11 text-white">
              {" "}
              <span
                style={{ color: "rgb(3, 178, 82)" }}
                className="text-2xl font-black"
              >
                {" "}
                Solaragrotech{" "}
              </span>
              empowers agriculture’s digital transformation through smart
              irrigation and renewable energy solutions. We enable data-driven,
              precise cultivation for farmers globally to optimize water and
              energy resources while increasing productivity to feed communities
              sustainably. Our technologies are creating a future where
              innovation tackles climate change while achieving food security{" "}
            </p>
          </p>
        </div>
      </div>
      <div style={{ height: "120vh" }} className="w-screen "></div>

      <div className="lg:w-screen lg:h-[35vh] "></div>
    </div>
  );
};

export default Header;
