import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = '';
    constructor(private appService: AppService) {
    }

    ngOnInit() {
    }

    searchImage(){
this.appService.getImagesFromText(this.name,25).subscribe((res:any) => {
    console.log(res);
    this.appService.images = res.data;
})
    }
}
