import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.scss']
})
export class KontoComponent implements OnInit {

  stand: string = "1315,57";

  constructor() { }

  ngOnInit(): void {
  }

  getKontostand(): string {
    return this.stand.toString();
  }

  getRecentActivity(): string {
    return '';
  }

}
