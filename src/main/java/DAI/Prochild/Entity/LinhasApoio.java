package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
public class LinhasApoio {
    @Id
    @SequenceGenerator(
            name = "linhasapoio_sequence",
            sequenceName = "linhasapoio_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "linhasapoio_sequence"
    )

    private Long id;
    private String nome;
    @Column(columnDefinition = "LONGBLOB")
    private String imagem;
    private Long contacto;

    public LinhasApoio() {
    }

    public LinhasApoio(Long id, String nome, String imagem, Long contacto) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.contacto = contacto;
    }

    public LinhasApoio(String nome, String imagem, Long contacto) {
        this.nome = nome;
        this.imagem = imagem;
        this.contacto = contacto;
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

    public Long getContacto() {
        return contacto;
    }

    public void setContacto(Long contacto) {
        this.contacto = contacto;
    }

    @Override
    public String toString() {
        return "LinhasApoio{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", imagem=" + imagem +
                ", contacto=" + contacto +
                '}';
    }
}
