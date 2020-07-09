import React, { useEffect, useState } from 'react';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    try {
      const granted = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.LOCATION
      );
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
      // console.log('granted', location);
      if (!granted) return;
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
