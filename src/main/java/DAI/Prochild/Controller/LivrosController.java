package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Service.LivrosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
/*
    @PostMapping
    public void postLivros(@ModelAttribute Livros livros) {
        livrosService.addNewLivros(livros);
    }
*/
    @CrossOrigin
    @PostMapping(consumes = "multipart/form-data")
    public void create(@RequestPart("capa") MultipartFile capa, @RequestPart("livro") Livros livro) throws IOException {
        livro.setCapa(capa.getBytes());
        livrosService.addNewLivros(livro);
    }

    @DeleteMapping(path = "(livrosId}")
    public void deleteLivros(@PathVariable("livrosId") Long livrosId) {
        livrosService.deleteLivros(livrosId);
    }

}
