import { Player } from './Player';

export interface Game {
    id: number;
    name: string;
    player1: Player;
    player2: Player;
}