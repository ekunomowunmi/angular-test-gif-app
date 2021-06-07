import { tick } from '@angular/core/src/render3';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {  Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {  routes } from '../app-routing.module';
import { Location } from "@angular/common";

import { ResultsListComponent } from './results-list.component';
import { ResultDetailComponent } from '../result-detail/result-detail.component';
import { FormsModule } from '@angular/forms';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;
  let router: Router;
  let location: Location;
  let routee;
  let routerSpy: jasmine.SpyObj<Router>;;


  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router',['navigateByUrl'])
    TestBed.configureTestingModule({
      declarations: [ ResultsListComponent,ResultDetailComponent ],
      imports:[RouterTestingModule,FormsModule]
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
     routee = RouterTestingModule.withRoutes(routes)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should expect results to be defined',()=>{
      component.results = [{abc:'defined'}]
      expect(component.results).toBeDefined();
  })
  it('fakeAsync works',fakeAsync(()=>{
    //   let promise = new Promise(resolve => {setTimeout(resolve,1);});
    //   let done = false;
    //   promise.then(()=> (done = true));
    //   tick(50);
    //   expect(done).toBeTruthy();
  }))
//   it('viewdetail should navigate you to detail', fakeAsync(() => {
//       let id = ':id';
//       let expectedPath = `/result-detail/${id}`
//       let actualPath = routerSpy.navigateByUrl.calls.first().args;
//       expect(actualPath).toBe(expectedPath, 'must navigate to the detail view for the top hero');
//     //   router.navigateByUrl(`/result-detail/${id}`).then(() => {
//     //     //   expect(location.path()).toBe(`/result-detail/${id}`)
//     //   });

//   }))
});
