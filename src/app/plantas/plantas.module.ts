import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from '../plantas/component/lista/planta.component';
import { PlantaDetalleComponent } from './component/detalle/plantaDetalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantaComponent, PlantaDetalleComponent]
})
export class PlantasModule { }
