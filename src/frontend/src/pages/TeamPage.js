import {React, useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import  './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom';

export const TeamPage= ()=> {

const [team,setTeam] = useState({matches:[]});
const {teamName} = useParams();
const totalLose = team.totalMatches-team.totalWin;
useEffect(
()=>{
    const fetchmatches = async() =>{
const response = await fetch(`http://localhost:8080/team/${teamName}`);
const data = await response.json();
setTeam(data);
    };
    fetchmatches();
},[teamName]


);

if(!team || !team.teamName){
    return <h1>Team doesn't Exists</h1>
}
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h3 className="team-name">{team.teamName}</h3>
        </div>
      <div className="win-loss-section">Wins / Losses
      <div className="win-loss-section-pie">
      <PieChart
  data={[
    { title: 'Loses : '+totalLose, value: team.totalMatches-team.totalWin, color: 'indianred' },

    { title: 'Wins : '+team.totalWin, value: team.totalWin, color: 'darkcyan' },
  ]}
/></div>
      </div>
      
      <div className="match-detail-section" >
      <h4>Latest Matches</h4>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
      </div>
      {team.matches.slice(1).map(match=><MatchSmallCard teamName={team.teamName} match={match}/>)}
      <div className="more-section">
        
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More..</Link>
        </div>
    </div>
  );
}

