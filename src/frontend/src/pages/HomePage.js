import {React, useEffect,useState} from 'react';
import  './HomePage.scss';
import { TeamTile } from '../components/TeamTiles';


export const HomePage= ()=> {

const [teams,setTeams] = useState([]);

useEffect(
()=>{
    const fetchTeams = async() =>{
const response = await fetch(`${process.env.REACT_APP_RELATIVE_PATH_URL}/team`);
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
{teams.map(team=><TeamTile key={team.id} teamName={team.teamName}/>)}

      </div>
      
    </div>
  );
}

