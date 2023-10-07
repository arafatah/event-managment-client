import { useEffect, useState } from "react";
import Team from "../team/team";


const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div>
            <div className="text-center pt-16">
                <p className="font-normal text-xl mb-3">Our Team</p>
                <h3 className="font-semibold text-3xl">MEET OUR PLANNER</h3>
            </div>
            <div className="flex items-center justify-center gap-14 py-9">
                {
                    teams.map(team => <Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>

    );
};

export default Teams;