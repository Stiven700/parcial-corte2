import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ClienteComponent } from '../cliente/cliente.component';
import { FechaHoraComponent } from '../fecha-hora/fecha-hora.component';
import { MesaComponent } from '../mesa/mesa.component';
import { ReservaService } from '../reservas/reserva.service'; // ✅ Servicio importado

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ClienteComponent,
    FechaHoraComponent,
    MesaComponent
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  @ViewChild(ClienteComponent) clienteComponent!: ClienteComponent;
  @ViewChild(FechaHoraComponent) fechaHoraComponent!: FechaHoraComponent;
  @ViewChild(MesaComponent) mesaComponent!: MesaComponent;

  constructor(
    private toastController: ToastController,
    private reservaService: ReservaService // ✅ Inyectamos el servicio
  ) {}

  confirmarReserva() {
    const cliente = this.clienteComponent.getDatosCliente();
    const fechaHora = this.fechaHoraComponent.getDatosFechaHora();
    const mesa = this.mesaComponent.getMesaSeleccionada();

    const formularioValido = cliente !== null && this.fechaHoraComponent.esValido() && mesa;

    if (!formularioValido) {
      this.presentToast('Por favor completa todos los campos y selecciona una mesa.');
      return;
    }

    const reserva = {
      cliente,
      fecha: fechaHora.fecha,
      hora: fechaHora.hora,
      mesa
    };

    this.mesaComponent.marcarMesaComoNoDisponible();
    this.reservaService.agregarReserva(reserva); // ✅ Guardamos en el servicio

    console.log('Reserva confirmada:', reserva);
    this.presentToast('Reserva confirmada exitosamente ✅');

    // Resetear formularios y selección
    this.clienteComponent.clienteForm.reset();
    this.fechaHoraComponent.fechaHoraForm.reset();
    this.mesaComponent.selectedMesa = null;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}
