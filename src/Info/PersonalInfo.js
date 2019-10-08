//

var str = "My LinkedIn";
var myUrl = str.link("https://www.linkedin.com/in/kenbrian-muchiri/") + "<br /> linkedin.com/in/kenbrian-muchiri/";
var str2 = "My GitHub";
var myUrl2 = str2.link("https://github.com/vilgaxbaha") + "<br />github.com/vilgaxbaha";
var str4 = "My Email";
var myUrl4 = str4.link("mailto:ken.vilgax@gmail.com") + "<br >Ken.vilgax@gmail.com";


var groupsInfo =[ "KenBrian ",
"Profile", "Experience", "Projects", "Languages","Network", "Education"
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

    ["Okolea International", "", "Software Developer", "<br /><br />Skills:Angular, Firebase & Cloud Funtions, React Native Mobile app Development,", "Aug 2018 – march 2019  ", "Ruaka Town,R2 building", ""],

    ["Evotech Innovations ", "", "Senior Software Developer", "<br /><br />Skills:Angular, Firebase & Cloud Funtions, React Native Mobile app Development,SpringBoot Framework,Php(Laravel)", " march 2018  ", "JUJA Town", ""],

    ["Medbook Africa  ", "", "Senior Software Developer", "<br /><br />Skills:Angular 8, Firebase & Cloud Funtions, React Native Mobile app Development,SpringBoot Framework,Php(Laravel)", " march 2018  ", "JUJA Town", ""],



    

  ],

  //Projects
  [
    [ "Loan Management System","", "Founder, Chief Android  and Web Developer <br /> <a href = 'https://github.com/vilgaxbaha' target='_blank'> Website</a> | <a href = 'https://github.com/vilgaxbaha' target='_blank'>Git</a>", "Android application and Admin dashboard that guides users to issue and give out loans and manage them.<br /><br />Assembled built-in real-time navigation app using React native for android app and Angular 7 webapplication by integrating  application using Firebase.<br ><br \>Constructed Admin Dashboard supporting Payment (MPESA) API using Angular 7, Node js and  authenticated with Firebase Auth.", "", "", ""],

    [ "Distribution and Accounting CMS","", " Overall Developer: <a href = ' https://officenip.com/' target='_blank'>Website</a>", "Public goal is IT favours small and large companies implemented with the best technologies in security and simple users interphase its also fully customisable to any company<br \><br \>Assembled using Php (Laravel) with backend support powered Laravel and Mysql DB and authenticated with Firebase Auth.<br \><br \>Synchronized website with Firebase REST API to update components in real time.", "", "Vilgax dev", ""],

    [ "Point of Sale (POS)","", "Founder, Overall Developer:", "This is an inventory system and POS system which can be customised to any Business <br ><br >Designed using PHP(Laravel) and MySQL<br ><br >Manages stocks and also manages payments of walking clients and also clients who Pay via MPESA to real time sales and payments. ", "", "Vilgax Dev", ""],
    
    [ "Point of Sale (POS)","", "Founder, Overall Developer:", "This is an inventory system and POS system which can be customised for a phamarcy <br ><br >Designed using PHP(Laravel) and MySQL<br ><br >Manages stocks and also manages payments of walking clients and also clients who Pay via MPESA to real time sales and also records patient records. ", "", "Vilgax Dev", ""],
    
    [ "Business Card Maker ","", "Founder, Overrall developer <br /> <a href = ' https://busines-card-maker.firebaseapp.com' target='_blank'> Website</a> | ", "React JS  application and different templates that guides users to creats business cards aslso share theme<br /><br />Assembled built-in real-time navigation app using Reactjs  and intergrated with Firebase hosting and authentication<br ><br \>Constructed user Dashboard consisting of React js, Node js and intergrated with Firebase Auth.", "", "", ""],

    [ "E-comerce system  ","", " developer <br /> <a href = ' https://busines-card-maker.firebaseapp.com' target='_blank'> Website</a> | ", "React Native application and  angular8 admin dashboard and user website<br /><br />Assembled  and built  using React native for mbile application  and Node js/Angular 8 for backend both for admin and user dashboard and website intergrated with Firebase hosting and authentication<br ><br \>Constructed user Dashboard consisting of Angular, Node js and intergrated with Firebase Auth and slso Several Payments modes likeMPESA and also VISA and Card.", "", "", ""],
    
    //[ "","", "Founder, Overall Developer:", "This is an inventory system and POS system which can be customised for a phamarcy <br ><br >Designed using PHP(Laravel) and MySQL<br ><br >Manages stocks and also manages payments of walking clients and also clients who Pay via MPESA to real time sales and also records patient records. ", "", "Vilgax Dev", ""],



  ],

  //Highlights
  // [

  //   ["MetroNews", "", "Work Featured by News", "Interviewed and had an article written concerning Recycle Can on MetroNews online and print publications. Article can be found <a href = 'https://weblink.ocdsb.ca/WebLink/DocView.aspx?dbid=0&id=2963740&page=1' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
  //   ["Ottawa TechWatch", "", "Work Featured by News", "Online article written concerning Recycle Can on Ottawa TechWatch online news network. Article can be found <a href = 'http://www.ottawatechwatch.com/story.php?title=recycle-can' target='_blank'>here.</a>", "Summer 2017", "Ottawa"],
  //   ["Inventure", "", "Backend Lead: <a href = 'https:/meetinventure.com' target='_blank'>Website</a>", "Constructed backend support tool with Express.js for Inventure, an Ottawa based entrepreneurial accelerator for young student innovators.", "May 2018 - August 2018", "Ottawa"],
  //   ["ACT 35/36", "", "Ranked 99th percentile", "Excelled in the ACT with a composite score of 35 amongst more than six million candidates", "January 2017", "Ottawa"], 
  //   ["Scholarship of distinction", "", "Awarded to students achieving 95%+", "University of Waterloo President’s scholarship of distinction.", "May 2017", "Ottawa"],

  //   ["International Baccalaureate", "", "Diploma", "Exceeded and surpassed expectations in International Baccalaureate program graduating within top 88th percentile.", "May 2017", "Ottawa"],

  //   ["Debate Semi-finalist", "", "Provincial Tournament", "Semi-finalist in annual Ontario Student Debating Society (OSDU) provincial tournament. Fluent bilingual debater.", "May 2016", "Toronto"],
  //   ["ICS Subject Award", "", "Highest Mark In Course", "Attained subject award in Introduction to Computer Science course with over 80 students enrolled.", "2015", "Colonel By"],
  //   ["President's Scholarship of Distinction", "", "University of Waterloo Entrance Award", "Awarded to students who have attained a 95+ entrance average.", "2017", "Waterloo"],
  //   ["Waterloo Mathematic Contests", "", "National Contests Organized by the CEMC", "Euclid, Cayley, and Fermat Math Contest: Top 25% Nationwide.", "2015-2017", "Waterloo"],

  // ],

  //Languages
  [

    [ "Codding Languages","", "Experience Level", "", "2012 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Angular", 85, "JavaScript",85, "PHP", 80, "Android", 70, "C#",60, "Java" , 60 , "CSS", 65 , "HTML", 62, "Proficiency"]],
    [ "Tools of codding","", "Experience Level", "", "2012 (Earliest) - Present", "N/A",   "url('images/html-coding.png')", ["Node.js", 90, "SQL", 85, "Android",85, "Docker", 70, "Git", 70, "Firebase", 60, "MongoDB",60, "Proficiency"]],

    [ "Languages Spoken","","Language Skills", "Fluent: English, Swahili<br > <br > ", "N/A", "N/A", ""],

  ],

  //Network
  [ 

    [ "LinkedIn","url('images/Network/linkedin.png')", myUrl,"", "N/A", "N/A",  "" ],
    [ "GitHub","url('images/Network/github2.png')", myUrl2, "", "N/A", "N/A", "" ],
    [ "GMail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A", ""  ]
    //[ "Mail","url('images/Network/email2.png')", myUrl4, "", "N/A", "N/A", ""  ]

  ],


  //Education
  [

    [ "JKUAT Main","", "Studied Bachelor in Business in formation And Technology", "", "2014 - 2017 (Finished)", "Juja Kenya", ""],

    [ "JKUAT Main","","Diploma", "Studied Diploma in Business infomation And Technology", "2012 - 2014", "Juja Kenya", ""]

  ],

 



]


module.exports = {
  info: Info,
  groupNames: groupsInfo
};
