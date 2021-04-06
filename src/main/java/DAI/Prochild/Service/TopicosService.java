package DAI.Prochild.Service;

import DAI.Prochild.Entity.Denuncias;
import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Entity.Topicos;
import DAI.Prochild.Repository.TopicosRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicosService {

    private final TopicosRepository topicosRepository;

    @Autowired
    public TopicosService(TopicosRepository topicosRepository) {
        this.topicosRepository = topicosRepository;
    }

    public List<Topicos> getTopicos() {
        return topicosRepository.findAll();
    }

    public Optional<Topicos> getOneTopicos(Long topicosId) {
        boolean exists = topicosRepository.existsById(topicosId);
        if (!exists) {
            throw new IllegalStateException("Tópico com id " + topicosId + " não existe");
        }

        return topicosRepository.findById(topicosId);
    }

    public void addNewTopicos(Topicos topicos) {
        Optional<Topicos> topicosByNome =
                topicosRepository.findTopicosByNome(topicos.getNome());
        if (topicosByNome.isPresent()) {
            throw new IllegalStateException("Este Tópico já existe");
        }

        topicosRepository.save(topicos);
    }

    public void deleteTopicos(Long id) {
        boolean exists = topicosRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Tópico " + id + " não existe");
        }

        topicosRepository.deleteById(id);
    }

}
