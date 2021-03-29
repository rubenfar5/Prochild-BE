package DAI.Prochild.Entity;

import javax.persistence.*;

@Entity
public class Instituicoes {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "instituicoes_sequence"
    )
    @SequenceGenerator(
            name = "instituicoes_sequence",
            sequenceName = "instituicoes_sequence",
            allocationSize = 1
    )
    private Long id;
    private String nome;
    private String localizacao;
    private String concelho;
    private String funcao;
    @OneToOne
    @JoinColumn(name = "usersId")
    private Users usersId;

    public Instituicoes() {
    }

    public Instituicoes(Long id, String nome, String localizacao, String concelho, String funcao, Users usersId) {
        this.id = id;
        this.nome = nome;
        this.localizacao = localizacao;
        this.concelho = concelho;
        this.funcao = funcao;
        this.usersId = usersId;
    }

    public Instituicoes(String nome, String localizacao, String concelho, String funcao, Users usersId) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.concelho = concelho;
        this.funcao = funcao;
        this.usersId = usersId;
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

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getConcelho() {
        return concelho;
    }

    public void setConcelho(String concelho) {
        this.concelho = concelho;
    }

    public Users getUsersId() {
        return usersId;
    }

    public void setUsersId(Users usersId) {
        this.usersId = usersId;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    @Override
    public String toString() {
        return "Instituicoes{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", localizacao='" + localizacao + '\'' +
                ", concelho='" + concelho + '\'' +
                ", funcao='" + funcao + '\'' +
                ", usersId=" + usersId +
                '}';
    }
}
