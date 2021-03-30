package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Jogos;
import DAI.Prochild.Service.JogosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "prochild/jogos")
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

    @PostMapping
    public  void postJogos(@RequestBody Jogos jogos) {
        jogosService.addNewJogos(jogos);
    }

    @DeleteMapping(path = "{jogosId}")
    public void deleteJogos(@PathVariable("jogosId") Long jogosId) {
        jogosService.deleteJogos(jogosId);
    }
}
