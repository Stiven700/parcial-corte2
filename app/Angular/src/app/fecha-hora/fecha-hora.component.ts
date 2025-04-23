import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fecha-hora',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './fecha-hora.component.html',
  styleUrls: ['./fecha-hora.component.scss']
})
export class FechaHoraComponent implements OnInit {
  fechaHoraForm!: FormGroup;
  minDate: string = new Date().toISOString();
  mostrarCalendario: boolean = false;

  horasDisponibles: string[] = [
    '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00',
    '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fechaHoraForm = this.fb.group({
      fecha: [''],
      hora: ['']
    });
  }

  abrirSelectorFecha() {
    this.mostrarCalendario = true;
  }

  cerrarSelectorFecha() {
    this.mostrarCalendario = false;
  }

  seleccionarFecha(event: any) {
    const fecha = event.detail.value;
    this.fechaHoraForm.patchValue({ fecha });
  }

  // ✅ Método que el padre puede usar para obtener los datos
  getDatosFechaHora() {
    return this.fechaHoraForm.value;
  }

  // ✅ Puedes agregar este si quieres que el padre valide:
  esValido(): boolean {
    return this.fechaHoraForm.valid;
  }
}
