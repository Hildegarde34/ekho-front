import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ConcertComponent } from './pages/concerts/concert/concert.component';
import { ConcertsListComponent } from './pages/concerts/concerts-list/concerts-list.component';
import { PressComponent } from './pages/presse/press/press.component';
import { PressListComponent } from './pages/presse/press-list/press-list.component';
import { EnsembleComponent } from './pages/vocalEnsemble/ensemble/ensemble.component';
import { ChoirMasterComponent } from './pages/vocalEnsemble/choir-master/choir-master.component';
import { MediasComponent } from './pages/allMedias/medias/medias.component';
import { RecordingsComponent } from './pages/allMedias/recordings/recordings.component';
import { VideosComponent } from './pages/allMedias/videos/videos.component';
import { PicsComponent } from './pages/allMedias/pics/pics.component';
import { ByConcertComponent } from './pages/allMedias/by-concert/by-concert.component';
import { GuestBookComponent } from './pages/guest-book/guest-book.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RecruitmentComponent } from './pages/vocalEnsemble/recruitment/recruitment.component';
import { PhilanthropyComponent } from './pages/philanthropy/philanthropy.component';
import { MembersComponent } from './pages/vocalEnsemble/members/members.component';
import { MainMenuComponent } from './pageComponents/main-menu/main-menu.component';
import { SideBarComponent } from './pageComponents/side-bar/side-bar.component';
import { FooterComponent } from './pageComponents/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeMainMenuComponent } from './pageComponents/home-main-menu/home-main-menu.component';

const routes: Routes = 
[
  // PAGES

      // Home
  {path: '', component: HomeComponent},

      // Concerts
  {path: 'concert', component: ConcertComponent},
  {path: 'concertList', component: ConcertsListComponent},

      // All Medias
  {path: 'mediasbyConcert', component: ByConcertComponent},
  {path: 'medias', component: MediasComponent},
  {path: 'pics', component: PicsComponent},
  {path: 'recordings', component: RecordingsComponent},
  {path: 'videos', component: VideosComponent},

      // Press
  {path: 'press', component: PressComponent},
  {path: 'pressList', component: PressListComponent},

      // Vocal ensemble
  {path: 'choirMaster', component: ChoirMasterComponent},
  {path: 'ensemble', component: EnsembleComponent},
  {path: 'members', component: MembersComponent}, // à voir
  {path: 'recruitment', component: RecruitmentComponent},
     
      // Contact
  {path: 'contact', component: ContactComponent},

      // Guest-book
  {path: 'guestBook', component: GuestBookComponent},
  
      // Philanthropy
  {path: 'phylanthropy', component: PhilanthropyComponent}

]; 

@NgModule({
  declarations: [
    AppComponent,
    ConcertComponent,
    ConcertsListComponent,
    PressComponent,
    PressListComponent,
    EnsembleComponent,
    ChoirMasterComponent,
    MediasComponent,
    RecordingsComponent,
    VideosComponent,
    PicsComponent,
    ByConcertComponent,
    GuestBookComponent,
    ContactComponent,
    RecruitmentComponent,
    PhilanthropyComponent,
    MembersComponent,
    MainMenuComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    HomeMainMenuComponent
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

