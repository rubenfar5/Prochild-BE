package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Direitos;
import DAI.Prochild.Service.DireitosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "prochild/direitos")
public class DireitosController {

    private final DireitosService direitosService;

    @Autowired
    public DireitosController(DireitosService direitosService) {
        this.direitosService = direitosService;
    }

    @GetMapping
    public List<Direitos> getDireitos() {
        return direitosService.getDireitos();
    }

    @GetMapping(path = "/imagem/{direitosId}")
    public byte[] getOneImagem(@PathVariable ("direitosId") Long direitosId) {
        var direito = direitosService.getOneImagem(direitosId);
        return direito.getImagem();
    }

    @PostMapping(consumes = "multipart/form-data")
    public void create(@RequestPart("imagem")MultipartFile imagem, @RequestPart("audio")MultipartFile audio, @RequestPart("direitos") Direitos direitos ) throws IOException {
        direitos.setImagem(imagem.getBytes());
        direitos.setAudio(audio.getBytes());
        direitosService.addNewDireitos(direitos);
    }

    @DeleteMapping(path = "{direitosId}")
    public void deleteDireitos(@PathVariable("direitosId") Long direitosId) {
        direitosService.deleteDireitos(direitosId);
    }
}
