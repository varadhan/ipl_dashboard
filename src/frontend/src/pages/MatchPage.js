import {React, useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss';

export const MatchPage= ()=> {

  const [matches,setMatches] = useState([]);
  const {teamName,year} = useParams();
  useEffect(
  ()=>{
      const fetchmatches = async() =>{
  const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
  const data = await response.json();
  setMatches(data);
      };
      fetchmatches();
  },[teamName,year]
  
  
  );
  


  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h3>Select year</h3>
        <YearSelector  teamName={teamName}/></div>
      <div>
      <h1 className="page-heading"><Link to={`/teams/${teamName}`}>{teamName}</Link> matches in {year}</h1>
      {
      matches.map(match=><MatchDetailCard teamName={teamName} match={match}/>)
      }
      </div>
    </div>
  );
}
