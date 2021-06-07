import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mock } from 'protractor/built/driverProviders';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { MockAppService } from './mocks/app.service.mock';
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
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
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
