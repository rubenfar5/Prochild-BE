package DAI.Prochild.Service;

import DAI.Prochild.Entity.Familias;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.FamiliasRepository;
import DAI.Prochild.Request.FamiliasRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FamiliasService {

    private final UsersService usersService;
    private final FamiliasRepository familiasRepository;

    public List<Familias> getFamilias() {
        return familiasRepository.findAll();
    }


    public Users addNewFamilias(FamiliasRequest familiasRequest) {

       Users user = usersService.addNewUsers(new Users(
               familiasRequest.getUsername(),
               familiasRequest.getEmail(),
               familiasRequest.getPassword(),
               familiasRequest.getTipo()
        ));

        familiasRepository.save(new Familias(
                familiasRequest.getNome(),
                familiasRequest.getSexo(),
                familiasRequest.getLocalizacao(),
                familiasRequest.getConcelho(),
                user
        ));

        return user;
    }

    public void deleteFamilias(Long id) {
    }

    @Transactional
    public void updateFamilias(Long familiasId,
                               String nome,
                               String concelho) {
        Familias familias = familiasRepository.findById(familiasId)
                .orElseThrow(() -> new IllegalStateException(
                        "Familias com id " + familiasId + " não existe"
                ));
        if (nome != null &&
                nome.length() > 0 &&
                !Objects.equals(familias.getNome(), nome)) {
            familias.setNome(nome);
        }
        if (concelho != null &&
                concelho.length() > 0 &&
                !Objects.equals(familias.getConcelho(), concelho)) {
            familias.setConcelho(concelho);
        }
    }
}
