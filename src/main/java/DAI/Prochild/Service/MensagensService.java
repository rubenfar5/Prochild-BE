package DAI.Prochild.Service;

import DAI.Prochild.Entity.Mensagens;
import DAI.Prochild.Repository.MensagensRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MensagensService {

    private final MensagensRepository mensagensRepository;

    @Autowired
    public MensagensService(MensagensRepository mensagensRepository) {
        this.mensagensRepository = mensagensRepository;
    }

    public void addNewMensagem(Mensagens mensagens) {
    }

    public List<Mensagens> getMensagens() {
        return mensagensRepository.findAll();
    }

    public void deleteMensagens(Long mensagensId) {
        boolean exists = mensagensRepository.existsById(mensagensId);
        if (!exists) {
            throw new IllegalStateException("Mensagem" + mensagensId + " não existe");
        }

        mensagensRepository.deleteById(mensagensId);
    }
}
