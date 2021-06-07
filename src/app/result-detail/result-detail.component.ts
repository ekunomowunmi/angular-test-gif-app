import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {
    results = new Array<any>();
    resultid: any;
    result: any;
  constructor(private route:ActivatedRoute, private appService: AppService, private router:Router) { }

  ngOnInit() {
this.resultid =   this.route.snapshot.params['id'];
this.results = this.appService.images.filter(result => result.id == this.resultid);

if(this.results.length > 0){
       this.result = this.results[0];
    console.log(this.results);
}
else{
    this.router.navigate([''])

}


  }

}
