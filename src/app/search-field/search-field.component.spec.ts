import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MockAppService } from '../mocks/app.service.mock';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let appService:MockAppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, HttpClientTestingModule],
      declarations: [ SearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all image souces by parameter',() => {
    let imageObjs :Object={
        data: [
            {
                id:'a1',
                title: 'slug'
            },
            {
                id:'a2',
                title: 'slugitude'
            },
            {
                id:'a3',
                title: 'slugatorn'
            },
        ],
      pagination:{
          total_count:364,
          count:25
      }
    };
    let spyObj = jasmine.createSpy('getImagesFromText').and.callFake(() =>{
        return of(imageObjs)
    });
    console.log(spyObj)
    component.name = 'a1';
    component.searchImage();
    // expect(spyObj).toHaveBeenCalledWith("a1",10);
});
});
