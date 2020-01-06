

const student = {
	username: "unknown",
	dob: { month: 0, day: 0, year: 0 },
	waived: false
};

const getStudent = function() {
	console.log(student);
}

const openEstablished = function() {
	console.log("established student");
}

const openGuest = function() {
	console.log("guest student");
}