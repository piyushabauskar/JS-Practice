//Logging system
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  createLogs(str) {
    this.logs.push(str);
  }

  getLogs() {
    return this.logs;
  }
}
const log1 = new Logger();
const log2 = new Logger();

log1.createLogs("Log 1 by log1");
log2.createLogs("Log 2 by log2");
log1.createLogs("Log 3 by log1");

console.log("Reading Logs from log1", log1.getLogs());
console.log("Reading Logs from log2", log2.getLogs());
