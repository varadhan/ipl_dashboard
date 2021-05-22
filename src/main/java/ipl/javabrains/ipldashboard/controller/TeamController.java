package ipl.javabrains.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ipl.javabrains.ipldashboard.model.Match;
import ipl.javabrains.ipldashboard.model.Team;

import ipl.javabrains.ipldashboard.repository.MatchRepository;
import ipl.javabrains.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamrepository;
    private MatchRepository matchrepository;

    public TeamController(TeamRepository teamrepository, MatchRepository matchrepository) {
        this.teamrepository = teamrepository;
        this.matchrepository = matchrepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamrepository.findByTeamName(teamName);
        team.setMatches(this.matchrepository.findTeamData(teamName,4));
        return team;

    }

    @GetMapping("/team")
    public Iterable <Team> getTeam() {
        return this.teamrepository.findAll();
    }


    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatches(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year+1, 1, 1);

        return this.matchrepository.getByMatchByDate(teamName, startDate, endDate);
    }

}
