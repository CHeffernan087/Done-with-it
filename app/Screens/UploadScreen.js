import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

export default function UploadScreen({
	progress = 0,
	visible = false,
	onAnimationFinish,
}) {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						color={colors.primary}
						progress={progress}
						width={200}
					/>
				) : (
					<>
						<LottieView
							style={{ width: 300 }}
							autoPlay
							loop={false}
							onAnimationFinish={onAnimationFinish}
							source={require("../assets/animations/done.json")}
						/>
					</>
				)}
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	animation: {
		width: 150,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
