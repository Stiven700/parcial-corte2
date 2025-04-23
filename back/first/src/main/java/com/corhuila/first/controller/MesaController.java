package com.corhuila.first.controller;

import com.corhuila.first.entity.Mesa;
import com.corhuila.first.service.MesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mesas")
public class MesaController {

    @Autowired
    private MesaService mesaService;

    @GetMapping
    public List<Mesa> obtenerTodas() {
        return mesaService.obtenerTodas();
    }

    @GetMapping("/{id}")
    public Optional<Mesa> obtenerPorId(@PathVariable Long id) {
        return mesaService.obtenerPorId(id);
    }

    @PostMapping
    public Mesa guardar(@RequestBody Mesa mesa) {
        return mesaService.guardar(mesa);
    }

    @PutMapping("/{id}")
    public Mesa actualizar(@PathVariable Long id, @RequestBody Mesa mesa) {
        mesa.setId(id);
        return mesaService.guardar(mesa);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        mesaService.eliminar(id);
    }
}
