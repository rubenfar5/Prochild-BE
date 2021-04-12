package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Instituicoes;
import DAI.Prochild.Request.InstituicoesRequest;
import DAI.Prochild.Service.InstituicoesService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "prochild/users/instituicoes")
@CrossOrigin(maxAge = 3600)
@AllArgsConstructor
public class InstituicoesController {

    private final InstituicoesService instituicoesService;

    @PostMapping
    public void postInstituicoes(@RequestBody InstituicoesRequest instituicoesRequest) {
        instituicoesService.addNewInstituicoes(instituicoesRequest);
    }

    @GetMapping
    public List<Instituicoes> getInstituicoes() { return  instituicoesService.getInstituicoes();}

    @PutMapping(path = "{instituicoesId}")
    public void updateUsers(
            @PathVariable("instituicoesId") Long instituicoesId,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String concelho) {
        instituicoesService.updateInstituicoes(instituicoesId, nome, concelho);
    }
}
