export default function Footer() {
    const dummyMenu = ["About Us", "Career", "Terms", "FAQ"]
    let i = 1;
    return (
        <footer className="w-full h-[calc(60vh-8rem)] bg-brand p-5 text-white flex">
            {
                Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="w-1/4 flex flex-col mx-2">
                        {
                            dummyMenu.map((elem) => {
                                i++;
                                return (<div key={i} className="border-b-2 py-2 hover:bg-white hover:border-b-2 hover:text-black hover:cursor-pointer">
                                    {elem}
                                </div>);
                            })
                        }
                    </div>
                ))
            }

            <div className="w-1/4 flex flex-col mx-2">
                Some Other Text
            </div>
        </footer>
    );
}