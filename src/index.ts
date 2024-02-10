type Level = "Log" | "Info" | "Warn" | "Error";

export class Logger {
	private _log(level: Level, ...message: any[]) {
		if (message) {
			console.log(`[${level}]`, ...message);
		} else {
			console.log(`[${level}]`);
		}
	}

	log(...message: any[]) {
		this._log("Log", ...message);
	}

	info(...message: any[]) {
		this._log("Info", ...message);
	}

	warn(...message: any[]) {
		this._log("Warn", ...message);
	}

	error(...message: any[]) {
		this._log("Error", ...message);
	}
}
