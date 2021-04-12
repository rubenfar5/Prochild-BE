package DAI.Prochild.Entity;

import javax.persistence.*;

@Entity
public class Familias {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "familias_sequence"
    )
    @SequenceGenerator(
            name = "familias_sequence",
            sequenceName = "familias_sequence",
            allocationSize = 1
    )
    private Long id;
    private String nome;
    private String sexo;
    private String concelho;
    @OneToOne
    @JoinColumn(name = "usersId")
    private Users usersId;

    public Familias() {
    }

    public Familias(Long id, String nome, String sexo, String concelho, Users usersId) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.concelho = concelho;
        this.usersId = usersId;
    }

    public Familias(String nome, String sexo, String concelho, Users usersId) {
        this.nome = nome;
        this.sexo = sexo;
        this.concelho = concelho;
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

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
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

    @Override
    public String toString() {
        return "Familias{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", concelho='" + concelho + '\'' +
                ", usersId=" + usersId +
                '}';
    }
}
