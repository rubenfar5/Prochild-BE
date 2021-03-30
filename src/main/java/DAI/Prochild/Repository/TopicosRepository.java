package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Entity.Topicos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TopicosRepository extends JpaRepository<Topicos, Long> {

    @Query("SELECT t FROM Topicos t WHERE t.id = ?1")
    Optional<Topicos> findTopicosById(Long id);

    @Query("SELECT t FROM Topicos t WHERE t.nome = ?1")
    Optional<Topicos> findTopicosByNome(String nome);
}
