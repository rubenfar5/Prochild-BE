package DAI.Prochild.Service;

import DAI.Prochild.Entity.Livros;
import DAI.Prochild.Repository.LivrosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivrosService {
    private final LivrosRepository livrosRepository;

    @Autowired
    public LivrosService(LivrosRepository livrosRepository) {
        this.livrosRepository = livrosRepository;
    }

    public List<Livros> getLivros() {
        return livrosRepository.findAll();
    }

    public Livros getOneCapa(Long livrosId) {
        boolean exists = livrosRepository.existsById(livrosId);
        if (!exists) {
            throw new IllegalStateException("Livro com id " + livrosId + " não existe");
        }

        return livrosRepository.findById(livrosId).get();
    }

    public void addNewLivros(Livros livros) {
        Optional<Livros> livrosByNome =
                livrosRepository.findLivrosByNome(livros.getNome());
        if (livrosByNome.isPresent()) {
            throw new IllegalStateException("Este livro já existe");
        }
        livrosRepository.save(livros);
    }

    public void deleteLivros(Long livrosId) {
        boolean exists = livrosRepository.existsById(livrosId);
        if (!exists) {
            throw new IllegalStateException("Livro com id " + livrosId + " não existe");
        }

        livrosRepository.deleteById(livrosId);
    }
}
