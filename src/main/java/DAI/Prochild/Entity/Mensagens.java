package DAI.Prochild.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Mensagens {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mensagens_sequence"
    )
    @SequenceGenerator(
            name = "mensagens_sequence",
            sequenceName = "mensagens_sequence",
            allocationSize = 1
    )
    private Long id;
    private Date data;
    private String conteudo;
    @OneToOne
    @JoinColumn(name = "usersId")
    private Users usersId;
    @OneToOne
    @JoinColumn(name = "topicosId")
    private Topicos topicosId;

    public Mensagens() {
    }

    public Mensagens(Long id, String conteudo, Users usersId, Topicos topicosId) {
        this.id = id;
        this.data = new Date();
        this.conteudo = conteudo;
        this.usersId = usersId;
        this.topicosId = topicosId;
    }

    public Mensagens(String conteudo, Users usersId, Topicos topicosId) {
        this.data = new Date();
        this.conteudo = conteudo;
        this.usersId = usersId;
        this.topicosId = topicosId;
    }

    public Mensagens(String conteudo, Topicos topicosId) {
        this.data = new Date();
        this.conteudo = conteudo;
        this.topicosId = topicosId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Users getUsersId() {
        return usersId;
    }

    public void setUsersId(Users usersId) {
        this.usersId = usersId;
    }

    public Topicos getTopicosId() {
        return topicosId;
    }

    public void setTopicosId(Topicos topicosId) {
        this.topicosId = topicosId;
    }

    @Override
    public String toString() {
        return "Mensagens{" +
                "id=" + id +
                ", data=" + data +
                ", conteudo='" + conteudo + '\'' +
                ", usersId=" + usersId +
                ", topicosId=" + topicosId +
                '}';
    }
}
