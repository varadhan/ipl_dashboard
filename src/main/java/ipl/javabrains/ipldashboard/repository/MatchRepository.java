package ipl.javabrains.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import ipl.javabrains.ipldashboard.model.Match;

public interface MatchRepository extends CrudRepository<Match,Long>{
    List<Match> getByTeam1OrTeam2OrderByDateDesc
    (String teamName, String teamName1,Pageable pageable);

    @Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :date1 and :date2 order by m.date desc")
    List<Match> getByMatchByDate(@Param("teamName") String teamName,
    @Param("date1") LocalDate date1,@Param("date2") LocalDate date2);


default List <Match> findTeamData(String teamName,int count){
    return  getByTeam1OrTeam2OrderByDateDesc(teamName,teamName,PageRequest.of(0, count));
}
}
