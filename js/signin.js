

// const student = {
// 	username: "unknown",
// 	dob: { month: 0, day: 0, year: 0 },
// 	waived: false
// };

function Student(first,last,username,dob) {
	this.firstName = first;
	this.lastName = last;
	this.username = username;
	this.dob = dob;
}

const roster = []

const getStudent = function() {
	console.log(student);
}

const openEstablished = function() {
	// console.log("established student");

	stepOne.classList.add("hidden");
	stepTwoEst.classList.remove("hidden");
}

const openGuest = function() {
	// console.log("guest student");

	stepOne.classList.add("hidden");
	stepTwoGuest.classList.remove("hidden");
}

const goBack = function() {
	// console.log("guest student");

	stepTwoEst.classList.add("hidden");
	stepTwoGuest.classList.add("hidden");
	stepOne.classList.remove("hidden");
}