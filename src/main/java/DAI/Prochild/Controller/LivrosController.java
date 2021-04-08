package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Livros;

import DAI.Prochild.Service.LivrosService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "prochild/livros")
@CrossOrigin(maxAge = 3600)
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

    @GetMapping(path = "/capa/{livrosId}")
    public String getOneCapa(@PathVariable ("livrosId") Long livrosId) {
        var livro = livrosService.getOneCapa(livrosId);
        return livro.getCapa();
    }

    @PostMapping
    public void create(@RequestBody Livros livro) throws IOException {
        livrosService.addNewLivros(livro);
    }

    @DeleteMapping(path = "{livrosId}")
    public void deleteLivros(@PathVariable("livrosId") Long livrosId) {
        livrosService.deleteLivros(livrosId);
    }

}
