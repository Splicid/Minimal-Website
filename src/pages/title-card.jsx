import Logo from "../assets/react.svg"



const title_card = (props) => {
    const infos = props.Info;
    console.log(infos)

    return(
        <div className="grid grid-cols-4 gap-4">
            {infos.map((Info) => (
                <div className="flex flex-col border-solid border-2 border-indigo-600 px-10 py-10 bg-white rounded-lg ml-2 mr-2 items-center" key={Info.id}>
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