package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Livros;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LivrosRepository
    extends JpaRepository<Livros, Long> {

    @Query("SELECT l FROM Livros l WHERE l.nome = ?1")
    Optional<Livros> findLivrosByNome(String nome);
}
