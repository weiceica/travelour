import Image from "next/image";
import SampleAgenda from "images/printable-travel-itinerary-template.png";
import Agenda from "../../components/Agenda";

function page() {
  return (
    <div className="overflow-hidden h-screen flex grow flex-col p-5">
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <h1 className="mt-10 text-center text-white text-3xl font-bold">Agenda</h1>
        <Agenda title="Flight" col1="Airline" col2="Flight" col3="Date" col4="Depart" col5="Arrive"/>
        <Agenda title="Hotel" col1="Name" col2="Address" col3="Phone" col4="Check-in" col5="Check-out"/>
        <Agenda title="Activities" col1="Date" col2="Time" col3="Location" col4="Event" col5="Weather"/>
      </div>
    </div>
  )
}

export default page;