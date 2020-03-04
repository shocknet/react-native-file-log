declare module "react-native-file-log" {
	/**
	 * Equivalent functionality as console.log but saves the specified params to a file if enabled.
	 */
	function log(...content: any[]): void;
	/**
	 * Sets a tag for logs and specifies a folder name as well for the logs location, default is RNReactLogging
	 */
	function setTag(tag: string): void;
	/**
	 * Enables calling console.log when invoking the log function, enabled by default
	 */
	function setConsoleLogEnabled(enabled: boolean): void;
	/**
	 * Enables saving logs to a file, disabled by default
	 */
	function setFileLogEnabled(enabled: boolean): void;
	/**
	 * Sets the maximum file size limit before creating a new one. default is 512KB
	 */
	function setMaxFileSize(size: number): void;
	/**
	 * Returns an array with the paths for all log files saved.
	 */
	function listAllLogFiles(): Promise<string[]>;
}
