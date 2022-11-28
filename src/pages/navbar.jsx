
const change = () => {
    const btn =document.querySelector('.mobile-menu-button');
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    })
    const menu = document.querySelector('.mobile-menu')
}

const navbar = () => {
    return(
        <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="flex items-center space-x-3 py-2 px-3 text-gray-1000">
                            <a href="" className="py-2 px-3"> Home</a>
                            <a href="" className="py-2 px-3"> Why?</a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="" className="py-2 px-4"> Login</a>
                        <a href="" className="py-2 px-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 "> Signup</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={change}>
                            <svg className="w-8 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mobile-menu hidden">
                <a href="" className="block py-2 px-4 text-sm"> Features</a>
                <a href="" className="block py-2 px-4 text-sm"> Casa</a>
            </div>
        </nav>
    )
}


export default navbar;