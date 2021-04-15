package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Request.FamiliasRequest;
import DAI.Prochild.Service.FamiliasService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "prochild/users/familias")
@CrossOrigin(maxAge = 3600)
@AllArgsConstructor
public class FamiliasController {

    private final FamiliasService familiasService;

    @PostMapping
    public void postFamilias(@RequestBody FamiliasRequest familiasRequest) {
        familiasService.addNewFamilias(familiasRequest);
    }

    @GetMapping
    public List<Familias> getFamilias() {
        return familiasService.getFamilias();
    }


    @GetMapping(path = "{familiasId}")
    public Optional<Familias> getOneFamilia(@PathVariable ("familiasId") Long familiasId) {
        return familiasService.getOneFamilia(familiasId);
    }

    @PutMapping(path = "{familiasId}")
    public void updateUsers(
            @PathVariable("familiasId") Long familiasId,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String concelho) {
        familiasService.updateFamilias(familiasId, nome, concelho);
    }

    @GetMapping(path = "dados/{id}")
    public Familias ola(@PathVariable("id") Long id) {
        List<Familias> familias = familiasService.getFamilias();
        Familias familia = new Familias();
        for(int i=0; i<familias.size(); i++) {
            familia = familias.get(i);
            if(familia.getUsersId().getId() == id) {
                break;
            }
        }
        return familia;
    }
}

