type Level = "Log" | "Info" | "Warn" | "Error";

export class Logger {
	private _log(level: Level, console: (...date: any[]) => void , ...message: any[]) {
		if (message) {
			console(`[${level}]`, ...message);
		} else {
			console(`[${level}]`);
		}
	}

	log(...message: any[]) {
		this._log("Log", console.log, ...message);
	}

	info(...message: any[]) {
		this._log("Info", console.info, ...message);
	}

	warn(...message: any[]) {
		this._log("Warn", console.warn, ...message);
	}

	error(...message: any[]) {
		this._log("Error", console.error, ...message);
	}
}
