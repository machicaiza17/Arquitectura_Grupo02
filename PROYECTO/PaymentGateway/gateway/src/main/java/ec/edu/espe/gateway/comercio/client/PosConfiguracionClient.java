package ec.edu.espe.gateway.comercio.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import ec.edu.espe.gateway.comercio.controller.dto.Configuracion;

@FeignClient(name = "pos-configuracion", url = "http://3.137.216.14")
public interface PosConfiguracionClient {
    @PostMapping("/api/pos-configuracion/sincronizar")
    void enviarConfiguracion(@RequestBody Configuracion configuracion);
}