export class Logger {
	#log(level, ...message) {
		if (message) {
			console.log(`[${level}]`, ...message);
		} else {
			console.log(`[${level}]`);
		}
	}

	info(...message) {
		this.#log("Info", ...message);
	}

	warn(...message) {
		this.#log("Warn", ...message);
	}
}
