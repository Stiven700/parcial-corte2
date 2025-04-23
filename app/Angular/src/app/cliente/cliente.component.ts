import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from './Cliente';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      primerApellido: ['', [Validators.required, Validators.minLength(3)]],
      segundoApellido: [''],
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      telefono: ['', [Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {}

  // Método para obtener los datos del cliente si el formulario es válido
  getDatosCliente(): Cliente | null {
    if (this.clienteForm.valid) {
      return this.clienteForm.value;
    }
    return null;
  }
  esValido(): boolean {
    return this.clienteForm.valid;
  }
  
}
