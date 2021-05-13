import { useEffect } from "react";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import navigation from "../routers/routes";
import expoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListenter) => {
	const registerForNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			if (!permission.granted) {
				return;
			}
			const notificationToken = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(notificationToken);
		} catch (error) {
			console.log("Error getting a push notification token", error);
		}
	};

	useEffect(() => {
		registerForNotifications();
		Notifications.addListener((notification) => {
			if (notificationListenter) {
				notificationListenter();
			}
		});
	}, []);
};
