import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interface/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  heroes:Heroes[] = [];

  constructor( private heroesService:HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getListadoHeroes()
    .subscribe( heroes => this.heroes = heroes );
  }
}
