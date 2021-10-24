import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const BACKEND_URL = environment.api + 'api/';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPersonalInfo() {
    return this.http.get<{}>(BACKEND_URL + 'profile/');
  }
  getEducation() {
    return this.http.get<{}>(BACKEND_URL + 'personal/education/');
  }
  getWork() {
    return this.http.get<{}>(BACKEND_URL + 'personal/work/');
  }
  getResearch() {
    return this.http.get<{}>(BACKEND_URL + 'personal/research/');
  }
  getGallery() {
    return this.http.get<{}>(BACKEND_URL + 'personal/gallery/');
  }
}
