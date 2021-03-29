package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table
public class Direitos {
    @Id
    @SequenceGenerator(
            name = "direitos_sequence",
            sequenceName = "direitos_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "direitos_sequence"
    )

    private Long id;
    private String descricao;
    private byte[] imagem;
    private byte[] audio;

    public Direitos() {
    }

    public Direitos(Long id, String descricao, byte[] imagem, byte[] audio) {
        this.id = id;
        this.descricao = descricao;
        this.imagem = imagem;
        this.audio = audio;
    }

    public Direitos(String descricao, byte[] imagem, byte[] audio) {
        this.descricao = descricao;
        this.imagem = imagem;
        this.audio = audio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }

    public byte[] getAudio() {
        return audio;
    }

    public void setAudio(byte[] audio) {
        this.audio = audio;
    }

    @Override
    public String toString() {
        return "Direitos{" +
                "id=" + id +
                ", descricao='" + descricao + '\'' +
                ", imagem=" + Arrays.toString(imagem) +
                ", audio=" + Arrays.toString(audio) +
                '}';
    }
}
