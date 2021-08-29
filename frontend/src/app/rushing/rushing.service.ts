import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RushingModel } from "../model/rushing.model";

@Injectable()
export class RushingService {
    constructor(private http: HttpClient) { }

    public getRushing(): Observable<RushingModel[]> {
        return this.http.get<RushingModel[]>('api/rushings/');
      }
}