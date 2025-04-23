import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private reservasSubject = new BehaviorSubject<any[]>(this.cargarReservas());
  reservas$ = this.reservasSubject.asObservable();

  agregarReserva(reserva: any) {
    const reservasActuales = this.reservasSubject.getValue();
    const nuevasReservas = [...reservasActuales, reserva];
    this.reservasSubject.next(nuevasReservas);
    this.guardarReservas(nuevasReservas);
  }

  limpiarReservas() {
    this.reservasSubject.next([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  private guardarReservas(reservas: any[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas));
  }

  private cargarReservas(): any[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  getReservas(): any[] {
    return this.reservasSubject.getValue();
  }
}
