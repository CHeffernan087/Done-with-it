import React, { createRef } from "react";

export const navigationRef = createRef();

const navigate = (path, params) => {
	if (navigationRef.current) {
		navigationRef.current.navigate(path, params);
	}
};

export default { navigate };
