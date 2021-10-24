import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  work: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.work = this.route.snapshot.data.data[2];
  }
}
