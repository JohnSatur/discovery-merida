import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomComponent } from './pages/room/room.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

/**
 * Definición de rutas de la aplicación
 */
export const routes: Routes = [
    { path: '', redirectTo: 'es-MX', pathMatch: 'full'},
    { path: ':lang', component: HomeComponent },
    { path: ':lang/about', component: AboutComponent },
    { path: ':lang/rooms', component: RoomsComponent },
    { path: ':lang/room/:slug', component: RoomComponent },
    { path: ':lang/contact', component: ContactComponent },
    { path: ':lang/privacy', component: PrivacyComponent },
    { path: ':lang/cookies', component: CookiesComponent },
    { path: ':lang/404', component: NotFoundComponent },
    { path: '**', redirectTo: '/es-MX/404', pathMatch: 'full'},
];
