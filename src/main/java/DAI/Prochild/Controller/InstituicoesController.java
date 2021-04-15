package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Instituicoes;
import DAI.Prochild.Request.InstituicoesRequest;
import DAI.Prochild.Service.InstituicoesService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping(path = "{instituicoesId}")
    public Optional<Instituicoes> getOneInstituicao(@PathVariable ("instituicoesId") Long instituicoesId) {
        return instituicoesService.getOneInstituicao(instituicoesId);
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

    @GetMapping(path = "dados/{id}")
    public Instituicoes ola(@PathVariable("id") Long id) {
        List<Instituicoes> instituicoes = instituicoesService.getInstituicoes();
        Instituicoes insti = new Instituicoes();
        for(int i=0; i<instituicoes.size(); i++) {
            insti = instituicoes.get(i);
            if(insti.getUsersId().getId() == id) {
                break;
            }
        }
        return insti;
    }
}
