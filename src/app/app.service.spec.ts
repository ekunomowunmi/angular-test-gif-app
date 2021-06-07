import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { AppService } from './app.service';

describe('AppService', () => {
    let testBedService
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports:[HttpClientTestingModule]

  });
    testBedService = TestBed.get(HttpClientTestingModule)

});
  it('should confirm injected service',()=>{
    inject([HttpClient], (injectService: HttpClient) => {
        expect(injectService).toBe(testBedService);
      })
  })
  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});
