type Level = "Info" | "Warn";

export class Logger {
	private log(level: Level, ...message: any[]) {
		if (message) {
			console.log(`[${level}]`, ...message);
		} else {
			console.log(`[${level}]`);
		}
	}

	info(...message: any[]) {
		this.log("Info", ...message);
	}

	warn(...message: any[]) {
		this.log("Warn", ...message);
	}
}
