import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login-guard';
import { LoginComponent } from './login/login/login.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'filmes',
        loadChildren: 'app/filmes/filmes.module#FilmesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'artistas',
        loadChildren: 'app/artistas/artistas.module#ArtistasModule'
    },
    {
        path: 'trilhas',
        loadChildren: 'app/trilhas-sonoras/trilhas-sonoras.module#TrilhasSonorasModule'
    }

];
export const RoutingModule = RouterModule.forRoot(routes);