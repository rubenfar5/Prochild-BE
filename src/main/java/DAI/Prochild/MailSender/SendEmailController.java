package DAI.Prochild.MailSender;

import DAI.Prochild.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "prochild/email")
@CrossOrigin(maxAge = 3600)
public class SendEmailController {

    private final SendEmailService sendEmailService;

    @Autowired
    public SendEmailController(SendEmailService sendEmailService) {
        this.sendEmailService = sendEmailService;
    }


    @PostMapping
    public void sendEmails(@RequestBody SendEmailRequest email) {
        sendEmailService.sendEmails(email);
    }
}
