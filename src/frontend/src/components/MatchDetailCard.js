import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchDetailCard.scss';
export const MatchDetailCard= ({match,teamName})=> {
    if(!match) return null;
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1; 
    const otherTeamRoute = `/teams/${otherTeam}`;  
    const isMatchWon = teamName===match.winner;
    return (
    <div className={isMatchWon ? 'MatchDetailCard won-card': 'MatchDetailCard lost-card'}>
      <div>
      <h4><span className="vs">VS </span><Link to={otherTeamRoute}>{otherTeam}</Link></h4>
      <h4 className="match-date">{match.date}</h4>
      <h4 className="match-venue">at {match.venue}</h4>
      <h4 className="match-result">{match.winner} by {match.resultMargin} {match.result}</h4>
      </div>
      <div className="addition-detail">
       <h4>First Innings</h4>
       <p>{match.team1}</p> 
       <h4>Second Innings</h4>
       <p>{match.team2}</p>
       <h4>Man of the match</h4>
       <p>{match.playerOfMatch}</p> 
       <h4>Umpires</h4>
       <p>{match.umpire1},{match.umpire2}</p>
       </div> 
    </div>
  );
}

