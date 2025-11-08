export default function Navigation() {
    const menus = ["Buttons", "Inputs", "Typography"];

    return (
        <nav className="w-1/6 border-r-2">
            <div className="flex h-16 items-center justify-center">
                <h2>
                    <a className="decoration-0" href="/">Home</a>
                </h2>
            </div>
            <div className="px-1">
                {
                    menus.map((elem) => (
                        <a key={elem.toLowerCase()} className="decoration-0 block p-2 border-b-1 border-gray-400 drop-shadow-lg hover:bg-brand hover:cursor-pointer hover:text-white active:bg-amber-500 active:cursor-pointer" href={"/"+elem.toLowerCase()}>{elem}</a>
                        // <div key={elem.toLowerCase()} className="p-2 border-b-1 border-gray-400 drop-shadow-lg hover:bg-brand hover:cursor-pointer hover:text-white active:bg-amber-500 active:cursor-pointer">
                        //     <a className="decoration-0" href={"/"+elem.toLowerCase()}>{elem}</a>
                        // </div>
                    ))
                }
            </div>
        </nav>
    );
}