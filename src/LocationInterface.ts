// Contrato (DTO)
interface ILocation {
  readonly id: number;
  latitude: number;
  longitude: number;
}

const getLocation = (location: ILocation): string => {
  location.latitude;

  return `Real time Latitude: ${location.latitude} | Real time Longitude: ${location.longitude}`;
};

const currentLocation: ILocation = {
  id: 1,
  latitude: 8.34843854,
  longitude: 6.28342823,
};

getLocation(currentLocation);

// Viewable Object
class LocationMap implements ILocation {
  id: number;
  latitude: number;
  longitude: number;

  constructor(id: number, latitude: number, longitude: number) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
export {};
