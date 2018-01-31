import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PixaSericeService {

   PIXA_KEY: string = environment.PIXBAY_KEY;
   PIXA_URL: string = environment.PIXABAY_URL;
   URL: string  =  this.PIXA_URL + this.PIXA_KEY + '&q=';
   private perPage: string = '&per_page=10';

  constructor(private _http: Http) { }

  getImages(query: string) {
    return this._http.get(this.URL + query + this.perPage).map(
      response => response.json()
    );
  }

}
