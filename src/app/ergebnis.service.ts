import { Injectable } from '@angular/core';

/**
 * Service für Übertragung Ergebnis von Home- auf Ergebnis-Seite.
 *
 * Diese Service-Klasse wurde mit folgendem Befehl erzeugt: ionic generate service Ergebnis
 *
 * Einbinden dieses Service in eine Page-Datei: import { ErgebnisServiceService } from '../ergebnis-service.service';
 */
@Injectable({
  providedIn: 'root'
})
export class ErgebnisService {

  private _entfernungKilometer : Number = 0.0;


  constructor() {}


  setEntfernungKilometer(entfernung: Number) {

    this._entfernungKilometer = entfernung;
  }


  getEntfernungKilometer() : Number {

    return this._entfernungKilometer;
  }

}
