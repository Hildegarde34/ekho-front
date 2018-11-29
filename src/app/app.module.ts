import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertComponent } from './concerts/concert/concert.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { ConcertsListComponent } from './concerts/concerts-list/concerts-list.component';
import { PressComponent } from './presse/press/press.component';
import { PressListComponent } from './presse/press-list/press-list.component';
import { EnsembleComponent } from './vocalEnsemble/ensemble/ensemble.component';

const routes: Routes = 
[
  {path: 'concert', component: ConcertComponent},
]; 

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    ConcertsListComponent,
    PressComponent,
    PressListComponent,
    EnsembleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

