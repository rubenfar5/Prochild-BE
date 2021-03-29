package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Service.LivrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "prochild/livros")
public class LivrosController {

    private final LivrosService livrosService;

    @Autowired
    public LivrosController(LivrosService livrosService) {
        this.livrosService = livrosService;
    }

    @GetMapping
    public List<Livros> getLivros() {
        return livrosService.getLivros();
    }

    @PostMapping
    public void postLivros(@RequestBody Livros livros) {
        livrosService.addNewLivros(livros);
    }

    @DeleteMapping(path = "(livrosId}")
    public void deleteLivros(@PathVariable("livrosId") Long livrosId) {
        livrosService.deleteLivros(livrosId);
    }

}
