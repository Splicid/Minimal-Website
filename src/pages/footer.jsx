

const footer = () => {
    return(
        <div className="bottom-0 w-screen h-[25vh] bg-slate-700 text-white flex items-center justify-center">
            <div className="w-[90vw] flex flex-row text-center">
                <div class="basis-1/3">
                    <nav> 
                        <ul className="flex space-x-4">
                            <li className="font-bold"><a href=""> About</a></li>
                            <li><a href=""> About</a></li>
                            <li><a href=""> About</a></li>
                            <li><a href=""> About</a></li>
                            <li><a href=""> About</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="basis-1/3">About Us</div>
                <div class="basis-1/3">Contact US</div>
            </div>
        </div>
    )
}

export default footer;