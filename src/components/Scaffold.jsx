import ButtonShowcase from "./ButtonShowcase";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Scaffold() {
    return (
        <div className="body-container">
            <header className="w-full h-auto p-5 bg-brand shadow-md">
                <h1 className="text-4xl text-white text-shadow-md">Uwa Design System</h1>
            </header>

            <div className="flex flex-row">
                <Navigation></Navigation>

                <main className="w-5/6  p-5">
                    <h2 className="text-2xl pb-5">Button Show Case</h2>
                    <section>
                        <ButtonShowcase></ButtonShowcase>
                    </section>

                    {/* <article>
                        article
                    </article> */}
                </main>
            </div>

            <Footer></Footer>

        </div>
    );
}