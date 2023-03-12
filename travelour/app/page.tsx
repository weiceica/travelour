import { BoltIcon, ExclamationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex grow flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">Travelour</h1>
        
        <div className="flex space-x-3 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* lightbulb icon */}
                    <LightBulbIcon className="h-7 w-7"/>
                    <h2>Examples</h2>
                </div>
                <div className="space-y-3">
                    <p className="infoText hover:animate-bounce">"Where should I travel to in August?"</p>
                    <p className="infoText hover:animate-bounce">"What are the hotel prices for St Lucia on December 6th?"</p>
                    <p className="infoText hover:animate-bounce">"Plan me a 4 day road trip around Alaska to see the Northern lights"</p>

                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Bolt icon */}
                    <BoltIcon className="h-7 w-7"/>
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-3">
                    <p className="infoText hover:animate-bounce">Hotel prices + transportation planning</p>
                    <p className="infoText hover:animate-bounce">Developing an iternary given a specific set of dates and instructions</p>
                    <p className="infoText hover:animate-bounce">Planning different kinds of trips and revising various itenaries</p>

                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* Excla-Circ icon */}
                    <ExclamationCircleIcon className="h-7 w-7"/>
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-3">
                    <p className="infoText hover:animate-bounce">Don't input "Add XXX to my travel planner"</p>
                    <p className="infoText hover:animate-bounce">No harmful or disrespectful slangs (these would be reported)</p>
                    <p className="infoText hover:animate-bounce">Don't input "Pay for my trip via a credit cards"</p>

                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;