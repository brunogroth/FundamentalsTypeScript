interface LocationMapInterface {
  readonly latitude: number;
  longitude: number;
}

const getLocation = (location: LocationMapInterface): string => {
  return `${location.latitude} ${location.longitude}`;
};

const getLocationAsLocationMapInterface = (
  receivedLatitude: number,
  receivedLongitude: number
): LocationMapInterface => {
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

const location2: LocationMapInterface = {
  latitude: 123,
  longitude: 321,
  //test: 333, // não permite pois não é um atributo da interface
};

console.log(getLocation(location2));

console.log(
  getLocationAsLocationMapInterface(location.latitude, location.longitude)
);

export {};
