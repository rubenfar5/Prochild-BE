package DAI.Prochild.Registration;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.FamiliasRepository;
import DAI.Prochild.Service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UsersService usersService;
    private final EmailValidator emailValidator;
    private final FamiliasRepository familiasRepository;

    public Users register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());

        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        Users appUser = usersService.addNewUsers(new Users(
                request.getUsername(),
                request.getEmail(),
                request.getPassword(),
                request.getTipo()
                ));

        familiasRepository.save(new Familias(
                request.getNome(),
                request.getSexo(),
                request.getConcelho(),
                appUser
                ));

        return appUser;
    }
}
