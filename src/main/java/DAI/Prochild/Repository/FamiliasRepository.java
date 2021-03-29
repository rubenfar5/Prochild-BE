package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FamiliasRepository
        extends JpaRepository<Familias, Long> {
/*
    @Query("SELECT u FROM Familias f, Users u WHERE f.usersId = ?1 and f.usersId = u.id")
    Optional<Familias> findFamiliasByUsersId(Users usersId);*/
}
