import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

    @Input('results') results : any[];

  constructor(private router:Router) { }

  ngOnInit() {
      console.log('ada',this.results);
  }

  viewDetail(result){
      this.router.navigate([`./result-detail/${result.id}`])

  }

}
