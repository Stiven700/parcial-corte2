import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReservaService } from '../reservas/reserva.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-reservas',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.scss']
})
export class ListaReservasComponent implements OnInit, OnDestroy {
  reservas: any[] = [];
  private sub!: Subscription;

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    this.sub = this.reservaService.reservas$.subscribe(reservas => {
      this.reservas = reservas;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
