package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Videos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VideosRepository extends JpaRepository<Videos, Long> {

    @Query("SELECT v FROM videos v WHERE v.nome = ?1")
    Optional<Videos> findVideosByNome(String nome);
}
