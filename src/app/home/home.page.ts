import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, NavController } from '@ionic/angular';
import { ErgebnisService } from '../ergebnis.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Geographische Breite von KA (nördlich, also positives Vorzeichen). */
  readonly GEO_BREITE_KA = 49.014;

  /** Geographische Länge von KA (östlich, also positives Vorzeichen). */
  readonly GEO_LAENGE_KA = 8.4043;


  /**
   * Konstruktor für Dependency Injection.
   */
  constructor( private ergService : ErgebnisService,
               private geolocation: Geolocation    ,
               private alertCtrl  : AlertController,
               private navCtrl    : NavController    ) {
  }


  /**
   * Event-Handler-Methode für Button "Entfernung zu KA berechnen".
   * Zur Verwendung von Geolocation mit Android siehe auch den folgenden Blog-Artikel von Ionic:
   * https://ionicframework.com/blog/testing-geolocation-on-android/
   * Es wird empfohlen, einen Timeout-Wert von 30000ms (=30s) zu setzen.
   */
  async onEntfernungBerechnenButton() {

    console.log("Ortung angefordert ...");

    this.geolocation.getCurrentPosition({ timeout: 30000 }).then( (ergebnisObjekt) => {

      let geoBreite = ergebnisObjekt.coords.latitude;
      let geoLaenge = ergebnisObjekt.coords.longitude;

      console.log(`geoBreite=${geoBreite}, geoLaenge=${geoLaenge}`);

      let entfernungKilometer =
          this.berechneEntfernung( this.GEO_BREITE_KA, this.GEO_LAENGE_KA,
                                   geoBreite,          geoLaenge
                                 );

      console.log(`Entfernung zu KA: ${entfernungKilometer} km`);

      entfernungKilometer = this.kommastellenAbschneiden( Number(entfernungKilometer), 2);

      this.ergService.setEntfernungKilometer( entfernungKilometer  );
      this.ergService.setAktuelleKoordinaten( geoBreite, geoLaenge );

      this.navCtrl.navigateForward("/ergebnis");

     }).catch( (fehlerObjekt) => {

      let fehlerString = `${fehlerObjekt.constructor.name}: ${fehlerObjekt.message} (Error code: ${fehlerObjekt.code})`;

      console.log("Fehler bei Ortungsabfrage:", fehlerString);
      this.zeigeDialog("Fehler bei Ortung"    , fehlerString);
    });
  }


  /**
   * Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   */
  async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({ header  : titel,
                                        message : nachricht,
                                        buttons : [ "Ok" ]
                                      });
    await meinAlert.present();
  }


  /**
   * Berechnung der Entfernung zwischen zwei geographischen Koordinaten (Dezimalkoordinaten!),
   * sog. "Harversine Formula".
   *
   * Breitengrad: Positives Vorzeichen für nördlich, negativ für südlich.
   * Längengrad : Postives  Vorzeichen für östlich , negativ für westlich.
   *
   * Quelle: https://stackoverflow.com/a/52211669/1364368
   *
   * @param lat1  Breitengrad Koordinate 1 (N/S)
   *
   * @param lon1  Längengrad Koordinate 1 (W/O)
   *
   * @param lat2  Breitengrad Koordinate 2 (N/S)
   *
   * @param lon2  Längengrad Koordinate 2 (W/O)
   *
   * @return  Entfernung in Kilometern
   */
  berechneEntfernung(lat1:number, lon1:number, lat2:number, lon2:number) : number {

      let radlat1 = Math.PI * lat1/180;
      let radlat2 = Math.PI * lat2/180;

      let theta    = lon1 - lon2;
      let radtheta = Math.PI * theta/180;

      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

      dist = Math.acos(dist);

      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;

      dist = dist * 1.609344; // Ziel-Einheit: km

      return dist;
  }


  /**
   * Hilfs-Methode zum Abschneiden von Nachkomma-Stellen
   * nach https://stackoverflow.com/a/9232092
   *
   * @param number  Dezimalzahl
   *
   * @param nachkommastellen  Anzahl Nachkommastellen, die übrig bleiben soll.
   */
  kommastellenAbschneiden(zahl: number, nachkommastellen: number): number {

    let faktor = Math.pow(10, nachkommastellen);

    let zahlMalFaktor = zahl * faktor;

    let zahlAbgeschnitten = 0.0;

    if ( zahlMalFaktor < 0 ) {

      zahlAbgeschnitten = Math.ceil(zahlMalFaktor);

    } else {

      zahlAbgeschnitten = Math.floor(zahlMalFaktor);
    }

    return zahlAbgeschnitten / faktor;
  }

}
