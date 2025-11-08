import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Root() {
    return (
        <>
            <header className="w-full h-auto p-5 bg-brand shadow-md">
                <h1 className="text-4xl text-white text-shadow-md">Uwa Design System</h1>
            </header>

            <div className="flex flex-row">
                <Navigation></Navigation>

                <main className="w-5/6 p-5">
                    <Outlet />
                </main>
            </div>

            <Footer></Footer>
        </>
    );
}