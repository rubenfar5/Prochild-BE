package DAI.Prochild.Request;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class TopicosRequest {
    private final String nome;
    private final String descricao;
    private final Long idInstituicao;
}
