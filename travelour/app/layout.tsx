import PageSelector from '../components/PageSelector';
import SideBar from '../components/SideBar';
import Login from '../components/Login';
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import '../styles/globals.css';
import ClientProvider from '../components/ClientProvider';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const sesh = await getServerSession(authOptions);
    console.log(sesh);
    return (
      <html lang="en">
        <head />
        <body>
            {/* Everything wrapped around SessionProvider has the ability to use the session state Note: Once I log in, there will be a session, once I log out, there will not be a session, so thus we have to login ia google to access all the sessions */}
            <SessionProvider session={sesh}>
                { sesh ? (
                    <div className="flex">
                        {/* PageSelector */}
                        <div className="bg-[#262926] max-w-xs h-screenflex w-[8rem]"><PageSelector /></div>

                        {/* Sidebar */}
                        <div className="bg-[#2b3028] max-w-xs h-screen md:min-w-[16rem]"><SideBar /></div>

                        {/* Notifications */}
                        <ClientProvider/>

                        <div className="bg-[#383F34] flex w-screen">{children}</div>
            
                        {/* Footbar */}
                    </div>
                ) :(
                    <Login></Login>
                )}
            </SessionProvider>
        </body>
      </html>
    )
} 