import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return forkJoin([
      this.dataService.getPersonalInfo(),
      this.dataService.getEducation(),
      this.dataService.getWork(),
      this.dataService.getResearch(),
      this.dataService.getGallery(),
    ]);
  }
}
