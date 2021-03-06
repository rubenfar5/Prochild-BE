package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Jogos;
import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Service.JogosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "prochild/jogos")
@CrossOrigin(maxAge = 3600)
public class JogosController {

    private final JogosService jogosService;

    @Autowired
    public JogosController(JogosService jogosService) {
        this.jogosService = jogosService;
    }

    @GetMapping
    public List<Jogos> getJogos() {
        return jogosService.getJogos();
    }

    @GetMapping(path = "/imagem/{jogosID}")
    public String getOneImagem(@PathVariable ("jogosID") Long jogosID) {
        Jogos jogo = jogosService.getOneImagem(jogosID);
        return jogo.getImagem();
    }

    @PostMapping
    public void postJogos(@RequestBody Jogos jogos) throws IOException {
        jogosService.addNewJogos(jogos);
    }

    @DeleteMapping(path = "{jogosId}")
    public void deleteJogos(@PathVariable("jogosId") Long jogosId) {
        jogosService.deleteJogos(jogosId);
    }
}
