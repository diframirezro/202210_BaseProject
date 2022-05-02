import { Component, OnInit } from '@angular/core';
import { Planta } from '../../modelo/planta';
import { PlantaService } from '../../service/planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {
  plantas: Array<Planta> =[];
  constructor(private plantaService: PlantaService) { }


  getPlantas() {
    this.plantaService.getAllPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
