package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Denuncias;
import DAI.Prochild.Request.DenunciasRequest;
import DAI.Prochild.Service.DenunciasService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "prochild/denuncias")
@AllArgsConstructor
public class DenunciasController {

    private final DenunciasService denunciasService;

    @PostMapping
    public void postDenuncias(@RequestBody DenunciasRequest denunciasRequest){
        denunciasService.addNewDenuncias(denunciasRequest);
    }

    @GetMapping
    public List<Denuncias> getDenuncias() {
        return denunciasService.getDenuncias();
    }

    @GetMapping(path = "{denunciasId}")
    public Optional<Denuncias> getOneDenuncia(@PathVariable ("denunciasId") Long denunciasId) {
        return denunciasService.getOneDenuncia(denunciasId);
    }

    @DeleteMapping(path = "{denunciasId}")
    public void deleteDenuncias(@PathVariable("denunciasId") Long denunciasId) {
        denunciasService.deleteDenuncias(denunciasId);
    }
}
