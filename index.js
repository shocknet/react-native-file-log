import { NativeModules, PermissionsAndroid, Platform } from "react-native";

const { RNReactLogging } = NativeModules;

let permissionsAccepted = null;

export default {
	log: (...content) => {
		console.log(...content);
		const logData = content.map(logItem => {
			try {
				if (typeof logItem === "object") {
					const stringifiedLog = JSON.stringify(logItem);
					return stringifiedLog;
				} else if (typeof logItem === "number") {
					return logItem.toString();
				}

				return logItem;
			} catch (err) {
				return logItem;
			}
		});
		if (permissionsAccepted) {
			RNReactLogging.printLog(logData.join(" "));
		}
	},
	setTag: tag => {
		RNReactLogging.setTag(tag);
	},
	setConsoleLogEnabled: enabled => {
		RNReactLogging.setConsoleLogEnabled(enabled);
	},
	setFileLogEnabled: async enabled => {
		if (enabled) {
			if (Platform.OS === "android") {
				const writePermissions = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
				);
				const readPermissions = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
				);
				permissionsAccepted =
					readPermissions === "granted" && writePermissions === "granted";
			} else {
				permissionsAccepted = true;
			}
			if (permissionsAccepted) {
				RNReactLogging.setFileLogEnabled(enabled);
			}
                }
	},
	setMaxFileSize: size => {
		RNReactLogging.setMaxFileSize(size);
	},
	listAllLogFiles: () => {
		return RNReactLogging.listAllLogFiles();
	}
};
