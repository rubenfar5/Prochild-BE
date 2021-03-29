package DAI.Prochild.Request;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.Date;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class DenunciasRequest {
    private final String sexo;
    private final String faixa_etaria;
    private final String localizacao;
    private String acontecimento;
}
