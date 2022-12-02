import Logo from "../assets/react.svg"



const title_card = (props) => {
    const infos = props.Info;
    console.log(infos)

    return(
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {infos.map((Info) => (
                <div className="flex flex-wrap flex-col border-solid border-2 border-indigo-600 lg:p-10 md:p-7 bg-white rounded-lg items-center 
                shadow-lg shadow-indigo-900 sm:p-6" key={Info.id}>
                    <div className="text-center text-base">
                        <img className="inline-block" src={Logo} />
                        <div>
                            <strong>{Info.person}</strong>
                        </div>
                        <div>
                            <span>{Info.body}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default title_card