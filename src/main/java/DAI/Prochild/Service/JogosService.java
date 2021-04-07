package DAI.Prochild.Service;

import DAI.Prochild.Entity.Jogos;
import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Repository.JogosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JogosService {

    private final JogosRepository jogosRepository;

    @Autowired
    public JogosService(JogosRepository jogosRepository) {
        this.jogosRepository = jogosRepository;
    }

    public List<Jogos> getJogos() {
        return jogosRepository.findAll();
    }

    public void addNewJogos(Jogos jogos) {
        Optional<Jogos> jogosByNome =
                jogosRepository.findJogosByNome(jogos.getNome());
        if (jogosByNome.isPresent()) {
            throw new IllegalStateException("Este jogo já existe");
        }

        jogosRepository.save(jogos);
    }

    public void deleteJogos(Long jogosId) {
        boolean exists = jogosRepository.existsById(jogosId);
        if (!exists) {
            throw new IllegalStateException("Jogo com id " + jogosId + " não existe");
        }

        jogosRepository.deleteById(jogosId);
    }

    public Jogos getOneImagem(Long jogosID) {
        boolean existis = jogosRepository.existsById(jogosID);
        if (!existis) {
            throw new IllegalStateException("Jogo com id " + jogosID + " não existe");
        }

        return jogosRepository.findById(jogosID).get();
    }

}
