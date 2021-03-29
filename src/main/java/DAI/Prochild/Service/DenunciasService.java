package DAI.Prochild.Service;

import DAI.Prochild.Entity.Criancas;
import DAI.Prochild.Entity.Denuncias;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.DenunciasRepository;
import DAI.Prochild.Request.DenunciasRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class DenunciasService {

    private final CriancasService criancasService;
    private final DenunciasRepository denunciasRepository;

    public List<Denuncias> getDenuncias() {
        return denunciasRepository.findAll();
    }

    public Optional<Denuncias> getOneDenuncia(Long denunciasId) {
        boolean exists = denunciasRepository.existsById(denunciasId);
        if (!exists) {
            throw new IllegalStateException("Denuncia com id " + denunciasId + " não existe");
        }

        return denunciasRepository.findById(denunciasId);
    }

    public void addNewDenuncias(DenunciasRequest denunciasRequest) {
        Criancas criancas = criancasService.addNewCriancas(new Criancas(
                denunciasRequest.getSexo(),
                denunciasRequest.getFaixa_etaria(),
                denunciasRequest.getLocalizacao()
        ));
        denunciasRepository.save(new Denuncias(
                denunciasRequest.getLocalizacao(),
                denunciasRequest.getAcontecimento(),
                criancas
        ));
    }

    public void deleteDenuncias(Long denunciasId) {
        boolean exists = denunciasRepository.existsById(denunciasId);
        if (!exists) {
            throw new IllegalStateException("Denuncia com id " + denunciasId + " não existe");
        }
        denunciasRepository.deleteById(denunciasId);
    }
}
