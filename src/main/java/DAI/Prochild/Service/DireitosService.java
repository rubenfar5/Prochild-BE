package DAI.Prochild.Service;

import DAI.Prochild.Entity.Direitos;
import DAI.Prochild.Repository.DireitosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DireitosService {

    private final DireitosRepository direitosRepository;

    @Autowired
    public DireitosService(DireitosRepository direitosRepository) {
        this.direitosRepository = direitosRepository;
    }

    public List<Direitos> getDireitos() {
        return direitosRepository.findAll();
    }

    public void addNewDireitos(Direitos direitos) {
        direitosRepository.save(direitos);
    }

    public void deleteDireitos(Long direitosId) {
        boolean exists = direitosRepository.existsById(direitosId);
        if (!exists) {
            throw new IllegalStateException("Direito com id " + direitosId + " não existe");
        }

        direitosRepository.deleteById(direitosId);
    }

    public Direitos getOneImagem(Long direitosId) {
        boolean exists = direitosRepository.existsById(direitosId);
        if (!exists) {
            throw new IllegalStateException("Direito com id " + direitosId + " não existe");
        }

        return direitosRepository.findById(direitosId).get();
    }
}
