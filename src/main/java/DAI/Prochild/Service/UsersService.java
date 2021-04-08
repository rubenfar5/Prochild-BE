package DAI.Prochild.Service;

import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UsersService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";
    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersRepository.findUsersByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, username)));
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Optional<Users> getOneUser(Long usersId) {
        boolean exists = usersRepository.existsById(usersId);
        if (!exists) {
            throw new IllegalStateException("User com id " + usersId + " não existe");
        }

        return usersRepository.findById(usersId);
    }

    public Users addNewUsers(Users users) {
        Optional<Users> usersByEmail =
                usersRepository.findByEmail(users.getEmail());
        Optional<Users> usersByUsername =
                usersRepository.findUsersByUsername(users.getUsername());
        if (usersByEmail.isPresent()) {
            throw new IllegalStateException("Este email já existe");
        }
        if (usersByUsername.isPresent()) {
            throw new IllegalStateException("Este Username já existe");
        }
        String encodedPassword = bCryptPasswordEncoder.encode(users.getPassword());

        users.setPassword(encodedPassword);

        return usersRepository.save(users);

    }

    public void deleteUsers(Long usersId) {
        boolean exists = usersRepository.existsById(usersId);
        if (!exists) {
            throw new IllegalStateException("User com id " + usersId + " não existe");
        }

        usersRepository.deleteById(usersId);
    }

    @Transactional
    public void updateUsers(Long usersId,
                            String email,
                            String password) {
        Users users = usersRepository.findById(usersId)
                .orElseThrow(() -> new IllegalStateException(
                        "User com id " + usersId + " não existe"
                ));
        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(users.getEmail(), email)) {
            Optional<Users> usersOptional = usersRepository.findByEmail(email);
            if (usersOptional.isPresent()) {
                throw new IllegalStateException("Email já existe");
            }
            users.setEmail(email);
        }

        if (password != null &&
                password.length() > 0 &&
                !Objects.equals(users.getPassword(), password)) {
            users.setPassword(password);
        }
    }

}
