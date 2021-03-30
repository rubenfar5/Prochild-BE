package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Videos;
import DAI.Prochild.Service.VideosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "prochild/videos")
public class VideosController {

    private final VideosService videosService;

    @Autowired
    public VideosController(VideosService videosService) {
        this.videosService = videosService;
    }

    @GetMapping
    public List<Videos> getVideos() {
        return videosService.getVideos();
    }

    @PostMapping
    public void postVideos(@RequestBody Videos videos) {
        videosService.addNewVideos(videos);
    }

    @DeleteMapping(path = "{videosId}")
    public void deleteVideos(@PathVariable("videosId") Long videosId) {
        videosService.deleteVideos(videosId);
    }
}
