import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

=======
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewInfoComponent } from './new-info/new-info.component';
import { StatsComponent } from './stats/stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceService } from './my-service.service';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { ButtonsTypeComponent } from './buttons-type/buttons-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewInfoComponent,
    StatsComponent,
    FormulaireComponent,
    HeaderComponent,
    FooterComponent,
    ButtonsTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
