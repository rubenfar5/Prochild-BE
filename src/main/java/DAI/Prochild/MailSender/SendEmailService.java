package DAI.Prochild.MailSender;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmails(String email) {
        System.out.println("sending email");
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("pw.policiamaritima@gmail.com");
        simpleMailMessage.setTo(email);
        simpleMailMessage.setSubject("Alteração de password");
        
        simpleMailMessage.setText("A sua password foi alterada para: " + pass + " \n Por favor, assim que faça login, diriga-se ao Editar Perfil e mude a Password");
        javaMailSender.send(simpleMailMessage);
        System.out.println("sent email...");
    }
}
