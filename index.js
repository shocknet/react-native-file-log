import { NativeModules } from "react-native";

const { RNReactLogging } = NativeModules;

export default {
  log: (...content) => {
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
    console.log(logData.join(" "));
    const loggedData = RNReactLogging.printLog(logData.join(" "));
    console.log(loggedData);
  },
  setTag: tag => {
    RNReactLogging.setTag(tag);
  },
  setConsoleLogEnabled: enabled => {
    RNReactLogging.setConsoleLogEnabled(enabled);
  },
  setFileLogEnabled: enabled => {
    RNReactLogging.setFileLogEnabled(enabled);
  },
  setMaxFileSize: size => {
    RNReactLogging.setMaxFileSize(size);
  },
  listAllLogFiles: () => {
    return RNReactLogging.listAllLogFiles();
  }
};
