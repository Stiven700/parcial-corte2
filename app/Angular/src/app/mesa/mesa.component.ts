import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  imports: [CommonModule, IonicModule],
  styleUrls: ['./mesa.component.scss'],
})
export class MesaComponent implements OnInit {
  mesas = [
    { id: 1, numero: 1, disponible: true, capacidad: 4 },
    { id: 2, numero: 2, disponible: false, capacidad: 2 },
    { id: 3, numero: 3, disponible: true, capacidad: 6 },
    { id: 4, numero: 4, disponible: true, capacidad: 2 },
  ];

  selectedMesa: any;

  constructor() {}

  ngOnInit() {}

  selectMesa(mesa: any) {
    if (mesa.disponible) {
      this.selectedMesa = mesa;
    } else {
      alert('Esta mesa no está disponible');
    }
  }

  getMesaSeleccionada() {
    return this.selectedMesa;
  }

  marcarMesaComoNoDisponible() {
    if (this.selectedMesa) {
      this.selectedMesa.disponible = false;
    }
  }
}
