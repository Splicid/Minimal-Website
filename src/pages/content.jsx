import { useState } from "react";
import Title_card from "./title-card";

const content = () => {
    const [Info, setInfo] = useState([
        { person: 'Luis Abreu', body: 'UX Designer', id: 1},
        { person: 'Jake Stan', body: 'Software Engineer', id: 2},
        { person: 'Ana Abreu', body: 'Data Analyst', id: 3},
        { person: 'Dave Abreu', body: 'Data Analyst', id: 4},
        { person: 'Ten Abreu', body: 'Data Analyst', id: 5},
        { person: 'Pon Abreu', body: 'Data Analyst', id: 6},
        { person: 'Len Abreu', body: 'Data Analyst', id: 7},
        { person: 'Ben Abreu', body: 'Data Analyst', id: 8},
    ]);

    return(
        
        <div className="relative text-center">
            <div className="text-xl absolute text-center w-screen"> Our Team</div>
            <div className="flex items-center justify-center h-[95.7vh] bg-gradient-to-r from-cyan-500 to-blue-500">
            <Title_card Info={Info} />
            </div>
        </div>
    )
}

export default content;