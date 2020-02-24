import { Component, OnInit } from '@angular/core';
import { ErgebnisService } from '../ergebnis.service';

@Component({
  selector: 'app-ergebnis',
  templateUrl: './ergebnis.page.html',
  styleUrls: ['./ergebnis.page.scss'],
})
export class ErgebnisPage {

  constructor(private ergService : ErgebnisService) {
  }

}
