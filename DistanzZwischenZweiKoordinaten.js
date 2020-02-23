


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
function entfernung(lat1, lon1, lat2, lon2) { "use strict";

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


/*
 * Mannheim  : 49.483611°, 8.463056° ( https://de.wikipedia.org/wiki/Mannheim   )
 * Heidelberg: 49.412222°, 8.71°     ( https://de.wikipedia.org/wiki/Heidelberg )
 *
 * Koordinaten stehen jeweils rechts oben; bei Klick auf die Koordinaten wird zu einer GeoHack-
 * Seite weitergeleitet, die die Dezimalkoordinaten anzeigt.
 */

let km1 = entfernung( 49.483611, 8.463056, 49.412222, 8.71 );
console.log(`Entfernung MA-HD: ${km1} km`);

/*
 * Mannheim  : 49.483611°, 8.463056° ( https://de.wikipedia.org/wiki/Mannheim   )
 * Karlsruhe : 49.014°   , 8.4043° ( https://de.wikipedia.org/wiki/Karlsruhe )
 */
let km2 = entfernung( 49.483611, 8.463056, 49.014, 8.4043 );
console.log(`Entfernung MA-KA: ${km2} km`);

/*
 * Brandenburger Tor, Berlin:  52.5164  , 13.3777
 * Tejo Brücke, Lissabon    :  38.692668, -9.177944
 *
 * https://www.kompf.de/gps/distcalc.html
 */
let km3 = entfernung( 52.5164, 13.3777, 38.692668, -9.177944 );
console.log(`Entfernung Berlin-Lissabon: ${km3} km`);
