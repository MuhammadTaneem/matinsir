import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  reserarch: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.reserarch = this.route.snapshot.data.data[3];
  }
}
