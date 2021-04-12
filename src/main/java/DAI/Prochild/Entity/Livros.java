package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
public class Livros {
    @Id
    @SequenceGenerator(
            name = "users_sequence",
            sequenceName = "users_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "users_sequence"
    )
    private Long id;
    private String nome;
    private String descricao;
    @Column(columnDefinition = "LONGBLOB")
    private String link;
    @Column(columnDefinition = "LONGBLOB")
    private String capa;
    private String video;

    public Livros() {
    }

    public Livros(Long id, String nome, String descricao, String link, String capa, String video) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
        this.capa = capa;
        this.video = video;
    }

    public Livros(String nome, String descricao, String link, String capa, String video) {
        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
        this.capa = capa;
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getCapa() {
        return capa;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    @Override
    public String toString() {
        return "Livros{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", link='" + link + '\'' +
                ", capa='" + capa + '\'' +
                ", video='" + video + '\'' +
                '}';
    }
}
