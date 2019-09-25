//

var str = "My LinkedIn";
var myUrl = str.link("https://www.linkedin.com/in/kenbrian-muchiri/") + "<br /> linkedin.com/in/kenbrian-muchiri/";
var str2 = "My GitHub";
var myUrl2 = str2.link("https://github.com/vilgaxbaha") + "<br />github.com/vilgaxbaha";
var str4 = "My Email";
var myUrl4 = str4.link("mailto:ken.vilgax@gmail.com") + "<br >Ken.vilgax@gmail.com";


var groupsInfo =[ "KenBrian ",
"Profile", "Experience", "Projects", "Highlights", "Languages","Network", "Education", "Other"
]

var Info = [
  //Profile
  [

    [ "Readme 👋 ","Hi I'm Kenbrian, a Full-Stack software Developer Front and  backend web app development. Welcome to my online portfolio!<br /><br />", "alternate", "Hi I'm Kenbrian, a Full-Stack software Developer Front and  backend web app development<br > <br >You can navigate through the tabs under the 'find' bar to the right. Try dragging the screen or clicking the buttons in the top left.<br /><br /> Welcome to my digital portfolio!", "N/A", "N/A", ""],

    [ "About Me","", "'Life's short, it's only {code}'", "I am thorough in everything I do and i have  a strong interest in technology, desktop/web applications, and user experience. As someone who takes responsibility for his own personal development, Am continually evaluating and upgrading my skills so that I  stay at the cutting edge of web development.<br /><br /><br /><br />Am a natural problem solver, who has established me by successfully completing projects for Community Based Organization, Microfinance Companies, web design, and Government Ministries.  !","N/A", "N/A", ""]
  ],
  //Experience
  [
    ["KENYA UTALII COLLEGE  ", "", "Web Upgrade  - Assistant Web Developer ", " Web redisign and Adding responsive features <br /><br />Skills:CSS, PHP Code igniter framework, HTML5", "June 2014  - July 2014 ", "UTALII COLLEGE", ""],

    ["JEMIFLIGHT COMPANY LIMITED ", "", "Network cabling", "Worked with an amazing team to Trancate and network the office and configuring the Phone Extentions <br /><br />Skills:Server Configuration,Email and Phone Configuration, Biometric Configuration", "Aug 2014  - Sept 2014 ", "MSA Road Pannesar", ""],

    ["VIRTUAL CITY LIMITED", "", "Distributor application  Integration and Implementation:", "Position Held: client service engineer <br /><br />Skills: Android Development, SQLlite, JAVA development,", "Oct 2014 – Dec 2014  ", "Spring valley", ""],

    [ "NITP","", "Software Developer", "I was able to  create and develop a CRM  for NITP (Nairobi industrial pack) which host taifa laptops.<br /><br />Skills:Android Development,PHP Laravel,", "May 2017-Dec 2017", "JKUAT Main Campus", ""],

    ["Okolea international.", "", "Software Developer", "Position Held: client service engineer <br /><br />Skills: Android Development, SQLlite, JAVA development,", "Oct 2014 – Dec 2014  ", "Spring valley", ""],

    

  ],

  //Projects
  [
    [ "Recycle Can","", "Founder, Chief iOS and Web Developer <br /> <a href = 'https://www.recyclecan.ca'  target='_blank'> Website</a> | <a href = 'https://github.com/EdwaRen/Recycle_Can_iOS' target='_blank'>Git</a>", "iOS and web navigation tool that guides users to the closest electronic waste recycling center.<br /><br />Assembled built-in real-time navigation app using Swift with 18000+ lifetiime users on iOS by integrating application using MapKit.<br ><br \>Constructed website supporting Google Maps API using React.js accepting 1500+ peak monthly visits.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Team Goals","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Team_Goals' target='_blank'>Git</a>", "Public goal sharing web app to effectively communicate tasks between a team in real time.<br \><br \>Assembled using React.js with backend support powered by Redux and authenticated with Firebase Auth.<br \><br \>Synchronized website with Firebase REST API to update components in real time.", "Spring 2017 - Summer 2017", "Ottawa-Colonel By", ""],

    [ "Morsecret","", "Founder, Overall Developer: <a href = 'https://github.com/EdwaRen/Morsecret' target='_blank'>Git</a>", "Morsecret is an ad-hoc distributed application that uses a novel haptic steganographic approach for real-time chat messaging.<br ><br >Privately communicates using morse code facilitated by Firebase.<br ><br >Employed Model-View-Controller (MVC) architectural pattern to process conversion of alphabetical characters into haptic feedback.", "Summer 2017", "Ottawa-Colonel By", ""],


  ],

  //Highlights
  [

    ["MetroNews", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on MetroNews online and print publications. Article can be found <a href = 'https://weblink.ocdsb.ca/WebLink/DocView.aspx?dbid=0&id=2963740&page=1' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
    ["Ottawa TechWatch", "", "Work Featured by News", "Online article written concerning Recycle Can on Ottawa TechWatch online news network. Article can be found <a href = 'http://www.ottawatechwatch.com/story.php?title=recycle-can' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
    ["Inventure", "", "Backend Lead: <a href = 'https:/meetinventure.com' target='_blank'>Website</a>", "Constructed backend support tool with Express.js for Inventure, an Ottawa based entrepreneurial accelerator for young student innovators.", "May 2018 - August 2018", "Ottawa"],
    ["ACT 35/36", "", "Ranked 99th percentile", "Excelled in the ACT with a composite score of 35 amongst more than six million candidates", "January 2017", "Ottawa"],
    ["Scholarship of distinction", "", "Awarded to students achieving 95%+", "University of Waterloo President’s scholarship of distinction.", "May 2017", "Ottawa"],

    ["International Baccalaureate", "", "Diploma", "Exceeded and surpassed expectations in International Baccalaureate program graduating within top 88th percentile.", "May 2017", "Ottawa"],

    ["Debate Semi-finalist", "", "Provincial Tournament", "Semi-finalist in annual Ontario Student Debating Society (OSDU) provincial tournament. Fluent bilingual debater.", "May 2016", "Toronto"],
    ["ICS Subject Award", "", "Highest Mark In Course", "Attained subject award in Introduction to Computer Science course with over 80 students enrolled.", "2015", "Colonel By"],
    ["President's Scholarship of Distinction", "", "University of Waterloo Entrance Award", "Awarded to students who have attained a 95+ entrance average.", "2017", "Waterloo"],
    ["Waterloo Mathematic Contests", "", "National Contests Organized by the CEMC", "Euclid, Cayley, and Fermat Math Contest: Top 25% Nationwide.", "2015-2017", "Waterloo"],

  ],

  //Languages
  [

    [ "Languages","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Python", 85, "JavaScript",85, "C++", 80, "Swift", 70, "Visual Basic",60, "Java" , 55 , "CSS", 55 , "HTML", 55, "Proficiency"]],
    [ "Tools","", "Experience Level", "", "2011 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Node.js", 90, "Django", 85, "React.js",85, "Docker", 70, "Git", 70, "Keras", 60, "MongoDB",60, "Proficiency"]],

    [ "Linguistics","","Language Skills", "Fluent: English, French.<br > <br > Experienced: Mandarin.", "N/A", "N/A", ""],

  ],

  //Network
  [

    [ "LinkedIn","url('images/Network/linkedin.png')", myUrl,"", "N/A", "N/A",  "" ],
    [ "GitHub","url('images/Network/github2.png')", myUrl2, "", "N/A", "N/A", "" ],
    [ "Mail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A", ""  ]

  ],


  //Education
  [

    [ "University of Waterloo","", "Candidate for Bachelor in Software Engineering", "", "2017 - 2022 (Expected)", "Waterloo", ""],

    [ "Colonel By","","Secondary School", "Received international baccalaureate diploma alongside Ontario Secondary School French Immersion Diploma.", "2012 - 2017", "Ottawa", ""]

  ],

  //Other
  [
    [ "CLS","","Aerospace Research Assistant", "Cooperated with researchers to analyze elemental composition of a Boeing 737 turbine engine using beamlines from the Canadian Light Source (CLS) national synchrotron.<br ><br >Presented findings to over 200 students and professors at the University of Saskatchewan.", "Summer 2016", "Saskatoon",  ""],

    [ "SHAD","","SHAD (Formerly Shad Valley) Alumnus", "1 of 7 students from high school selected to participate in SHAD, a competitive national entrepreneurial enrichment program.", "Summer 2016", "University of Saskatchewan", ""],

    [ "Debate","","Debating Society - Executive Committee", "Semi-finalist in Ontario Provincial Debating Championships (2016).<br ><br >Practiced for 5 hours a week after school and competed at various provincial and national tournaments.", "2012 - 2017", "Nationwide", ""],

    [ "Cross Country Team","","Long Distance Runner", "Participated as a runner on the Colonel By Cross Country team and competed at the Louis Riel meets each year.", "2014 - 2017", "Ottawa-Colonel By", ""],

    [ "Interests","", "Hobbies and Amusement", "Cross country, Blitz chess, Speedcubing, Skiing, Swimming, Hiking, Quizbowl trivia <br /><br />Follow me on Instagram @ed.yren!", "N/A", "N/A", ""],


  ],



]


module.exports = {
  info: Info,
  groupNames: groupsInfo
};
