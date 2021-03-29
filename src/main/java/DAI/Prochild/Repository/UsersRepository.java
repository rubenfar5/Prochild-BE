package DAI.Prochild.Repository;

import DAI.Prochild.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UsersRepository
        extends JpaRepository<Users, Long> {

    @Query("SELECT u FROM Users u WHERE u.email = ?1")
    Optional<Users> findByEmail(String email);

    @Query("SELECT u FROM Users u WHERE u.username = ?1")
    Optional<Users> findUsersByUsername(String username);

}
