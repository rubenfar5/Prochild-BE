package DAI.Prochild.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@Controller
@RequestMapping("/prochild")
public class MappingSite {

        @GetMapping("registarConta")
        public String registarPage() {
            return "RegistarFamilia";
        }

        @GetMapping("login")
        public String loginPage() {
            return "LoginAdmin";
        }

        @GetMapping("menu")
        public String menuAdmin() {
            return "MenuPrincipal";
        }
    }
