package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Users;
import DAI.Prochild.MailSender.SendEmailService;
import DAI.Prochild.Service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "prochild/users")
@CrossOrigin(maxAge = 3600)
public class UsersController {

    private final UsersService usersService;
    private final SendEmailService sendEmailService;

    @Autowired
    public UsersController(UsersService usersService, SendEmailService sendEmailService) {
        this.usersService = usersService;
        this.sendEmailService = sendEmailService;
    }

    @GetMapping
    public List<Users> getUsers() {
        return usersService.getUsers();
    }

    @GetMapping(path = "{usersId}")
    public Optional<Users> getOneUser(@PathVariable ("usersId") Long usersId) {
        return usersService.getOneUser(usersId);
    }

    /*
    @GetMapping(path = "/loggedIn")
    public String currentUserName(Principal principal) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    }*/

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

    @PostMapping(path = "{email}")
    public void enviarEmail(@PathVariable("email") String email) {
        sendEmailService.sendEmails(email);
    }
}
