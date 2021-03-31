package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Request.FamiliasRequest;
import DAI.Prochild.Service.FamiliasService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PutMapping(path = "{familiasId}")
    public void updateUsers(
            @PathVariable("familiasId") Long familiasId,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String concelho) {
        familiasService.updateFamilias(familiasId, nome, concelho);
    }
}

