import { Component, OnInit } from '@angular/core';
import { TrilhaSonora } from '../trilha-sonora';
import { TrilhasSonorasService } from '../trilhas-sonoras.service';

@Component({
  selector: 'app-trilhasonora-list',
  templateUrl: './trilhasonora-list.component.html',
  styleUrls: ['./trilhasonora-list.component.css']
})
export class TrilhasonoraListComponent implements OnInit {

  constructor(private trilhaSonoraService: TrilhasSonorasService) { }

  trilhas_sonoras: TrilhaSonora[] = [];

  ngOnInit() {

    this.trilhaSonoraService.getAll()
    .subscribe(data => this.trilhas_sonoras = data,
      err => alert('Aconteceu um erro (TRILHASONORA-LIST.COMPONENT.TS)! ' + err)
    );

    this.trilhaSonoraService.trilhasChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.trilhas_sonoras = data
      )
    );

  //   this.trilhas_sonoras = [{
  //     'codigo': 1,
  //     'nomeMusica': 'Totally fine',
  //     'artistaInterprete': 'Alan Silvestri',
  //     'filme': 'Vingadores - Ultimato'
  //   },
  //   {
  //     'codigo': 2,
  //     'nomeMusica': 'Home',
  //     'artistaInterprete': 'Michael Bublé',
  //     'filme': 'Muito bem acompanhada'
  //   },
  //   {
  //     'codigo': 3,
  //     'nomeMusica': 'A thousand miles',
  //     'artistaInterprete': 'Vanessa Carlton',
  //     'filme': 'As Branquelas'
  //   }
  // ];
  }
}
