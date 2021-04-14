package DAI.Prochild.Service;

import DAI.Prochild.Entity.Topicos;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.InstituicoesRepository;
import DAI.Prochild.Repository.TopicosRepository;
import DAI.Prochild.Repository.UsersRepository;
import DAI.Prochild.Request.TopicosRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicosService {

    private final TopicosRepository topicosRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public TopicosService(TopicosRepository topicosRepository, InstituicoesRepository instituicoesRepository, UsersRepository usersRepository) {
        this.topicosRepository = topicosRepository;
        this.usersRepository = usersRepository;
    }

    public List<Topicos> getTopicos() {
        return topicosRepository.findAll();
    }

    public Optional<Topicos> getOneTopicos(Long topicosId) {
        boolean exists = topicosRepository.existsById(topicosId);
        if (!exists) {
            throw new IllegalStateException("Topico com id " + topicosId + " não existe");
        }

        return topicosRepository.findById(topicosId);
    }

    public void addNewTopicos(TopicosRequest topicosRequest) {
        Optional<Topicos> topicosByNome =
                topicosRepository.findTopicosByNome(topicosRequest.getNome());
        if (topicosByNome.isPresent()) {
            throw new IllegalStateException("Este Tópico já existe");
        }
        boolean exists = usersRepository.existsById(topicosRequest.getUsersId());
        if (!exists) {
            throw new IllegalStateException("User com id " + topicosRequest.getUsersId() + " não existe");
        }
        Users user = usersRepository.findById(topicosRequest.getUsersId()).get();


        topicosRepository.save(new Topicos(
                topicosRequest.getNome(),
                topicosRequest.getDescricao(),
                user
        ));
    }

    public void deleteTopicos(Long id) {
        boolean exists = topicosRepository.existsById(id);
        if (!exists) {
            throw new IllegalStateException("Topico" + id + " não existe");
        }

        topicosRepository.deleteById(id);
    }

    public void addNewTopicosChild(TopicosRequest topicos) {
        Optional<Topicos> topicosByNome =
                topicosRepository.findTopicosByNome(topicos.getNome());
        if (topicosByNome.isPresent()) {
            throw new IllegalStateException("Este Tópico já existe");
        }

        topicosRepository.save(new Topicos(
                topicos.getNome(),
                topicos.getDescricao()
        ));
    }
}
