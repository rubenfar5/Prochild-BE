package DAI.Prochild.Repository;


import DAI.Prochild.Entity.Mensagens;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensagensRepository extends JpaRepository<Mensagens, Long> {
}
