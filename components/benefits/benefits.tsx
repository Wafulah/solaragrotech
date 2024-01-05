import { LuCheckCircle, LuCheckSquare } from "react-icons/lu";

const Benefits = () => {
  return (
    <div className="lg:h-[160vh] h-[225vh] w-screen mb-5 lg:mb-40">
      <div className="glassmorphism h-1/4 w-11/12 mx-auto">
        <div className="w-full h-1/5 flex items-center mt-4">
          <LuCheckSquare
            style={{ color: "#548235" }}
            className="text-3xl pl-5"
          />
          <p style={{ color: "#548235" }} className="text-bold text-3xl">
            True Automation
          </p>
        </div>
        <p className="text-white px-5 pt-2">
          Our cutting-edge AI algorithm sets us apart by offering true
          automation in irrigation. With the capability to autonomously optimize
          irrigation processes based on real-time weather data and crop
          requirements, our system operates seamlessly without requiring
          constant input from farmers. This ensures a hassle-free and efficient
          irrigation experience, allowing farmers to focus on other crucial
          aspects of their operations.
        </p>
      </div>

      <div className="mt-2 glassmorphism h-1/4 w-11/12 mx-auto">
        <div className="w-full h-1/5 flex items-center mt-4">
          <LuCheckSquare
            style={{ color: "#548235" }}
            className="text-3xl pl-5"
          />
          <p style={{ color: "#548235" }} className="text-bold text-3xl">
            Real-Time Insights
          </p>
        </div>
        <p className="text-white px-5 pt-2">
          At Solar AgroTech, we prioritize providing farmers with immediate and
          invaluable information. Our system delivers real-time insights
          directly to farmers’ phones, notifying them instantly of any anomalies
          in their fields. This 24/7 monitoring capability enhances farmers’
          decision-making processes, enabling them to respond promptly to
          changes and optimize their agricultural practices for better results.
        </p>
      </div>
      <div className="mt-2 glassmorphism h-1/4 w-11/12 mx-auto">
        <div className="w-full h-1/5 flex items-center mt-4">
          <LuCheckSquare
            style={{ color: "#548235" }}
            className="text-3xl pl-5"
          />
          <p style={{ color: "#548235" }} className="text-bold text-3xl">
            Ultra Precision{" "}
          </p>
        </div>
        <p className="text-white px-5 pt-2">
          Our commitment to precision sets us apart, thanks to our proprietary
          modeling that tailors irrigation to the unique needs of each plant.
          Going beyond general crop types, our system considers the growth stage
          of individual plants and operates at a granularity of square meters.
          This ultra-precision ensures that crops receive the exact amount of
          water they need, contributing to increased yields and resource
          efficiency.
        </p>
      </div>

      <div className="mt-2 glassmorphism h-1/4 w-11/12 mx-auto">
        <div className="w-full h-1/5 flex items-center mt-4">
          <LuCheckSquare
            style={{ color: "#548235" }}
            className="text-3xl pl-5"
          />
          <p style={{ color: "#548235" }} className="text-bold text-3xl">
            Total Flexibility
          </p>
        </div>
        <p className="text-white px-5 pt-2 ">
          Solar AgroTech understands the diverse needs of farmers, and that’s
          why our system offers total flexibility. Farmers can easily customize
          irrigation schedules and amounts for each zone, aligning with the
          specific requirements of their crops. This adaptability empowers
          farmers to tailor their irrigation strategies, accommodating
          variations across their fields and optimizing water usage for maximum
          efficiency.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
