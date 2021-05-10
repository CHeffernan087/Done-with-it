import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Text from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice() {
	const netinfo = useNetInfo();

	const renderNotice =
		netinfo.type != "unknown" && netinfo.isInternetReachable === false;

	return renderNotice ? (
		<View style={styles.noticeWrapper}>
			<Text color="white">No Internet Connection</Text>
		</View>
	) : null;
}

const styles = StyleSheet.create({
	noticeWrapper: {
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.primary,
		position: "absolute",
		zIndex: 1,
		width: "100%",
		top: Constants.statusBarHeight,
	},
	textWrapper: {
		color: colors.white,
	},
});
