import { DataResolver } from './../data.resolver';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  personal_data: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.personal_data = this.route.snapshot.data.data[0][0];
  }
}
