package DAI.Prochild.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(maxAge = 3600)
@Controller
@RequestMapping("https://happychildpc.herokuapp.com/")
public class MappingSite {

    @GetMapping("menuEscolherPerfil")
    public String escolherPerfil() {
        return "index";
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

    @GetMapping("dashboard")
    public String dashboard() {
        return "Dashboard";
    }

    @GetMapping("menuApoiosFamiliares")
    public String menuFamiliares() {
        return "MenuApoiosFamiliares";
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

    @GetMapping("menuLivros")
    public String menuLivros() {
        return "MenuLivros";
    }

    @GetMapping("menuSelecaoTipoInformacao")
    public String menuSelecaoTipoInformacao() {
        return "MenuSelecaoTipoInformacao";
    }

    @GetMapping("menuTutorial")
    public String menuTutorial() {
        return "MenuTutorial";
    }

    @GetMapping("menuVerDenuncias")
    public String menuVerDenuncias() {
        return "MenuVerDenuncias";
    }

    @GetMapping("menuVideos")
    public String menuVideos() {
        return "MenuVideos";
    }

    @GetMapping("pong")
    public String pong() {
        return "pong";
    }

    @GetMapping("recuperarPalavraPasse")
    public String recuperarPalavraPasse() {
        return "RecuperarPalavraPasse";
    }

    @GetMapping("snake")
    public String snake() {
        return "snake";
    }

    @GetMapping("tetris")
    public String tetris() {
        return "tetris";
    }

    @GetMapping("tictac")
    public String tictac() {
        return "tictac";
    }

    @GetMapping("breakout")
    public String breakout() {
        return "breakout";
    }
    }


