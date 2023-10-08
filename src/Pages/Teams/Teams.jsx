import { useEffect, useState } from "react";
import Team from "../team/team";
import Aos from "aos";
import 'aos/dist/aos.css'

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
            Aos.init({duration:2000})
    }, [])

    return (
        <div className="pl-6 md:w-[1525px] w-[450px]">
            <div className="text-center pt-16 ml-3" data-aos = "fade-down-right">
                <p className="font-normal text-xl mb-3">Our Team</p>
                <h3 className="font-semibold text-3xl">MEET OUR PLANNER</h3>
            </div>
            <div className="md:flex md:items-center md:justify-center gap-14 md:py-9" data-aos = "fade-right">
                {
                    teams.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>

    );
};

export default Teams;