import {React, useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import  './HomePage.scss';
import { PieChart } from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom';
import { TeamTile } from '../components/TeamTiles';


export const HomePage= ()=> {

const [teams,setTeams] = useState([]);

useEffect(
()=>{
    const fetchTeams = async() =>{
const response = await fetch(`http://localhost:8080/team`);
const data = await response.json();
setTeams(data);
    };
    fetchTeams();
},[]


);


  return (
    <div className="HomePage">
      <div className="header-section">
          <h1 className="header-text">IPL Dashboard</h1>
          </div>  
      <div className="home-grid">
{teams.map(team=><TeamTile teamName={team.teamName}/>)}

      </div>
      
    </div>
  );
}

