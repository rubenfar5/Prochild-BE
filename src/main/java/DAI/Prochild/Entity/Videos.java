package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
public class Videos {
    @Id
    @SequenceGenerator(
            name = "videos_sequence",
            sequenceName = "videos_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "videos_sequence"
    )
    private Long id;
    private String nome;
    private String descricao;
    private String link;
    private byte[] thumbnail;

    public Videos() {
    }

    public Videos(Long id, String nome, String descricao, String link, byte[] thumbnail) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
        this.thumbnail = thumbnail;
    }

    public Videos(String nome, String descricao, String link, byte[] thumbnail) {
        this.nome = nome;
        this.descricao = descricao;
        this.link = link;
        this.thumbnail = thumbnail;
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

    public byte[] getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(byte[] thumbnail) {
        this.thumbnail = thumbnail;
    }

    @Override
    public String toString() {
        return "Videos{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", link='" + link + '\'' +
                ", thumbnail=" + Arrays.toString(thumbnail) +
                '}';
    }
}
