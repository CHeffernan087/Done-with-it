import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
	const [location, setLocation] = useState(null);

	const getLocation = async () => {
		try {
			const { granted } = await Location.requestPermissionsAsync();
			if (!granted) {
				console.log("Location access is not granted");
				return;
			}
			const result = await Location.getLastKnownPositionAsync();
			if (result) {
				const {
					coords: { latitude, longitude },
				} = result;
				setLocation({ latitude, longitude });
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLocation();
	}, []);

	return location;
};
