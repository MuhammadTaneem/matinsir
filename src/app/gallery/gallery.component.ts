import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  images: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.images = this.route.snapshot.data.data[4];
  }
}
