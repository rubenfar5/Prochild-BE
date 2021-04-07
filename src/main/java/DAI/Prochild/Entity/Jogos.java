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
    private byte[] imagem;
    private String descricao;
    private String regras;

    public Jogos() {
    }

    public Jogos(Long id, String nome, byte[] imagem, String descricao, String regras) {
        this.id = id;
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
    }

    public Jogos(String nome, byte[] imagem, String descricao, String regras) {
        this.nome = nome;
        this.imagem = imagem;
        this.descricao = descricao;
        this.regras = regras;
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

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
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

    @Override
    public String toString() {
        return "Jogos{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", imagem=" + Arrays.toString(imagem) +
                ", descricao='" + descricao + '\'' +
                ", regras='" + regras + '\'' +
                '}';
    }
}
