package DAI.Prochild.Request;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class MensagensRequest {
    private final String conteudo;
    private final Long usersId;
    private final Long topicosId;
}
