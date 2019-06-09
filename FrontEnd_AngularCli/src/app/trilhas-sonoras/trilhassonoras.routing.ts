import { Routes, RouterModule } from '@angular/router'
import { TrilhasonoraListComponent } from './trilhasonora-list/trilhasonora-list.component';
import { TrilhasonoraFormComponent } from './trilhasonora-form/trilhasonora-form.component';
import { TrilhasonoraCrudComponent } from './trilhasonora-crud/trilhasonora-crud.component';

const TRILHAS_ROUTES: Routes = [
    { path: '', component: TrilhasonoraCrudComponent },
    { path: ':id', component: TrilhasonoraCrudComponent }

];
export const trilhassonorasRouting = RouterModule.forChild(TRILHAS_ROUTES);  