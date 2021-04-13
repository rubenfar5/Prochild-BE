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
    @JoinColumn(name = "usersId")
    private Users usersId;

    public Topicos() {
    }

    public Topicos(Long id, String nome, String descricao, Users usersId) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.usersId = usersId;
    }

    public Topicos(String nome, String descricao, Users usersId) {
        this.nome = nome;
        this.descricao = descricao;
        this.usersId = usersId;
    }

    public Topicos(String nome, String descricao) {
        this.nome = nome;
        this.descricao = descricao;
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

    public Users getUsersId() {
        return usersId;
    }

    public void setUsersId(Users usersId) {
        this.usersId = usersId;
    }

    @Override
    public String toString() {
        return "Topicos{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", usersId=" + usersId +
                '}';
    }
}
