package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Criancas;
import DAI.Prochild.Service.CriancasService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "prochild/criancas")
@CrossOrigin(maxAge = 3600)
public class CriancasController {

    private final CriancasService criancasService;

    @Autowired
    public CriancasController(CriancasService criancasService) {
        this.criancasService = criancasService;
    }

    @PostMapping
    public void postCriancas(@RequestBody Criancas criancas) {
        criancasService.addNewCriancas(criancas);
    }

    @GetMapping
    public List<Criancas> getCriancas(){
        return criancasService.getCriancas();
    }

    @DeleteMapping(path = "{criancasId}")
    public void deleteCriancas(@PathVariable("criancasId") Long criancasId) {
        criancasService.deleteCriancas(criancasId);
    }
}
