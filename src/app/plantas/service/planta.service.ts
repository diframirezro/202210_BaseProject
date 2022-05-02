import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../modelo/planta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  getAllPlantas(): Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl);
}
}
