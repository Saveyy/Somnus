import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: true },
  { id: 2, name: 'dev-mail', isOnline: true },
  { id: 3, name: 'prod-web', isOnline: false },
  { id: 4, name: 'prod-mail', isOnline: true }
];

@Component({
  selector: 'app-section-temp2',
  templateUrl: './section-temp2.component.html',
  styleUrls: ['./section-temp2.component.css']
})
export class SectionTemp2Component implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
