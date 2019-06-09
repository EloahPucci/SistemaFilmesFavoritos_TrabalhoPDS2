import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrilhasonoraListComponent } from './trilhasonora-list/trilhasonora-list.component';
import { trilhassonorasRouting } from './trilhassonoras.routing';
import { FormsModule } from '@angular/forms';
import { TrilhasSonorasService } from './trilhas-sonoras.service';
import { TrilhasonoraFormComponent } from './trilhasonora-form/trilhasonora-form.component';
import { TrilhasonoraCrudComponent } from './trilhasonora-crud/trilhasonora-crud.component';

@NgModule({
  imports: [
    CommonModule, trilhassonorasRouting, FormsModule
  ],
  declarations: [TrilhasonoraListComponent, TrilhasonoraFormComponent, TrilhasonoraCrudComponent],
  providers: [TrilhasSonorasService]
})
export class TrilhasSonorasModule { }
