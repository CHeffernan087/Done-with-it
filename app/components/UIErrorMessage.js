import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

export default function UIErrorMessage({ error, visible }) {
	if (!error || !visible) return null;
	return <AppText color="primary">{error}</AppText>;
}

const styles = StyleSheet.create({});
