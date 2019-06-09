import { Routes, RouterModule } from '@angular/router'
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaFormComponent } from './artista-form/artista-form.component';
import { ArtistaCrudComponent } from './artista-crud/artista-crud.component';

const ARTISTAS_ROUTES: Routes = [
    { path: '', component: ArtistaCrudComponent },
    { path: ':id', component: ArtistaCrudComponent }

];
export const artistasRouting = RouterModule.forChild(ARTISTAS_ROUTES);  