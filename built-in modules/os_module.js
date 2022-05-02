const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);
// Return the system uptime in seconds
// Uptime is the duration of time that a system has been working and available in a reliable operating manner
console.log(`The System Uptime in Minutes is ${os.uptime() / 60} minute`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};
console.log(currentOS);
