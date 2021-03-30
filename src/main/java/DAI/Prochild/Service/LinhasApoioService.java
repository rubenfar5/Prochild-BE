package DAI.Prochild.Service;

import DAI.Prochild.Entity.LinhasApoio;
import DAI.Prochild.Repository.LinhasApoioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinhasApoioService {

    private final LinhasApoioRepository linhasApoioRepository;

    @Autowired
    public LinhasApoioService(LinhasApoioRepository linhasApoioRepository) {
        this.linhasApoioRepository = linhasApoioRepository;
    }

    public List<LinhasApoio> getLinhasApoio() {
        return  linhasApoioRepository.findAll();
    }

    public void addNewLinhasApoio(LinhasApoio linhasApoio) {
        linhasApoioRepository.save(linhasApoio);
    }

    public void deleteLinhas(Long linhasId) {
        boolean exists = linhasApoioRepository.existsById(linhasId);
        if (!exists) {
            throw new IllegalStateException("Linha de Apoio com id " + linhasId + " não existe");
        }

        linhasApoioRepository.deleteById(linhasId);
    }
}
