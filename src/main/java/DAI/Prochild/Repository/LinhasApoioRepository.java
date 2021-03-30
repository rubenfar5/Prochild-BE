package DAI.Prochild.Repository;

import DAI.Prochild.Entity.LinhasApoio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinhasApoioRepository extends JpaRepository<LinhasApoio, Long> {
}
