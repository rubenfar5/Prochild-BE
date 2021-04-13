package DAI.Prochild.MailSender;

import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Optional;

@Service
public class SendEmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    private final UsersRepository usersRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public SendEmailService(UsersRepository usersRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.usersRepository = usersRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void sendEmails(SendEmailRequest sendEmailRequest) {
        Users user = usersRepository.findByEmail(sendEmailRequest.getEmail()).get();
        Optional<Users> usersByEmail =
                usersRepository.findByEmail(sendEmailRequest.getEmail());

        if (!usersByEmail.isPresent()) {
            throw new IllegalStateException("Este email não existe");
        }

        System.out.println(user.getUsername() + " USER");
        System.out.println(sendEmailRequest.getUsername() + " Email");

        if ( !user.getUsername().equals(sendEmailRequest.getUsername())) {
            throw new IllegalStateException("Username e email não coincidem");
        }

        System.out.println("sending email");
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("happychild.pc@gmail.com");
        simpleMailMessage.setTo(sendEmailRequest.getEmail());
        simpleMailMessage.setSubject("Alteração de password");

            // ASCII range – alphanumeric (0-9, a-z, A-Z)
            final String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            SecureRandom random = new SecureRandom();
            StringBuilder sb = new StringBuilder();

            // each iteration of the loop randomly chooses a character from the given
            // ASCII range and appends it to the StringBuilder instance

            for (int i = 0; i < 6; i++)
            {
                int randomIndex = random.nextInt(chars.length());
                sb.append(chars.charAt(randomIndex));
            }
        System.out.println(sb.toString());
        String encodedPassword = bCryptPasswordEncoder.encode(sb.toString());
        System.out.println(user + "USER");
        System.out.println(encodedPassword + "PASS");
        user.setPassword(encodedPassword);
        System.out.println(user + "USER mais pass");
        usersRepository.save(user);
        simpleMailMessage.setText("A sua password foi alterada para: " + sb.toString() + "\nPor favor, assim que faça login, dirija-se ao Editar Perfil e mude a Password");
        javaMailSender.send(simpleMailMessage);
        System.out.println("sent email...");
    }
}
