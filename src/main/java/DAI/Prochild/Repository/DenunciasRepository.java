package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Denuncias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DenunciasRepository extends JpaRepository<Denuncias, Long> {
}
