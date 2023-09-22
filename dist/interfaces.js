"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getLocation = (location) => {
    return `${location.latitude} ${location.longitude}`;
};
const getLocationAsLocationMapInterface = (receivedLatitude, receivedLongitude) => {
    return {
        latitude: receivedLatitude,
        longitude: receivedLongitude,
    };
};
const location = {
    latitude: 123,
    longitude: 321,
    test: 333, // permite pois não é a implementação da interface
};
console.log(getLocation(location));
getLocation(location);
const location2 = {
    latitude: 123,
    longitude: 321,
    //test: 333, // não permite pois não é um atributo da interface
};
console.log(getLocation(location2));
console.log(getLocationAsLocationMapInterface(location.latitude, location.longitude));
