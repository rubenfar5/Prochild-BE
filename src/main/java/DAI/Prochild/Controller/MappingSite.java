package DAI.Prochild.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(maxAge = 3600)
@Controller
@RequestMapping("/")
public class MappingSite {

    @GetMapping("escolherPerfil")
    public String escolherPerfil() {
        return "MenuEscolherPerfil";
    }

    @GetMapping("loginAdmin")
    public String loginAdmin() {
        return "LoginAdmin";
    }

    @GetMapping("loginFamilias")
    public String loginFamilias() {
        return "LoginFamilias";
    }

    @GetMapping("loginInstituicoes")
    public String loginInstituicoes() {
        return "LoginInstituicoes";
    }

    @GetMapping("menuPrincipal")
    public String menuPrincipal() {
        return "MenuPrincipal";
    }

    @GetMapping("perfil")
    public String perfil() {
        return "DadosPerfil";
    }

    @GetMapping("registarFamilia")
    public String registarFamilia() {
        return "RegistarFamilia";
    }

    @GetMapping("registarInstituicao")
    public String registarInstituicao() {
        return "RegistarInstituicao";
    }

    }
