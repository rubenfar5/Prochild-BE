package DAI.Prochild.Entity;

import javax.persistence.*;

@Entity
@Table
public class Topicos {
    @Id
    @SequenceGenerator(
            name = "topicos_sequence",
            sequenceName = "topicos_sequence",
            allocationSize = 1
    )
    @GeneratedValue (
            strategy = GenerationType.SEQUENCE,
            generator = "topicos_sequence"
    )

    private Long id;
    private String nome;
    private String descricao;
    @OneToOne
    @JoinColumn(name = "instituicoesId")
    private Instituicoes instituicoesId;

    public Topicos() {
    }

    public Topicos(Long id, String nome, String descricao, Instituicoes instituicoesId) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.instituicoesId = instituicoesId;
    }

    public Topicos(String nome, String descricao, Instituicoes instituicoesId) {
        this.nome = nome;
        this.descricao = descricao;
        this.instituicoesId = instituicoesId;
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

    public Instituicoes getInstituicoesId() {
        return instituicoesId;
    }

    public void setInstituicoesId(Instituicoes instituicoesId) {
        this.instituicoesId = instituicoesId;
    }

    @Override
    public String toString() {
        return "Topicos{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", instituicoesId=" + instituicoesId +
                '}';
    }
}
