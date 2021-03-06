package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
public class Jogos {
    @Id
    @SequenceGenerator(
            name = "jogos_sequence",
            sequenceName = "jogos_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "jogos_sequence"
    )

    private Long id;
    private String nome;
    @Column(columnDefinition = "LONGBLOB")
    private String imagem;
    private String descricao;
    private String regras;
    private String video;

    public Jogos() {
    }

    public Jogos(Long id, String nome, String imagem, String descricao, String regras) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
    }

    public Jogos(String nome, String imagem, String descricao, String regras) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
    }


    public Jogos(Long id, String nome, String imagem, String descricao, String regras, String video) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
        this.video = video;
    }

    public Jogos(String nome, String imagem, String descricao, String regras, String video) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
        this.video = video;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getRegras() {
        return regras;
    }

    public void setRegras(String regras) {
        this.regras = regras;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    @Override
    public String toString() {
        return "Jogos{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", imagem=" + imagem +
                ", descricao='" + descricao + '\'' +
                ", regras='" + regras + '\'' +
                ", video='" + video + '\'' +
                '}';
    }
}
