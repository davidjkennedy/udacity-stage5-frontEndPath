/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append(["David Kennedy"]);

// var firstName = "Daithi";
// var age = 32;

// console.log(firstName);

// var awesomeThoughts = "My name is David and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(awesomeThoughts);
// console.log(funThoughts);

// var email = "dkennedychicago@gmail.com";
// var newEmail = email.replace("mac", "gmail");

// console.log(email);
// console.log(newEmail);

// $("#main").append(funThoughts);

// var skills = 
// ["HTML5", "CSS3", "JS", "GAE", "Python" ];
// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.length);

// var contact = 
// ["www.dkennedychicago.com", "dkennedychicago@gmail.com", "1-(323)-599-1774", "www.linkedin.com/in/dkennedychicago", "www.vimeo.com/dkennedychicago" ];
// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(contact.length);
// ##########################################################################


// bio object
var bio = {
	"name": "David Kennedy",
	"role": "Web Developer",
	"contact": {
		"mobile": "323-599-1774",
		"email": "dkennedychicago@gmail.com",
		"github": "dkennedychicago",
		"twitter": "@dkennedychicago",
		"location": "Chicago, Illinois"
	},
	
		"welcomeMessage": "I am interested in working in Front-End Development in the Chicago Tech Industry.",
		"skills": [
			"VFX Editing", "Conforming", "Rotoscoping", "Data Wrangling"
	],
		"bioPic": "images/dk_profile_sm.jpg"	
}
// education object
var education = {
	"schools": [
	{
		"name": "University of California, UCLA",
		"location": "Los Angeles",
		"degree": "BA",
		"major": ["Entertainment Media (Cinematography)"],
		"date": 2012,
		"url": "http://entertainment.uclaextension.edu/certificates/cinematography/"
			
	},
	{
		"name": "Heriot-Watt University",
		"city": "Edinburgh, Scotland",
		"degree": "B.Sc",
		"major": ["Architectural Engineering"],
		"date": 1992,
		"url": "http://www.hw.ac.uk/undergraduate/architectural-engineering.htm"
		
	}
	],

	"onlineCourses": [
	{
		"name": "Udacity",
		"title": "Introduction to Programming - Nanodegree",
		"dates": 2016,
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	}
	]
}
// work object
var work = {
	"jobs": [
	{
		"employer": "Gradient Effects",
		"title": "VFX Editor | I\/O Coordinator",
		"location": "Los Angeles",
		"dates": "03\/12 - 06\/14",
		"description": "Contributed to the delivery of high quality VFX for Film and Broadcast projects, on time and within budget. Instrumental in helping to develop in-house tools to automate the shot ingest and delivery pipeline. On smaller projects served as the key liaison between production, editorial and the show producer and supervisor. Managed a database of achievements and priorities, keeping the client informed and the crew on task."
	},
	{
		"employer": "Modern Video Film",
		"title": "Data I/O",
		"location": "Los Angeles",
		"dates": "03\/11 - 09\/11",
		"description": "Worked in this very busy Data I/O department. Cloning, loading and unloading drives, and LTOs. File format conversions, backups and checksums. Scanning and recording of film assets, and Qc'ing DI reels for film out."
	},
	{
		"employer": "Scanline VFX LA",
		"title": "I\/O Coordinator | VFX Editor",
		"location": "Los Angeles",
		"dates": "10\/11 - 02\/12",
		"description": "Worked on \"The Immortals\" VFX at Scanline LA as I/O Coordinator & VFX Editor. Using Avid MC and FCP FTP and Shotgun Database management."
	},
	{
		"employer": "Prime Focus Hollywood",
		"title": "Roto \/ Tasking Artist",
		"location": "Hollywood CA",
		"dates": "06\/10 - 08\/10",
		"description": "Back at Prime this time as a tasking and Roto Artist for Cats and Dog Stereo Conversion, and Shrek BlueRay Stereo Conversion"
	},
	{
		"employer": "Prologue Films",
		"title": "Coordinator | Assoc.Producer",
		"location": "Venice CA",
		"dates": "10\//09 - 03\/10",
		"description": "\“Titles Coordinator\” on \“Sherlock Holmes\” MT and MOE, Post Coordinator on HBO \"The Pacific\" Promo. Producer on HBO 24/7 Jimmy Johnson Broadcast GFX package. Associate Producer on 82nd Academy Awards Broadcast and Screen package. Coordinator on ESPN World Cup 2010 Broadcast Package."
	},
	{
		"employer": "Prime Focus Hollywood",
		"title": "Data I\/O | Render Wrangler",
		"location": "Hollywood CA",
		"dates": "07\/09 - 10\/09",
		"description": "Prime Focus completed eight shots for the feature The Tree of Life, and over eighty for Avatar. My role as a Render Wrangler was in monitoring, prioritizing and troubleshooting (when needed) jobs spread over the render nodes of Prime's Los Angeles, Vancouver and Winnipeg facilities."
	},      
	{
		"employer": "Pacific Title & Art Studio",
		"title": "DI Color Assistant",
		"location": "Hollywood CA",
		"dates": "02\/07 - 07\/09",
		"description": "As DI Assistant I supported Colorists, and Producers for Feature and Trailer Finishing. Note taking in DI sessions, and VFX screenings, updating cuts, monitoring renders, generating proxies, preparing film outs. QC, roto, dust busting, and secondary animation using Autodesk Lustre."
	},
	{
		"employer": "Logan Media Inc",
		"title": "Post Production Coordinator",
		"location": "Hollywood CA",
		"dates": "07\/09 – 10\/09",
		"description": "Supporting both producers and creatives on fast turnaround commercial GFX projects. Day to Day Asset management. DVD Authoring, Web compression, and FTP support."
	},
	{
		"employer": "yU+Co",
		"title": "Coordinator | Data I\/O",
		"location": "Hollywood CA",
		"dates": "09\/03 – 09\/06",
		"description": "Supporting producers and artist with asset management, ftp and website maintenance. Media management, scheduling, archiving, and delivery.On a range of projects Broadcast, GFX packages, live action commercials, VFX for TV and Film, and Film Main Titles."
	}              
	]
}

// project object
var projects = {
	"projects": [
	{
		"title": "Cloud Atlas",
		"date": 2012,
		"description": "Worked as a VFX Editor on shots for Cloud Atlas where Gradient was tasked with augmenting the eyes of Rose, played by Xun Zhou.",
		"images": "images/projects/cloudAtlas/cloudAtlasPoster.jpg"
	},
	{
		"title": "Identity Thief",
		"date": 2013,
		"description": "VFX Editor and I/O Coordinator on this hit comedy feature",
		"images": "images/projects/identityThief/identityThiefPoster.jpg"
	}
	]

}

// CONTACT INFO

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedwelcomeMsg);
$("#topContacts").append(formattedbioPic);

// BIO - SKILLS AT A GLANCE

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
}

// WORK EXPERIENCE

var displayWork = function() {
	for (job in work.jobs) {
	  $("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedJobs = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedJobs);
	}
}
displayWork();

// PROJECTS

// var displayProjects = function() {
projects.display = function() {	
	for (project in projects.projects) {
	  $("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".projects.projects-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date); 
		$(".projects-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".projects-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".projects-entry:last").append(formattedImage);
		
		var formattedProjects = formattedTitle + formattedDates + formattedDescription + formattedImage;
		
		$(".project-entry:last").append(formattedProjects);

			}
		}
	}
}
projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

var inName = function(name) {
  var splitName = [];
  splitName = name.trim().split(" ");
  var firstName = splitName[0].toLowerCase();
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  var secondName = splitName[1].toUpperCase();

  return firstName + " " + secondName;
}

$("#main").append(internationalizeButton);


// $("#main").append(work["position"]);
// $("#main").append(education.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contact.mobile);
// $("#main").append(work.jobs);
// $("#main").append(work['employer']);
// $("#main").append(work['city']);
// $("#main").append(education.schools[0].name);
// $("#main").append(education.schools[1].name);
// $("#main").append(education.nameOfSchool);
// $("#main").append(work.jobs[1].employer);
// $("#main").append(education.schools[1].name);
// $("#main").append(work.jobs[0].description);
