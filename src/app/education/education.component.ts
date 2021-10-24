import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  education: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.education = this.route.snapshot.data.data[1];
  }
}
