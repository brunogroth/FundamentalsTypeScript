interface LocationInterface {
  readonly latitude: number;
  longitude?: number;

  // método - assinatura - tipo de retorno (objeto com lat e long) - não é necessário criar um objeto pra tipar o retorno
  getLocation: (address: string) => {
    lat: number;
    long?: number;
  };
}

class Localization implements LocationInterface {
  readonly latitude: number;
  longitude?: number | undefined;

  constructor(la: number, lg?: number) {
    this.latitude = la;
    this.longitude = lg;
  }

  getLocation(address: string): { lat: number; long?: number } {
    return {
      lat: this.latitude,
      long: this.longitude,
    };
  }
}

const getLocation = (location: LocationInterface): string => {
  return `${location.latitude} ${location.longitude}`;
};

let location = new Localization(123, 321);

console.log(getLocation(location));

export {};
