package DAI.Prochild.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("prochild/")
public class Lo {

    @GetMapping("registarConta")
    public String registarPage() {
        return "RegistarFamilia";
    }

    @GetMapping("login")
    public String loginPage() {
        return "LoginAdmin";
    }

    @GetMapping("menu")
    public Object loginPageRedirect(HttpServletRequest request, HttpServletResponse response, Authentication authResult) throws IOException, ServletException {
        String role =  authResult.getAuthorities().toString();

        //String caminho = "";
        if(role.contains("ROLE_ADMIN")){
            return "RegistarFamilia";
        }
        else if(role.contains("familia")) {
            return "MenuPrincipal";
        }

        return null;
    }
}
