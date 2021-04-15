package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.MailSender.SendEmailService;
import DAI.Prochild.Service.FamiliasService;
import DAI.Prochild.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "prochild/users")
@CrossOrigin(maxAge = 3600)
public class UsersController {

    private final UsersService usersService;
    private final FamiliasService familiasService;

    @Autowired
    public UsersController(UsersService usersService, SendEmailService sendEmailService, FamiliasService familiasService) {
        this.usersService = usersService;
        this.familiasService = familiasService;
    }

    @GetMapping
    public List<Users> getUsers() {
        return usersService.getUsers();
    }

    @GetMapping(path = "{usersId}")
    public Optional<Users> getOneUser(@PathVariable ("usersId") Long usersId) {
        return usersService.getOneUser(usersId);
    }

    @PostMapping
    public void postUsers(@RequestBody Users users) {
        usersService.addNewUsers(users);
    }

    @DeleteMapping(path = "{usersId}")
    public void deleteUsers(@PathVariable("usersId") Long usersId) {
        usersService.deleteUsers(usersId);
    }

    @PutMapping(path = "{usersId}")
    public void updateUsers(
            @PathVariable("usersId") Long usersId,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String password) {
                usersService.updateUsers(usersId, email, password);
    }

    @GetMapping(path = "/loggedIn")
    public Users currentUserName(Principal principal) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Users userDetails = (Users) authentication.getPrincipal();
        return userDetails;
    }

}
