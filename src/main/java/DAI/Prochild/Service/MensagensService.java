package DAI.Prochild.Service;

import DAI.Prochild.Entity.Mensagens;
import DAI.Prochild.Entity.Topicos;
import DAI.Prochild.Entity.Users;
import DAI.Prochild.Repository.MensagensRepository;
import DAI.Prochild.Repository.TopicosRepository;
import DAI.Prochild.Repository.UsersRepository;
import DAI.Prochild.Request.MensagensRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MensagensService {

    private final MensagensRepository mensagensRepository;
    private final UsersRepository usersRepository;
    private final TopicosRepository topicosRepository;

    @Autowired
    public MensagensService(MensagensRepository mensagensRepository, UsersRepository usersRepository, TopicosRepository topicosRepository) {
        this.mensagensRepository = mensagensRepository;
        this.usersRepository = usersRepository;
        this.topicosRepository = topicosRepository;
    }

    public void addNewMensagem(MensagensRequest mensagens) {
        Users user = usersRepository.findById(mensagens.getUsersId()).get();
        Topicos topico = topicosRepository.findById(mensagens.getTopicosId()).get();

        mensagensRepository.save(new Mensagens(
                mensagens.getConteudo(),
                user,
                topico
        ));
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

    public void addNewMensagemChild(MensagensRequest mensagens) {
        Topicos topico = topicosRepository.findById(mensagens.getTopicosId()).get();

        mensagensRepository.save(new Mensagens(
                mensagens.getConteudo(),
                topico
        ));
    }
}
