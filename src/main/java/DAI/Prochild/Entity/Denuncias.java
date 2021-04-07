package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Denuncias {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "denuncias_sequence"
    )
    @SequenceGenerator(
            name = "denuncias_sequence",
            sequenceName = "denuncias_sequence",
            allocationSize = 1
    )
    private Long id;
    private String localizacao;
    private Date data;
    private String acontecimento;
    @OneToOne
    @JoinColumn(name = "criancasId")
    private Criancas criancasId;

    public Denuncias() {
    }

    public Denuncias(Long id, String localizacao, String acontecimento, Criancas criancasId) {
        this.id = id;
        this.localizacao = localizacao;
        this.data = new Date();
        this.acontecimento = acontecimento;
        this.criancasId = criancasId;
    }

    public Denuncias(String localizacao, String acontecimento, Criancas criancasId) {
        this.localizacao = localizacao;
        this.data= new Date();
        this.acontecimento = acontecimento;
        this.criancasId = criancasId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getAcontecimento() {
        return acontecimento;
    }

    public void setAcontecimento(String acontecimento) {
        this.acontecimento = acontecimento;
    }

    public Criancas getCriancasId() {
        return criancasId;
    }

    public void setCriancasId(Criancas criancasId) {
        this.criancasId = criancasId;
    }

    @Override
    public String toString() {
        return "Denuncias{" +
                "id=" + id +
                ", localizacao='" + localizacao + '\'' +
                ", data=" + data +
                ", acontecimento='" + acontecimento + '\'' +
                ", criancasId=" + criancasId +
                '}';
    }
}
