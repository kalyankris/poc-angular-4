import { Component, OnInit } from '@angular/core';
import { PixaSericeService } from '../../shared/pixa-serice.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  imagesArrayList: any;
  searchQuery;
  constructor(private _pixaSericeService: PixaSericeService) { }

  ngOnInit() {
  }

  searchImage(query: string) {
    if (query === undefined) {
      alert('enter text');
    } else {
      return this._pixaSericeService.getImages(query).subscribe(
        data => this.imagesArrayList = data.hits
    );
    }
  }

}
