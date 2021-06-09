import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../app.service';
import { MockAppService } from '../mocks/app.service.mock';
import { SearchFieldComponent } from '../search-field/search-field.component';

import { ResultsComponent } from './results.component';
import {MockComponent} from 'ng-mocks'
import { ResultsListComponent } from '../results-list/results-list.component';
import { FormsModule } from '@angular/forms';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let childFixture: ComponentFixture<ResultsListComponent>;
  let childComponent: ResultsListComponent

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent,SearchFieldComponent , MockComponent(ResultsListComponent)],
      providers:[{provide: AppService, useClass:MockAppService}],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    // childComponent = childFixture.componentInstance;
    // childComponent.results = [{images:{preview_gif:{url:'something'}}}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
