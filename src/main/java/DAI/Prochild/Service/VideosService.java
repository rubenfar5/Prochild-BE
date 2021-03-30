package DAI.Prochild.Service;

import DAI.Prochild.Entity.Videos;
import DAI.Prochild.Repository.VideosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VideosService {

    private final VideosRepository videosRepository;

    @Autowired
    public VideosService(VideosRepository videosRepository) {
        this.videosRepository = videosRepository;
    }

    public List<Videos> getVideos() {
        return videosRepository.findAll();
    }

    public void addNewVideos(Videos videos) {
        Optional<Videos> videosByNome =
                videosRepository.findVideosByNome(videos.getNome());
        if (videosByNome.isPresent()) {
            throw new IllegalStateException("Este video já existe");
        }

        videosRepository.save(videos);
    }

    public void deleteVideos(Long videosId) {
        boolean exists = videosRepository.existsById(videosId);
        if (!exists) {
            throw new IllegalStateException("Video com id " + videosId + " não existe");
        }

        videosRepository.deleteById(videosId);
    }
}
