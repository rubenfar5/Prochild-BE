package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Jogos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JogosRepository extends JpaRepository<Jogos, Long> {

    @Query("Select j FROM jogos j WHERE j.nome = ?1")
    Optional<Jogos> findJogosByNome(String nome);
}
