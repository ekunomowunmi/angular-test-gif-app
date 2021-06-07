import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [
    { path: 'result-detail/:id', component: ResultDetailComponent },
    {path:'results',component:ResultsComponent},
    {path:'' , component:ResultsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
