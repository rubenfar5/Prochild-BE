package DAI.Prochild.Registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String username;
    private final String email;
    private final String password;
    private final String tipo;
    private final String nome;
    private final String sexo;
    private final String localizacao;
    private final String concelho;
}
