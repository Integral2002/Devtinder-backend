const users = [
  {
    name: "Rahul Gandhi",
    email: "rahul.gandhi01@test.com",
    mobileNo: "9876500001",
    password: "Rahul@123",
    profile_url: "https://randomuser.me/api/portraits/men/1.jpg",
    skills: ["JavaScript", "React", "Node.js"],
    about: "This is about Rahul Gandhi"
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma02@test.com",
    mobileNo: "9876500002",
    password: "Priya@123",
    profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
    skills: ["React", "MongoDB", "Express"],
    about: "Priya enjoys building modern web applications"
  },
  {
    name: "Arjun Verma",
    email: "arjun.verma03@test.com",
    mobileNo: "9876500003",
    password: "Arjun@123",
    profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Arjun is interested in backend development and APIs"
  },
  {
    name: "Neha Kapoor",
    email: "neha.kapoor04@test.com",
    mobileNo: "9876500004",
    password: "Neha@123",
    profile_url: "https://randomuser.me/api/portraits/women/2.jpg",
    skills: ["Python", "Django", "PostgreSQL"],
    about: "Neha loves solving difficult programming problems"
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh05@test.com",
    mobileNo: "9876500005",
    password: "Vikram@123",
    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
    skills: ["Java", "Spring Boot", "MySQL"],
    about: "Vikram works on scalable backend systems"
  },
  {
    name: "Ananya Gupta",
    email: "ananya.gupta06@test.com",
    mobileNo: "9876500006",
    password: "Ananya@123",
    profile_url: "https://randomuser.me/api/portraits/women/3.jpg",
    skills: ["JavaScript", "TypeScript", "React"],
    about: "Ananya enjoys creating clean and intuitive interfaces"
  },
  {
    name: "Rohan Malhotra",
    email: "rohan.malhotra07@test.com",
    mobileNo: "9876500007",
    password: "Rohan@123",
    profile_url: "https://randomuser.me/api/portraits/men/4.jpg",
    skills: ["C++", "DSA", "Java"],
    about: "Rohan spends his time improving his problem solving skills"
  },
  {
    name: "Simran Kaur",
    email: "simran.kaur08@test.com",
    mobileNo: "9876500008",
    password: "Simran@123",
    profile_url: "https://randomuser.me/api/portraits/women/4.jpg",
    skills: ["UI Design", "Figma", "React"],
    about: "Simran is passionate about design and frontend development"
  },
  {
    name: "Aditya Mehta",
    email: "aditya.mehta09@test.com",
    mobileNo: "9876500009",
    password: "Aditya@123",
    profile_url: "https://randomuser.me/api/portraits/men/5.jpg",
    skills: ["Node.js", "Redis", "Docker"],
    about: "Aditya likes building high performance backend services"
  },
  {
    name: "Kavya Joshi",
    email: "kavya.joshi10@test.com",
    mobileNo: "9876500010",
    password: "Kavya@123",
    profile_url: "https://randomuser.me/api/portraits/women/5.jpg",
    skills: ["React", "Redux", "JavaScript"],
    about: "Kavya is learning advanced React and state management"
  },

  {
    name: "Aman Verma",
    email: "aman.verma11@test.com",
    mobileNo: "9876500011",
    password: "Aman@123",
    profile_url: "https://randomuser.me/api/portraits/men/6.jpg",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    about: "Aman likes working on full stack applications"
  },
  {
    name: "Pooja Sharma",
    email: "pooja.sharma12@test.com",
    mobileNo: "9876500012",
    password: "Pooja@123",
    profile_url: "https://randomuser.me/api/portraits/women/6.jpg",
    skills: ["Python", "Flask", "SQL"],
    about: "Pooja enjoys working with databases and backend systems"
  },
  {
    name: "Karan Mehta",
    email: "karan.mehta13@test.com",
    mobileNo: "9876500013",
    password: "Karan@123",
    profile_url: "https://randomuser.me/api/portraits/men/7.jpg",
    skills: ["React", "Next.js", "Tailwind"],
    about: "Karan enjoys creating responsive web applications"
  },
  {
    name: "Isha Agarwal",
    email: "isha.agarwal14@test.com",
    mobileNo: "9876500014",
    password: "Isha@123",
    profile_url: "https://randomuser.me/api/portraits/women/7.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
    about: "Isha loves creating simple and beautiful websites"
  },
  {
    name: "Sahil Yadav",
    email: "sahil.yadav15@test.com",
    mobileNo: "9876500015",
    password: "Sahil@123",
    profile_url: "https://randomuser.me/api/portraits/men/8.jpg",
    skills: ["Java", "Spring", "MySQL"],
    about: "Sahil is interested in enterprise application development"
  },
  {
    name: "Riya Patel",
    email: "riya.patel16@test.com",
    mobileNo: "9876500016",
    password: "Riya@123",
    profile_url: "https://randomuser.me/api/portraits/women/8.jpg",
    skills: ["React", "Figma", "CSS"],
    about: "Riya enjoys combining design with frontend development"
  },
  {
    name: "Manish Kumar",
    email: "manish.kumar17@test.com",
    mobileNo: "9876500017",
    password: "Manish@123",
    profile_url: "https://randomuser.me/api/portraits/men/9.jpg",
    skills: ["Python", "FastAPI", "PostgreSQL"],
    about: "Manish likes designing fast and reliable APIs"
  },
  {
    name: "Sneha Reddy",
    email: "sneha.reddy18@test.com",
    mobileNo: "9876500018",
    password: "Sneha@123",
    profile_url: "https://randomuser.me/api/portraits/women/9.jpg",
    skills: ["JavaScript", "Vue", "Node.js"],
    about: "Sneha is interested in modern frontend frameworks"
  },
  {
    name: "Nikhil Raj",
    email: "nikhil.raj19@test.com",
    mobileNo: "9876500019",
    password: "Nikhil@123",
    profile_url: "https://randomuser.me/api/portraits/men/10.jpg",
    skills: ["C++", "DSA", "Algorithms"],
    about: "Nikhil enjoys competitive programming and algorithms"
  },
  {
    name: "Meera Nair",
    email: "meera.nair20@test.com",
    mobileNo: "9876500020",
    password: "Meera@123",
    profile_url: "https://randomuser.me/api/portraits/women/10.jpg",
    skills: ["React", "TypeScript", "Redux"],
    about: "Meera is passionate about frontend engineering"
  },

  {
    name: "Ravi Kumar",
    email: "ravi.kumar21@test.com",
    mobileNo: "9876500021",
    password: "Ravi@123",
    profile_url: "https://randomuser.me/api/portraits/men/11.jpg",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Ravi enjoys building REST APIs"
  },
  {
    name: "Aditi Singh",
    email: "aditi.singh22@test.com",
    mobileNo: "9876500022",
    password: "Aditi@123",
    profile_url: "https://randomuser.me/api/portraits/women/11.jpg",
    skills: ["React", "Redux", "JavaScript"],
    about: "Aditi enjoys building interactive user interfaces"
  },
  {
    name: "Mohit Sharma",
    email: "mohit.sharma23@test.com",
    mobileNo: "9876500023",
    password: "Mohit@123",
    profile_url: "https://randomuser.me/api/portraits/men/12.jpg",
    skills: ["Java", "Spring Boot", "Kafka"],
    about: "Mohit works with distributed backend systems"
  },
  {
    name: "Tanya Gupta",
    email: "tanya.gupta24@test.com",
    mobileNo: "9876500024",
    password: "Tanya@123",
    profile_url: "https://randomuser.me/api/portraits/women/12.jpg",
    skills: ["UI Design", "Figma", "CSS"],
    about: "Tanya enjoys designing clean digital experiences"
  },
  {
    name: "Deepak Verma",
    email: "deepak.verma25@test.com",
    mobileNo: "9876500025",
    password: "Deepak@123",
    profile_url: "https://randomuser.me/api/portraits/men/13.jpg",
    skills: ["Python", "Django", "Redis"],
    about: "Deepak likes working on backend architecture"
  },
  {
    name: "Nisha Kapoor",
    email: "nisha.kapoor26@test.com",
    mobileNo: "9876500026",
    password: "Nisha@123",
    profile_url: "https://randomuser.me/api/portraits/women/13.jpg",
    skills: ["Angular", "TypeScript", "RxJS"],
    about: "Nisha enjoys building enterprise frontend applications"
  },
  {
    name: "Varun Malhotra",
    email: "varun.malhotra27@test.com",
    mobileNo: "9876500027",
    password: "Varun@123",
    profile_url: "https://randomuser.me/api/portraits/men/14.jpg",
    skills: ["AWS", "Docker", "Node.js"],
    about: "Varun is interested in cloud infrastructure"
  },
  {
    name: "Shreya Jain",
    email: "shreya.jain28@test.com",
    mobileNo: "9876500028",
    password: "Shreya@123",
    profile_url: "https://randomuser.me/api/portraits/women/14.jpg",
    skills: ["React", "Next.js", "Tailwind"],
    about: "Shreya likes creating modern web experiences"
  },
  {
    name: "Harsh Vardhan",
    email: "harsh.vardhan29@test.com",
    mobileNo: "9876500029",
    password: "Harsh@123",
    profile_url: "https://randomuser.me/api/portraits/men/15.jpg",
    skills: ["Go", "Docker", "Kubernetes"],
    about: "Harsh is learning cloud native development"
  },
  {
    name: "Divya Rao",
    email: "divya.rao30@test.com",
    mobileNo: "9876500030",
    password: "Divya@123",
    profile_url: "https://randomuser.me/api/portraits/women/15.jpg",
    skills: ["Python", "Machine Learning", "SQL"],
    about: "Divya enjoys working with data and machine learning"
  },

  {
    name: "Akash Mishra",
    email: "akash.mishra31@test.com",
    mobileNo: "9876500031",
    password: "Akash@123",
    profile_url: "https://randomuser.me/api/portraits/men/16.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    about: "Akash is a full stack developer"
  },
  {
    name: "Muskan Khan",
    email: "muskan.khan32@test.com",
    mobileNo: "9876500032",
    password: "Muskan@123",
    profile_url: "https://randomuser.me/api/portraits/women/16.jpg",
    skills: ["JavaScript", "React", "CSS"],
    about: "Muskan enjoys frontend development"
  },
  {
    name: "Yash Thakur",
    email: "yash.thakur33@test.com",
    mobileNo: "9876500033",
    password: "Yash@123",
    profile_url: "https://randomuser.me/api/portraits/men/17.jpg",
    skills: ["C++", "DSA", "System Design"],
    about: "Yash enjoys solving complex engineering problems"
  },
  {
    name: "Komal Arora",
    email: "komal.arora34@test.com",
    mobileNo: "9876500034",
    password: "Komal@123",
    profile_url: "https://randomuser.me/api/portraits/women/17.jpg",
    skills: ["Figma", "UI Design", "UX"],
    about: "Komal loves designing user friendly products"
  },
  {
    name: "Abhishek Jain",
    email: "abhishek.jain35@test.com",
    mobileNo: "9876500035",
    password: "Abhishek@123",
    profile_url: "https://randomuser.me/api/portraits/men/18.jpg",
    skills: ["Java", "Spring Boot", "MySQL"],
    about: "Abhishek works on backend applications"
  },
  {
    name: "Sakshi Gupta",
    email: "sakshi.gupta36@test.com",
    mobileNo: "9876500036",
    password: "Sakshi@123",
    profile_url: "https://randomuser.me/api/portraits/women/18.jpg",
    skills: ["React", "JavaScript", "Redux"],
    about: "Sakshi likes building responsive interfaces"
  },
  {
    name: "Rishabh Sharma",
    email: "rishabh.sharma37@test.com",
    mobileNo: "9876500037",
    password: "Rishabh@123",
    profile_url: "https://randomuser.me/api/portraits/men/19.jpg",
    skills: ["Node.js", "MongoDB", "Redis"],
    about: "Rishabh enjoys backend engineering"
  },
  {
    name: "Pallavi Singh",
    email: "pallavi.singh38@test.com",
    mobileNo: "9876500038",
    password: "Pallavi@123",
    profile_url: "https://randomuser.me/api/portraits/women/19.jpg",
    skills: ["Python", "Flask", "Docker"],
    about: "Pallavi enjoys developing backend services"
  },
  {
    name: "Saurabh Kumar",
    email: "saurabh.kumar39@test.com",
    mobileNo: "9876500039",
    password: "Saurabh@123",
    profile_url: "https://randomuser.me/api/portraits/men/20.jpg",
    skills: ["AWS", "Docker", "Linux"],
    about: "Saurabh is interested in DevOps and cloud computing"
  },
  {
    name: "Ritika Mehta",
    email: "ritika.mehta40@test.com",
    mobileNo: "9876500040",
    password: "Ritika@123",
    profile_url: "https://randomuser.me/api/portraits/women/20.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
    about: "Ritika enjoys creating beautiful websites"
  },

  {
    name: "Tarun Yadav",
    email: "tarun.yadav41@test.com",
    mobileNo: "9876500041",
    password: "Tarun@123",
    profile_url: "https://randomuser.me/api/portraits/men/21.jpg",
    skills: ["React", "Node.js", "Express"],
    about: "Tarun likes developing full stack applications"
  },
  {
    name: "Shivani Joshi",
    email: "shivani.joshi42@test.com",
    mobileNo: "9876500042",
    password: "Shivani@123",
    profile_url: "https://randomuser.me/api/portraits/women/21.jpg",
    skills: ["React", "TypeScript", "Jest"],
    about: "Shivani enjoys writing reliable frontend applications"
  },
  {
    name: "Gaurav Bansal",
    email: "gaurav.bansal43@test.com",
    mobileNo: "9876500043",
    password: "Gaurav@123",
    profile_url: "https://randomuser.me/api/portraits/men/22.jpg",
    skills: ["Java", "Spring", "PostgreSQL"],
    about: "Gaurav works on scalable backend systems"
  },
  {
    name: "Radhika Sethi",
    email: "radhika.sethi44@test.com",
    mobileNo: "9876500044",
    password: "Radhika@123",
    profile_url: "https://randomuser.me/api/portraits/women/22.jpg",
    skills: ["UI Design", "Figma", "UX"],
    about: "Radhika is passionate about product design"
  },
  {
    name: "Kunal Sharma",
    email: "kunal.sharma45@test.com",
    mobileNo: "9876500045",
    password: "Kunal@123",
    profile_url: "https://randomuser.me/api/portraits/men/23.jpg",
    skills: ["Python", "FastAPI", "MongoDB"],
    about: "Kunal likes developing fast APIs"
  },
  {
    name: "Monika Patel",
    email: "monika.patel46@test.com",
    mobileNo: "9876500046",
    password: "Monika@123",
    profile_url: "https://randomuser.me/api/portraits/women/23.jpg",
    skills: ["React", "Redux", "CSS"],
    about: "Monika enjoys frontend engineering"
  },
  {
    name: "Naveen Reddy",
    email: "naveen.reddy47@test.com",
    mobileNo: "9876500047",
    password: "Naveen@123",
    profile_url: "https://randomuser.me/api/portraits/men/24.jpg",
    skills: ["Go", "PostgreSQL", "Docker"],
    about: "Naveen is interested in high performance backend systems"
  },
  {
    name: "Tanvi Shah",
    email: "tanvi.shah48@test.com",
    mobileNo: "9876500048",
    password: "Tanvi@123",
    profile_url: "https://randomuser.me/api/portraits/women/24.jpg",
    skills: ["JavaScript", "React", "Next.js"],
    about: "Tanvi enjoys developing modern websites"
  },
  {
    name: "Pranav Kumar",
    email: "pranav.kumar49@test.com",
    mobileNo: "9876500049",
    password: "Pranav@123",
    profile_url: "https://randomuser.me/api/portraits/men/25.jpg",
    skills: ["Node.js", "Express", "Redis"],
    about: "Pranav likes building APIs and backend services"
  },
  {
    name: "Anjali Verma",
    email: "anjali.verma50@test.com",
    mobileNo: "9876500050",
    password: "Anjali@123",
    profile_url: "https://randomuser.me/api/portraits/women/25.jpg",
    skills: ["Python", "Django", "React"],
    about: "Anjali enjoys working across the full stack"
  },

  {
    name: "Dev Sharma",
    email: "dev.sharma51@test.com",
    mobileNo: "9876500051",
    password: "Dev@123",
    profile_url: "https://randomuser.me/api/portraits/men/26.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    about: "Dev enjoys building complete web applications"
  },
  {
    name: "Nandini Rao",
    email: "nandini.rao52@test.com",
    mobileNo: "9876500052",
    password: "Nandini@123",
    profile_url: "https://randomuser.me/api/portraits/women/26.jpg",
    skills: ["Angular", "TypeScript", "RxJS"],
    about: "Nandini works on enterprise frontend applications"
  },
  {
    name: "Raj Malhotra",
    email: "raj.malhotra53@test.com",
    mobileNo: "9876500053",
    password: "Raj@123",
    profile_url: "https://randomuser.me/api/portraits/men/27.jpg",
    skills: ["Java", "Spring Boot", "Kafka"],
    about: "Raj is interested in distributed systems"
  },
  {
    name: "Ishita Jain",
    email: "ishita.jain54@test.com",
    mobileNo: "9876500054",
    password: "Ishita@123",
    profile_url: "https://randomuser.me/api/portraits/women/27.jpg",
    skills: ["Figma", "UI Design", "UX"],
    about: "Ishita loves creating user friendly designs"
  },
  {
    name: "Varun Sharma",
    email: "varun.sharma55@test.com",
    mobileNo: "9876500055",
    password: "Varun@123",
    profile_url: "https://randomuser.me/api/portraits/men/28.jpg",
    skills: ["AWS", "Docker", "Kubernetes"],
    about: "Varun enjoys cloud engineering"
  },
  {
    name: "Preeti Gupta",
    email: "preeti.gupta56@test.com",
    mobileNo: "9876500056",
    password: "Preeti@123",
    profile_url: "https://randomuser.me/api/portraits/women/28.jpg",
    skills: ["React", "JavaScript", "Tailwind"],
    about: "Preeti enjoys building responsive interfaces"
  },
  {
    name: "Ashish Kumar",
    email: "ashish.kumar57@test.com",
    mobileNo: "9876500057",
    password: "Ashish@123",
    profile_url: "https://randomuser.me/api/portraits/men/29.jpg",
    skills: ["Python", "FastAPI", "PostgreSQL"],
    about: "Ashish enjoys backend development"
  },
  {
    name: "Sonia Mehta",
    email: "sonia.mehta58@test.com",
    mobileNo: "9876500058",
    password: "Sonia@123",
    profile_url: "https://randomuser.me/api/portraits/women/29.jpg",
    skills: ["React", "Redux", "TypeScript"],
    about: "Sonia likes building scalable frontend applications"
  },
  {
    name: "Vivek Singh",
    email: "vivek.singh59@test.com",
    mobileNo: "9876500059",
    password: "Vivek@123",
    profile_url: "https://randomuser.me/api/portraits/men/30.jpg",
    skills: ["C++", "DSA", "System Design"],
    about: "Vivek enjoys solving challenging technical problems"
  },
  {
    name: "Rhea Kapoor",
    email: "rhea.kapoor60@test.com",
    mobileNo: "9876500060",
    password: "Rhea@123",
    profile_url: "https://randomuser.me/api/portraits/women/30.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
    about: "Rhea enjoys frontend development and design"
  },

  {
    name: "Manav Gupta",
    email: "manav.gupta61@test.com",
    mobileNo: "9876500061",
    password: "Manav@123",
    profile_url: "https://randomuser.me/api/portraits/men/31.jpg",
    skills: ["Node.js", "MongoDB", "Express"],
    about: "Manav enjoys backend development"
  },
  {
    name: "Swati Sharma",
    email: "swati.sharma62@test.com",
    mobileNo: "9876500062",
    password: "Swati@123",
    profile_url: "https://randomuser.me/api/portraits/women/31.jpg",
    skills: ["React", "Next.js", "TypeScript"],
    about: "Swati enjoys modern frontend technologies"
  },
  {
    name: "Amit Verma",
    email: "amit.verma63@test.com",
    mobileNo: "9876500063",
    password: "Amit@123",
    profile_url: "https://randomuser.me/api/portraits/men/33.jpg",
    skills: ["Java", "Spring Boot", "MySQL"],
    about: "Amit enjoys building enterprise applications"
  },
  {
    name: "Kriti Singh",
    email: "kriti.singh64@test.com",
    mobileNo: "9876500064",
    password: "Kriti@123",
    profile_url: "https://randomuser.me/api/portraits/women/32.jpg",
    skills: ["UI Design", "Figma", "UX"],
    about: "Kriti enjoys designing simple user experiences"
  },
  {
    name: "Rajat Kumar",
    email: "rajat.kumar65@test.com",
    mobileNo: "9876500065",
    password: "Rajat@123",
    profile_url: "https://randomuser.me/api/portraits/men/34.jpg",
    skills: ["Python", "Django", "Celery"],
    about: "Rajat likes building reliable backend systems"
  },
  {
    name: "Mansi Shah",
    email: "mansi.shah66@test.com",
    mobileNo: "9876500066",
    password: "Mansi@123",
    profile_url: "https://randomuser.me/api/portraits/women/33.jpg",
    skills: ["React", "JavaScript", "CSS"],
    about: "Mansi enjoys creating beautiful frontend experiences"
  },
  {
    name: "Siddharth Jain",
    email: "siddharth.jain67@test.com",
    mobileNo: "9876500067",
    password: "Siddharth@123",
    profile_url: "https://randomuser.me/api/portraits/men/35.jpg",
    skills: ["Go", "Docker", "Kubernetes"],
    about: "Siddharth is interested in cloud native technologies"
  },
  {
    name: "Ayesha Khan",
    email: "ayesha.khan68@test.com",
    mobileNo: "9876500068",
    password: "Ayesha@123",
    profile_url: "https://randomuser.me/api/portraits/women/34.jpg",
    skills: ["React", "Redux", "JavaScript"],
    about: "Ayesha enjoys building interactive applications"
  },
  {
    name: "Rohit Saini",
    email: "rohit.saini69@test.com",
    mobileNo: "9876500069",
    password: "Rohit@123",
    profile_url: "https://randomuser.me/api/portraits/men/36.jpg",
    skills: ["Node.js", "Express", "PostgreSQL"],
    about: "Rohit likes designing backend APIs"
  },
  {
    name: "Payal Agarwal",
    email: "payal.agarwal70@test.com",
    mobileNo: "9876500070",
    password: "Payal@123",
    profile_url: "https://randomuser.me/api/portraits/women/35.jpg",
    skills: ["Python", "Machine Learning", "SQL"],
    about: "Payal enjoys working with data"
  },

  {
    name: "Ankit Sharma",
    email: "ankit.sharma71@test.com",
    mobileNo: "9876500071",
    password: "Ankit@123",
    profile_url: "https://randomuser.me/api/portraits/men/37.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    about: "Ankit is passionate about full stack development"
  },
  {
    name: "Juhi Verma",
    email: "juhi.verma72@test.com",
    mobileNo: "9876500072",
    password: "Juhi@123",
    profile_url: "https://randomuser.me/api/portraits/women/36.jpg",
    skills: ["Angular", "TypeScript", "CSS"],
    about: "Juhi enjoys enterprise frontend development"
  },
  {
    name: "Sameer Khan",
    email: "sameer.khan73@test.com",
    mobileNo: "9876500073",
    password: "Sameer@123",
    profile_url: "https://randomuser.me/api/portraits/men/38.jpg",
    skills: ["Java", "Spring", "Kafka"],
    about: "Sameer enjoys distributed backend systems"
  },
  {
    name: "Pallavi Mehta",
    email: "pallavi.mehta74@test.com",
    mobileNo: "9876500074",
    password: "Pallavi@123",
    profile_url: "https://randomuser.me/api/portraits/women/37.jpg",
    skills: ["Figma", "UI Design", "UX"],
    about: "Pallavi enjoys product and interface design"
  },
  {
    name: "Yuvraj Singh",
    email: "yuvraj.singh75@test.com",
    mobileNo: "9876500075",
    password: "Yuvraj@123",
    profile_url: "https://randomuser.me/api/portraits/men/39.jpg",
    skills: ["C++", "DSA", "Algorithms"],
    about: "Yuvraj enjoys competitive programming"
  },
  {
    name: "Shalini Rao",
    email: "shalini.rao76@test.com",
    mobileNo: "9876500076",
    password: "Shalini@123",
    profile_url: "https://randomuser.me/api/portraits/women/38.jpg",
    skills: ["React", "Next.js", "Tailwind"],
    about: "Shalini enjoys creating modern websites"
  },
  {
    name: "Nitin Gupta",
    email: "nitin.gupta77@test.com",
    mobileNo: "9876500077",
    password: "Nitin@123",
    profile_url: "https://randomuser.me/api/portraits/men/40.jpg",
    skills: ["AWS", "Docker", "Linux"],
    about: "Nitin is interested in DevOps and infrastructure"
  },
  {
    name: "Sanya Kapoor",
    email: "sanya.kapoor78@test.com",
    mobileNo: "9876500078",
    password: "Sanya@123",
    profile_url: "https://randomuser.me/api/portraits/women/39.jpg",
    skills: ["JavaScript", "React", "Node.js"],
    about: "Sanya enjoys full stack development"
  },
  {
    name: "Akshay Patel",
    email: "akshay.patel79@test.com",
    mobileNo: "9876500079",
    password: "Akshay@123",
    profile_url: "https://randomuser.me/api/portraits/men/41.jpg",
    skills: ["Python", "FastAPI", "Redis"],
    about: "Akshay likes building fast backend services"
  },
  {
    name: "Poonam Joshi",
    email: "poonam.joshi80@test.com",
    mobileNo: "9876500080",
    password: "Poonam@123",
    profile_url: "https://randomuser.me/api/portraits/women/40.jpg",
    skills: ["React", "Redux", "TypeScript"],
    about: "Poonam enjoys frontend engineering"
  },

  {
    name: "Suresh Kumar",
    email: "suresh.kumar81@test.com",
    mobileNo: "9876500081",
    password: "Suresh@123",
    profile_url: "https://randomuser.me/api/portraits/men/42.jpg",
    skills: ["Java", "Spring Boot", "PostgreSQL"],
    about: "Suresh works on backend applications"
  },
  {
    name: "Nikita Sharma",
    email: "nikita.sharma82@test.com",
    mobileNo: "9876500082",
    password: "Nikita@123",
    profile_url: "https://randomuser.me/api/portraits/women/41.jpg",
    skills: ["UI Design", "Figma", "UX"],
    about: "Nikita enjoys creating clean product designs"
  },
  {
    name: "Harshit Verma",
    email: "harshit.verma83@test.com",
    mobileNo: "9876500083",
    password: "Harshit@123",
    profile_url: "https://randomuser.me/api/portraits/men/43.jpg",
    skills: ["Node.js", "MongoDB", "Redis"],
    about: "Harshit likes working with backend technologies"
  },
  {
    name: "Roshni Singh",
    email: "roshni.singh84@test.com",
    mobileNo: "9876500084",
    password: "Roshni@123",
    profile_url: "https://randomuser.me/api/portraits/women/42.jpg",
    skills: ["React", "JavaScript", "CSS"],
    about: "Roshni enjoys frontend development"
  },
  {
    name: "Chirag Mehta",
    email: "chirag.mehta85@test.com",
    mobileNo: "9876500085",
    password: "Chirag@123",
    profile_url: "https://randomuser.me/api/portraits/men/44.jpg",
    skills: ["Go", "Docker", "PostgreSQL"],
    about: "Chirag is interested in scalable backend systems"
  },
  {
    name: "Kiran Patel",
    email: "kiran.patel86@test.com",
    mobileNo: "9876500086",
    password: "Kiran@123",
    profile_url: "https://randomuser.me/api/portraits/women/43.jpg",
    skills: ["Python", "Django", "SQL"],
    about: "Kiran enjoys backend and database development"
  },
  {
    name: "Abhinav Sharma",
    email: "abhinav.sharma87@test.com",
    mobileNo: "9876500087",
    password: "Abhinav@123",
    profile_url: "https://randomuser.me/api/portraits/men/46.jpg",
    skills: ["React", "Next.js", "Node.js"],
    about: "Abhinav enjoys developing complete web applications"
  },
  {
    name: "Shweta Gupta",
    email: "shweta.gupta88@test.com",
    mobileNo: "9876500088",
    password: "Shweta@123",
    profile_url: "https://randomuser.me/api/portraits/women/45.jpg",
    skills: ["Angular", "TypeScript", "RxJS"],
    about: "Shweta enjoys modern frontend technologies"
  },
  {
    name: "Rajat Singh",
    email: "rajat.singh89@test.com",
    mobileNo: "9876500089",
    password: "Rajat@123",
    profile_url: "https://randomuser.me/api/portraits/men/47.jpg",
    skills: ["Java", "Spring Boot", "MySQL"],
    about: "Rajat works on enterprise backend applications"
  },
  {
    name: "Sonal Jain",
    email: "sonal.jain90@test.com",
    mobileNo: "9876500090",
    password: "Sonal@123",
    profile_url: "https://randomuser.me/api/portraits/women/46.jpg",
    skills: ["React", "Redux", "JavaScript"],
    about: "Sonal enjoys creating interactive web applications"
  },

  {
    name: "Kartik Yadav",
    email: "kartik.yadav91@test.com",
    mobileNo: "9876500091",
    password: "Kartik@123",
    profile_url: "https://randomuser.me/api/portraits/men/48.jpg",
    skills: ["C++", "DSA", "System Design"],
    about: "Kartik enjoys solving complex programming problems"
  },
  {
    name: "Ritu Sharma",
    email: "ritu.sharma92@test.com",
    mobileNo: "9876500092",
    password: "Ritu@123",
    profile_url: "https://randomuser.me/api/portraits/women/47.jpg",
    skills: ["Figma", "UI Design", "UX"],
    about: "Ritu enjoys product design"
  },
  {
    name: "Dhruv Mehta",
    email: "dhruv.mehta93@test.com",
    mobileNo: "9876500093",
    password: "Dhruv@123",
    profile_url: "https://randomuser.me/api/portraits/men/49.jpg",
    skills: ["Node.js", "Express", "MongoDB"],
    about: "Dhruv enjoys developing REST APIs"
  },
  {
    name: "Bhavna Kapoor",
    email: "bhavna.kapoor94@test.com",
    mobileNo: "9876500094",
    password: "Bhavna@123",
    profile_url: "https://randomuser.me/api/portraits/women/48.jpg",
    skills: ["React", "TypeScript", "Tailwind"],
    about: "Bhavna enjoys building modern interfaces"
  },
  {
    name: "Lokesh Kumar",
    email: "lokesh.kumar95@test.com",
    mobileNo: "9876500095",
    password: "Lokesh@123",
    profile_url: "https://randomuser.me/api/portraits/men/50.jpg",
    skills: ["Python", "Django", "PostgreSQL"],
    about: "Lokesh likes building backend applications"
  },
  {
    name: "Alisha Khan",
    email: "alisha.khan96@test.com",
    mobileNo: "9876500096",
    password: "Alisha@123",
    profile_url: "https://randomuser.me/api/portraits/women/49.jpg",
    skills: ["JavaScript", "React", "CSS"],
    about: "Alisha enjoys frontend development"
  },
  {
    name: "Mayank Sharma",
    email: "mayank.sharma97@test.com",
    mobileNo: "9876500097",
    password: "Mayank@123",
    profile_url: "https://randomuser.me/api/portraits/men/51.jpg",
    skills: ["AWS", "Docker", "Kubernetes"],
    about: "Mayank is interested in cloud technologies"
  },
  {
    name: "Garima Verma",
    email: "garima.verma98@test.com",
    mobileNo: "9876500098",
    password: "Garima@123",
    profile_url: "https://randomuser.me/api/portraits/women/50.jpg",
    skills: ["Python", "Machine Learning", "SQL"],
    about: "Garima enjoys data science and machine learning"
  },
  {
    name: "Himanshu Singh",
    email: "himanshu.singh99@test.com",
    mobileNo: "9876500099",
    password: "Himanshu@123",
    profile_url: "https://randomuser.me/api/portraits/men/52.jpg",
    skills: ["Java", "Spring Boot", "Kafka"],
    about: "Himanshu enjoys backend architecture"
  },
  {
    name: "Kajal Gupta",
    email: "kajal.gupta100@test.com",
    mobileNo: "9876500100",
    password: "Kajal@123",
    profile_url: "https://randomuser.me/api/portraits/women/51.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    about: "Kajal enjoys full stack development"
  }
];