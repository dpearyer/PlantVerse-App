import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Observable } from "rxjs";
import { PlantInterface } from "./plant.interface";

@Injectable()
export class PlantService{
    constructor(private http:HttpClient){}
    getPlants(): Observable<PlantInterface[]>{
        return this.http.get<PlantInterface[]>(
            'https://perenual.com/api/species-list?page=1&key=sk-5KAd64e7d42c60da01977?title_like=${searchValue}'
                );
            }
        }