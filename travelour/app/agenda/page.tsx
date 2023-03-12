import Image from "next/image";
import SampleAgenda from "/home/weiceica/builds/travelour/travelour/images/printable-travel-itinerary-template.png"
function page() {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
        <div className="flex-1">
          TODO: THIS IS AM EXAMPLE OF OUR AGENDA PAGE
        </div>
          <Image
          src={SampleAgenda}
          width={500}
          height={500}
          alt="logo"
        />
        </div>
    )
  }
  
  export default page