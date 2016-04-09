
// bio object
var bio = {
	"name": "David Kennedy",
	"role": "Web Developer",
	"contacts": {
		"mobile": "323-599-1774",
		"email": "dkennedychicago@gmail.com",
		"github": "dkennedychicago",
		"twitter": "@dkennedychicago",
		"location": "Chicago, Il 60614"
	},
	
		"welcomeMessage": "I am interested in leaveraging my experience and skills in media and evolve as a Front-End Development in the Chicago Tech Industry.",
		"skills": [
			"VFX Editing", "Conforming", "Rotoscoping", "Data Wrangling"
	],
		"bioPic": ["images/dk_profile_sm2.jpg"],
	
}

// education object

var education = {
	"schools": [
	{
		"name": "University of California, UCLA",
		"location": "405 Hilgard Avenue, Los Angeles 90095",
		"degree": "Certificate",
		"majors": ["Entertainment Media (Cinematography)"],
		"date": "2012 - 2012",
		"url": ["http://entertainment.uclaextension.edu/certificates/cinematography/"]
			
	},
	{
		"name": "Heriot-Watt University",
		"location": "Heriot-Watt University, Edinburgh Scotland EH14 4AS",
		"degree": "B.Sc",
		"majors": ["Architectural Engineering"],
		"date": "1992",
		"url": ["http://www.hw.ac.uk/undergraduate/architectural-engineering.htm"]
		
	},
	{
		"name": "Limerick Institute Of Technology",
		"location": "Limerick Institute Of Technology, Moylish Park, Limerick, Ireland.",
		"degree": "Diploma",
		"majors": ["Architectural Engineering"],
		"date": "1992",
		"url": ["http://www.lit.ie/Courses/LC241/default.aspx"]
		
	}
	],

	"onlineCourses": [
	{
		"onlineClasses": "Introduction to Programming",
		"onlineTitle": "Udacity",
		"onlineSchool": "Nanodegree",
		"onlineDates": "2015-2016",
		"onlineURL": ["https://www.udacity.com"]
	}
	]
}

// work object

var work = {
	"jobs": [
	{
		"employer": "Gradient Effects",
		"title": "VFX Editor | I\/O Coordinator",
		"location": "4120 Del Rey Avenue, Marina Del Rey 90292",
		"dates": "03\/10 - 06\/14",
		"description": "Contributed to the delivery of high quality VFX for Film and Broadcast projects, on time and within budget. Instrumental in helping to develop in-house tools to automate the shot ingest and delivery pipeline. On smaller projects served as the key liaison between production, editorial and the show producer and supervisor. Managed a database of achievements and priorities, keeping the client informed and the crew on task."
	},
	{
		"employer": "Prologue Films",
		"title": "Coordinator | Assoc.Producer",
		"location": "534 Victoria Ave, Venice CA 90291",
		"dates": "10\//09 - 03\/10",
		"description": "\“Titles Coordinator\” on \“Sherlock Holmes\” MT and MOE, Post Coordinator on HBO \"The Pacific\" Promo. Producer on HBO 24/7 Jimmy Johnson Broadcast GFX package. Associate Producer on 82nd Academy Awards Broadcast and Screen package. Coordinator on ESPN World Cup 2010 Broadcast Package."
	},
	{
		"employer": "Pacific Title & Art Studio",
		"title": "DI Color Assistant",
		"location": "2700 Santa Monica Blvd, Hollywood CA 90028",
		"dates": "02\/07 - 07\/09",
		"description": "As DI Assistant I supported Colorists, and Producers for Feature and Trailer Finishing. Note taking in DI sessions, and VFX screenings, updating cuts, monitoring renders, generating proxies, preparing film outs. QC, roto, dust busting, and secondary animation using Autodesk Lustre."
	},
	{
		"employer": "yU+Co",
		"title": "Coordinator | Data I\/O",
		"location": "941 N. Mansfield Ave, Hollywood CA 90038",
		"dates": "09\/03 – 09\/06",
		"description": "Supporting producers and artist with asset management, ftp and website maintenance. Media management, scheduling, archiving, and delivery.On a range of projects Broadcast, GFX packages, live action commercials, VFX for TV and Film, and Film Main Titles."
	},
	{
		"employer": "Bay Area Video Coalition",
		"title": "Facility Technician and Duplication Manager",
		"location": "2727 Mariposa St San Francisco, CA 94110",
		"dates": "03\/01 – 05\/03",
		"description": "Responsible for the coordination of facility technical staff and equipment for workshops. Technology upgrading, ordering, installation, duplication and Restoration."
	},              
	{
		"employer": "Pacific Video Resources",
		"title": "Post Production Technician",
		"location": "2331 3rd St San Francisco, CA 94107",
		"dates": "06\/99 – 03\/01",
		"description": "Facility Technician and Duplication Manager. Assistant Editing and graphics prep for online edits, graphics layoffs, troubleshooting, QC, maintenance and archiving assets on NLE. Avid’s and Discreet Smoke Systems."
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
		"images": ["images/projects/cloudAtlas/cloudAtlasPoster.jpg"]
	},
	{
		"title": "Identity Thief",
		"date": 2013,
		"description": "VFX Editor and I/O Coordinator on this hit comedy feature",
		"images": ["images/projects/identityThief/identityThiefPoster.jpg"]
	}
	]

}

// CONTACT INFO

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
$("#topContacts").append(formattedwelcomeMsg);
$("#topContacts").append(formattedbioPic);

// BIO - SKILLS AT A GLANCE

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
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

work.display = function() {
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
work.display();

// PROJECTS

projects.display = function() {	
  for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date); 
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			}
		}
	var formattedProjects =	formattedTitle + formattedDates + formattedDescription + formattedImage;
	$(".project-entry:last").append(formattedProjects);
	}
}
projects.display(); 


// EDUCATION

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      var formattedEducation = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
      
      $(".education-entry:last").append(formattedEducation);

      }
	for (courses in education.onlineCourses) {
	  $("#education").append(HTMLschoolStart);
	    var formattedonlineClasses = HTMLonlineClasses.replace("%data%", education.onlineCourses[courses].onlineClasses);
	    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].onlineTitle);
	    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].onlineSchool);
	    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].onlineDates);
	    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].onlineURL);
  	    var formattedonlineCourses = formattedonlineClasses + formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
 	
 	    $(".education-entry:last").append(formattedonlineCourses);

	}
	
}
education.display();


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

// MAP

$("#mapDiv").append(googleMap);



