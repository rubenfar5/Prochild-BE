package DAI.Prochild.Controller;

import DAI.Prochild.Entity.LinhasApoio;
import DAI.Prochild.Service.LinhasApoioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "prochild/linhasapoio")
@CrossOrigin(maxAge = 3600)
public class LinhasApoioController {

    private final LinhasApoioService linhasApoioService;

    @Autowired
    public LinhasApoioController(LinhasApoioService linhasApoioService) {
        this.linhasApoioService = linhasApoioService;
    }

    @GetMapping
    public List<LinhasApoio> getLinhasApoio() {
        return linhasApoioService.getLinhasApoio();
    }

    @GetMapping(path = "/imagem/{linhasId}")
    public String getOneCapa(@PathVariable ("linhasId") Long linhasId) {
        LinhasApoio linha = linhasApoioService.getOneImagem(linhasId);
        return linha.getImagem();
    }

    @PostMapping
    public void create(@RequestBody LinhasApoio linhasApoio) throws IOException {
        linhasApoioService.addNewLinhasApoio(linhasApoio);
    }

    @DeleteMapping(path = "{linhasId}")
    public void deleteLinhasApoio(@PathVariable("linhasId") Long linhasId) {
        linhasApoioService.deleteLinhas(linhasId);
    }
}
