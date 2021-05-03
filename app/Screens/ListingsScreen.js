import React, { useState, useEffect } from "react";
import {
	ActivityIndicator,
	ActivityIndicatorComponent,
	FlatList,
	StyleSheet,
	Text,
	View,
} from "react-native";
import UICard from "../components/UICard";
import UIScreen from "../components/UIScreen";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../routers/routes";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import UIButton from "../components/UIButton";
import UIActivityLoader from "../components/UIActivityLoader";
import useApi from "../hooks/useApi";

export default function ListingsScreen() {
	const navigation = useNavigation();

	const { data: listings, error, loading } = useApi(listingsApi.getListings);

	return (
		<UIScreen backgroundColor={colors.beige} flexDirection="row">
			{loading ? (
				<View
					style={{
						flex: 1,
						alignContent: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<UIActivityLoader visible={true} />
				</View>
			) : error ? (
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						flex: 1,
					}}
				>
					<AppText>There was an error fetching the listings</AppText>
					<UIButton
						use="secondary"
						color="white"
						styles={{ marginTop: 20, height: 50, width: 80, borderRadius: 22 }}
						onPress={loadListings}
					>
						Retry
					</UIButton>
				</View>
			) : (
				<>
					<FlatList
						data={listings}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item, index }) => (
							<UICard
								price={item.price}
								description={item.title}
								imageUrl={item.images[0].url}
								onPress={() => {
									navigation.navigate(routes.LISTING_DETAILS, { item });
								}}
							/>
						)}
					/>
				</>
			)}
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
