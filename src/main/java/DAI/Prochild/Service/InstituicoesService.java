package DAI.Prochild.Service;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Instituicoes;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.InstituicoesRepository;
import DAI.Prochild.Request.InstituicoesRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class InstituicoesService {

    private final UsersService usersService;
    private final InstituicoesRepository instituicoesRepository;

    public List<Instituicoes> getInstituicoes() { return  instituicoesRepository.findAll();}

    public Users addNewInstituicoes(InstituicoesRequest instituicoesRequest) {
        Users user = usersService.addNewUsers(new Users(
                instituicoesRequest.getUsername(),
                instituicoesRequest.getEmail(),
                instituicoesRequest.getPassword(),
                instituicoesRequest.getTipo()
        ));
        instituicoesRepository.save(new Instituicoes(
                instituicoesRequest.getNome(),
                instituicoesRequest.getLocalizacao(),
                instituicoesRequest.getConcelho(),
                instituicoesRequest.getFuncao(),
                user
        ));

        return user;
    }

    @Transactional
    public void updateInstituicoes(Long instituicoesId,
                                   String nome,
                                   String concelho) {
        Instituicoes instituicoes = instituicoesRepository.findById(instituicoesId)
                .orElseThrow(() -> new IllegalStateException(
                        "Familias com id " + instituicoesId + " não existe"
                ));
        if (nome != null &&
                nome.length() > 0 &&
                !Objects.equals(instituicoes.getNome(), nome)) {
            instituicoes.setNome(nome);
        }
        if (concelho != null &&
                concelho.length() > 0 &&
                !Objects.equals(instituicoes.getConcelho(), concelho)) {
            instituicoes.setConcelho(concelho);
        }
    }
}
