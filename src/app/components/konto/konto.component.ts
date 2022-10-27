import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.scss']
})
export class KontoComponent implements OnInit {

  stand: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }

  getKontostand(): string {
    return this.stand.toString();
  }

}
