import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
  images = new Array<any>();


  // http: HttpCl
  //&q=sphinx&limit=25&offset=0&rating=Y&lang=en'

  getImagesFromText(query, limit){
      const url = `${this.baseUrl}&q=${query}&limit=${limit}&offset=0&rating=Y&lang=en`;
      return this.http.get(url);

  }
}
