package DAI.Prochild.Request;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class InstituicoesRequest {
    private final String username;
    private final String password;
    private final String email;
    private final String tipo;
    private final String nome;
    private final String localizacao;
    private final String concelho;
    private final String funcao;

}
