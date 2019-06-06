import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NewInfoComponent } from './new-info/new-info.component';
import { StatsComponent } from './stats/stats.component';
import { FooterComponent } from './footer/footer.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: NewInfoComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'footer', component: FooterComponent},
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

