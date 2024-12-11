package ec.edu.espe.pos.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "POS_SEGURIDAD_GATEWAY")
public class PosSeguridadGateway implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COD_CLAVE_GATEWAY", nullable = false)
    private Integer codigo;

    @Column(name = "CLAVE", length = 128, nullable = false)
    private String clave;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "FECHA_ACTUALIZACION", nullable = false)
    private Date fechaActualizacion;

    @Temporal(TemporalType.DATE)
    @Column(name = "FECHA_ACTIVACION", nullable = false)
    private Date fechaActivacion;

    @Column(name = "ESTADO", length = 3, nullable = false)
    private String estado;

    public PosSeguridadGateway() {
    }

    public PosSeguridadGateway(Integer codigo) {
        this.codigo = codigo;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public Date getFechaActualizacion() {
        return fechaActualizacion;
    }

    public void setFechaActualizacion(Date fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }

    public Date getFechaActivacion() {
        return fechaActivacion;
    }

    public void setFechaActivacion(Date fechaActivacion) {
        this.fechaActivacion = fechaActivacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        PosSeguridadGateway other = (PosSeguridadGateway) obj;
        if (codigo == null) {
            if (other.codigo != null)
                return false;
        } else if (!codigo.equals(other.codigo))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "PosSeguridadGateway{" +
                "codigo=" + codigo +
                ", clave='" + clave + '\'' +
                ", fechaActualizacion=" + fechaActualizacion +
                ", fechaActivacion=" + fechaActivacion +
                ", estado='" + estado + '\'' +
                '}';
    }
}