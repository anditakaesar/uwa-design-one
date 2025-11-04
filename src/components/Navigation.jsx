export default function Navigation() {
    const menus = ["Buttons", "Pages", "Other Menu", "This Menu", "Again"];

    return (
        <nav className="w-1/6 border-r-2">
            <div className="flex h-16 items-center justify-center">
                <p>Logo</p>
            </div>
            <div className="px-1">
                {
                    menus.map((elem) => (
                        <div key={elem.toLowerCase()} className="p-2 border-b-1 border-gray-400 drop-shadow-lg hover:bg-brand hover:cursor-pointer hover:text-white active:bg-amber-500 active:cursor-pointer">
                            {elem}
                        </div>
                    ))
                }
            </div>
        </nav>
    );
}