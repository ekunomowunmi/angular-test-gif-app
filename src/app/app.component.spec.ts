import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Mock } from 'protractor/built/driverProviders';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MockAppService } from './mocks/app.service.mock';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsComponent } from './results/results.component';
import { SearchFieldComponent } from './search-field/search-field.component';

describe('AppComponent', () => {
    let appService: AppService;
    let searchComponent:SearchFieldComponent;
    let http:HttpClient;
    let testBedService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserModule
      ],
      declarations: [
        AppComponent,
        ResultsListComponent,
        ResultsComponent,
        ResultDetailComponent,
        SearchFieldComponent
      ],
      providers:[{provide: AppService, useClass:MockAppService}]
    }).compileComponents();
    appService = new AppService(http);
    testBedService = TestBed.get(AppService)
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gif-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('gif-app');
  });

  it('should confirm injected service',()=>{
    inject([AppService], (injectService: AppService) => {
        expect(injectService).toBe(testBedService);
      })
  })

});
