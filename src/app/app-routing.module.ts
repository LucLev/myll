import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NewInfoComponent } from './new-info/new-info.component';
import { StatsComponent } from './stats/stats.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { ButtonsTypeComponent } from './buttons-type/buttons-type.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: NewInfoComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'buttonstype', component: ButtonsTypeComponent},
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

