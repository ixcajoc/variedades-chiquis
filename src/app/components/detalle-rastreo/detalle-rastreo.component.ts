import {Component, inject} from '@angular/core';

import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-detalle-rastreo',
  standalone: true,
  imports: [
    TimelineModule, 
    CardModule, 
    ButtonModule,
    CommonModule 
  ],
  templateUrl: './detalle-rastreo.component.html',
  styles: `
    
  `
  
  
})

export default class DetalleRastreoComponent {
  events: EventItem[];

  constructor() {
    this.events = [
        { status: 'Ordenado', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'En proceso', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Enviado', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Entregado', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
}
  



}
