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

  /** Entfernung zwischen KA und aktuellem Aufenthaltsort laut Ortung (z.B. GPS) in km. */
  private _entfernungKilometer : number = 0.0;

  /** Geografische Breite aktueller Aufenthaltsort (Nord/Süd). */
  private _geoBreite : number = 0.0;

  /** Geografische Länge aktueller Aufenthaltsort (Ost/West). */
  private _geoLaenge : number = 0.0;


  //constructor() {}


  setEntfernungKilometer(entfernung: number) {

    this._entfernungKilometer = entfernung;
  }


  getEntfernungKilometer() : number {

    return this._entfernungKilometer;
  }


  setAktuelleKoordinaten(geoBreite: number, geoLaenge: number) {

    this._geoBreite = geoBreite;
    this._geoLaenge = geoLaenge;
  }


  /**
   * Getter für Absolut-Wert geografische Breite.
   *
   * @return Geografische Breite ohne Vorzeichen, weil für Nord/Süd gibt es Methode getNordOderSued().
   */
  getAktuelleGeoBreiteAbs() : number {

    return Math.abs( this._geoBreite );
  }


  /**
   *  Getter für Absolut-Wert geografische Länge.
   *
   * @return Geografische Länge ohne Vorzeichen, weil für Unterscheidung Ost/West gibt es Methode getOstOderWest().
   */
  getAktuelleGeoLaengeAbs() : number {

    return Math.abs( this._geoLaenge );
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
