import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  contact_data: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.contact_data = this.route.snapshot.data.data[0][0];
  }
}
