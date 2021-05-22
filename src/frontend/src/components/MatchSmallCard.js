import {React} from 'react';
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';

export const MatchSmallCard= ({match,teamName})=> {
    if(!match) return null;
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1; 
    const otherTeamRoute = `/teams/${otherTeam}`;
    const isMatchWon = teamName==match.winner;
 
    return (
<div className={isMatchWon ? 'MatchSmallCard won-card': 'MatchSmallCard lost-card'}>
      <h3>vs<Link to={otherTeamRoute}> {otherTeam}</Link></h3>
      <h4 className="match-result">{match.winner} by {match.resultMargin} {match.result}</h4>

    </div>
  );
}

