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

  private _geoBreite : Number = 0.0;

  private _geoLaenge : Number = 0.0;


  //constructor() {}


  setEntfernungKilometer(entfernung: Number) {

    this._entfernungKilometer = entfernung;
  }


  getEntfernungKilometer() : Number {

    return this._entfernungKilometer;
  }


  setAktuelleKoordinaten(geoBreite: Number, geoLaenge: Number) {

    this._geoBreite = geoBreite;
    this._geoLaenge = geoLaenge;
  }


  getAktuelleGeoBreite() : Number {

    return this._geoBreite;
  }


  getAktuelleGeoLaenge() : Number {

    return this._geoLaenge;
  }


  getNordOderSued() : string {

    if (this._geoBreite > 0.0) {

      return "Nord";

    } else {

      return "Süd";
    }
  }


  getOstOderWest() : string {

    if (this._geoLaenge > 0.0) {

      return "Ost";

    } else {

      return "West";
    }
  }

}
