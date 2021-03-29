package DAI.Prochild.Service;

import DAI.Prochild.Entity.Criancas;
import DAI.Prochild.Repository.CriancasRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CriancasService {

    private final CriancasRepository criancasRepository;

    public List<Criancas> getCriancas() {
        return criancasRepository.findAll();
    }

    public Optional<Criancas> getOneCrianca(Long criancasId) {
        boolean exists = criancasRepository.existsById(criancasId);
        if (!exists) {
            throw new IllegalStateException("Criança com id " + criancasId + " não existe");
        }

        return  criancasRepository.findById(criancasId);
    }

    public Criancas addNewCriancas(Criancas criancas) {
        return criancasRepository.save(criancas);
    }

    public void deleteCriancas(Long criancasID) {
        boolean exists = criancasRepository.existsById(criancasID);

        if (!exists) {
            throw new IllegalStateException("Criança com id " + criancasID + " não existe");
        }

        criancasRepository.deleteById(criancasID);
    }
}
