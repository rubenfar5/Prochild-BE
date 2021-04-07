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
    public byte[] getOneCapa(@PathVariable ("linhasId") Long linhasId) {
        var linha = linhasApoioService.getOneImagem(linhasId);
        return linha.getImagem();
    }

    @PostMapping(consumes = "multipart/form-data")
    public void create(@RequestPart("imagem")MultipartFile imagem, @RequestPart("linhaapoio") LinhasApoio linhasApoio) throws IOException {
        linhasApoio.setImagem(imagem.getBytes());
        linhasApoioService.addNewLinhasApoio(linhasApoio);
    }

    @DeleteMapping(path = "{linhasId}")
    public void deleteLinhasApoio(@PathVariable("linhasId") Long linhasId) {
        linhasApoioService.deleteLinhas(linhasId);
    }
}
