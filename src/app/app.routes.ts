import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomComponent } from './pages/room/room.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'room/:slug', component: RoomComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: '**', redirectTo: ''},

    // { path: '', redirectTo: 'es-MX', pathMatch: 'full'},
    // { path: ':lang', component: HomeComponent },
    // { path: ':lang/about', component: AboutComponent },
    // { path: ':lang/rooms', component: RoomsComponent },
    // { path: ':lang/room/:slug', component: RoomComponent },
    // { path: ':lang/contact', component: ContactComponent },
];
