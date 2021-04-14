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

    @GetMapping("menuEscolherPerfil")
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

    @GetMapping("dadosPerfil")
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

    @GetMapping("bolinha")
    public String bolinha() {
        return "bolinha";
    }

    @GetMapping("formularioDenuncias")
    public String formularioDenuncias() {
        return "FormularioDenuncias";
    }

    @GetMapping("Dashboard")
    public String dashboard() {
        return "index";
    }

    @GetMapping("menuApoiosFamiliares")
    public String menuFamiliares() {
        return "MenuApoisFamiliares";
    }

    @GetMapping("menuDireitos")
    public String menuDireitos() {
        return "MenuDireitos";
    }

    @GetMapping("menuDireitosCriancas")
    public String menuDireitosCriancas() {
        return "MenuDireitosCriancas";
    }

    @GetMapping("menuDiversoes")
    public String menuDiversoes() {
        return "MenuDiversoes";
    }

    @GetMapping("menuEscolherIdade")
    public String menuEscolherIdade() {
        return "MenuEscolherIdade";
    }

    @GetMapping("menuForum")
    public String menuForum() {
        return "MenuForum";
    }

    @GetMapping("menuJogos")
    public String menuJogos() {
        return "MenuJogos";
    }

    @GetMapping("menuLinhasApoio")
    public String menuLinhasApoio() {
        return "MenuLinhasApoio";
    }

    @GetMapping("menuLinhasPolicia")
    public String menuLinhasPolicia() {
        return "MenuLinhasPolicia";
    }

    }
