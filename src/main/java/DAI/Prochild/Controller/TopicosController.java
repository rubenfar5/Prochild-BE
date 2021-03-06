package DAI.Prochild.Controller;

import DAI.Prochild.Entity.Topicos;
import DAI.Prochild.Request.TopicosRequest;
import DAI.Prochild.Service.TopicosService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "prochild/topicos")
@CrossOrigin(maxAge = 3600)
@AllArgsConstructor
public class TopicosController {

    private final TopicosService topicosService;

    @PostMapping
    public void postTopicos(@RequestBody TopicosRequest topicos){
        topicosService.addNewTopicos(topicos);
    }

    @PostMapping(path = "{child}")
    public void postTopicosChild(@RequestBody TopicosRequest topicos){
        topicosService.addNewTopicosChild(topicos);
    }

    @GetMapping
    public List<Topicos> getTopicos() {
        return topicosService.getTopicos();
    }

    @GetMapping(path = "{topicosId}")
    public Optional<Topicos> getOneTopico(@PathVariable ("topicosId") Long topicosId) {
        return topicosService.getOneTopicos(topicosId);
    }

    @DeleteMapping(path = "{topicosId}")
    public void deleteTopicos(@PathVariable("topicosId") Long topicosId) {
        topicosService.deleteTopicos(topicosId);
    }
}
