package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Mensagens;
import DAI.Prochild.Service.MensagensService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "prochild/users/familias")
@CrossOrigin(maxAge = 3600)
@AllArgsConstructor
public class MensagensController {

    private final MensagensService mensagensService;

    @PostMapping
    public void postMensagens(@RequestBody Mensagens mensagens) {
        mensagensService.addNewMensagem(mensagens);
    }

    @GetMapping
    public List<Mensagens> getMensagens() {
        return mensagensService.getMensagens();
    }

    @DeleteMapping(path = "{mensagensId}")
    public void deleteMensagens(@PathVariable("mensagensId") Long mensagensId) {
        mensagensService.deleteMensagens(mensagensId);
    }


}
