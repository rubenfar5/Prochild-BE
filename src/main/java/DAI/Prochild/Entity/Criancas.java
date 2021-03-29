package DAI.Prochild.Entity;

import javax.persistence.*;

@Entity
public class Criancas {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "criancas_sequence"
    )
    @SequenceGenerator(
            name = "criancas_sequence",
            sequenceName = "criancas_sequence",
            allocationSize = 1
    )
    private Long id;
    private String sexo;
    private String faixa_etaria;
    private String localizacao;

    public Criancas() {
    }

    public Criancas(Long id, String sexo, String faixa_etaria, String localizacao) {
        this.id = id;
        this.sexo = sexo;
        this.faixa_etaria = faixa_etaria;
        this.localizacao = localizacao;
    }

    public Criancas(String sexo, String faixa_etaria, String localizacao) {
        this.sexo = sexo;
        this.faixa_etaria = faixa_etaria;
        this.localizacao = localizacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFaixa_etaria() {
        return faixa_etaria;
    }

    public void setFaixa_etaria(String faixa_etaria) {
        this.faixa_etaria = faixa_etaria;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }


    @Override
    public String toString() {
        return "Criancas{" +
                "id=" + id +
                ", sexo='" + sexo + '\'' +
                ", faixa_etaria='" + faixa_etaria + '\'' +
                ", localizacao='" + localizacao +
                '}';
    }
}
