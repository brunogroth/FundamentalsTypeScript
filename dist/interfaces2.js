"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Localization {
    constructor(la, lg) {
        this.latitude = la;
        this.longitude = lg;
    }
    getLocation(address) {
        return {
            lat: this.latitude,
            long: this.longitude,
        };
    }
}
const getLocation = (location) => {
    return `${location.latitude} ${location.longitude}`;
};
let location = new Localization(123, 321);
console.log(getLocation(location));
