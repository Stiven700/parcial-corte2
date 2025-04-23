import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Importar el módulo completo
import { CommonModule } from '@angular/common'; // Este sigue siendo necesario
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],  // Solo importa IonicModule y CommonModule
})
export class HomePage {
  constructor() {}
}
