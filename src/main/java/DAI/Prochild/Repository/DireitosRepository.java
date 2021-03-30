package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Direitos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DireitosRepository extends JpaRepository<Direitos, Long> {
}
