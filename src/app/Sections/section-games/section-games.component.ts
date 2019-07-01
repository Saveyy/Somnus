import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/game'


@Component({
  selector: 'app-section-games',
  templateUrl: './section-games.component.html',
  styleUrls: ['./section-games.component.css']
})
export class SectionGamesComponent implements OnInit {

  constructor() { }

  games: Game[] = [
    {
      id: 1,
      name: 'Backgammon',
      player1: { id: 1, name: 'Mads', points: 880},
      player2: { id: 2, name: 'Flow', points: 460}
    },
    {
      id: 2,
      name: 'Kasino',
      player1: { id: 1, name: 'Mads', points: 45 },
      player2: { id: 2, name: 'Flow', points: 40 }
    },
    {
      id: 3,
      name: 'Settlers of Catan',
      player1: { id: 1, name: 'Mads', points: 20 },
      player2: { id: 2, name: 'Flow', points: 200 }
    },
    {
      id: 4,
      name: 'Yatzy',
      player1: { id: 1, name: 'Mads', points: 50 },
      player2: { id: 2, name: 'Flow', points: 50 }
    }
  ];


  ngOnInit() {
  }

}
