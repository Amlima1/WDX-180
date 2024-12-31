const mawuChallenges2025 = {
    description: "Asabeneh Yetayeh challenges",
    challengeTitle: "Asabeneh Yetayeh challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: 2025,
    keywords: [
      "HTML",
      "HTML5",
      "CSS",
      "CSS3",
      "JS",
      "JavaScript",
      "ES6",
      "Promise",
      "async await",
      "Database",
      "React",
      "React Hooks",
      "Context API",
      "React Router",
      "Web Storage",
      "localStorage",
      "sessionStorage",
      "Redux",
      "Node",
      "MongoDB",
      "SQL",
      "API",
      "DOM",
      "data science",
      "MERN",
      "Python",
      "Flask",
      "Statistics",
      "Linear Algebra",
      "Numpy",
      "Pandas",
      "Scipy",
      "Scikit-learn",
      "Visualization",
      "D3.js",
    ],
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      titles: [
        ["🌱", "Educator"],
        ["💻", "Programmer"],
        ["🌐", "Developer"],
        ["🔥", "Motivator"],
        ["📔", "Content Creator"],
      ],
      qualifications: [
        "💻MSc. Computer Science Ongoing",
        "🧑‍🎓BSc. Information and Communication Eng.",
        "🧑‍🎓MSc. Food Technology",
        "🧑‍🎓BSc.Food Technology",
      ],
      socialLinks: [
        {
          social: "LinkedIn",
          url: "https://www.linkedin.com/in/asabeneh/",
          fontawesomeIcon: '<i class="fab fa-linkedin">',
        },
        {
          social: "Twitter",
          url: "https://twitter.com/Asabeneh",
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
        },
        {
          social: "Github",
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: "https://github.com/Asabeneh",
        },
        {
          social: "DEV.to",
          fontawesomeIcon: "",
          url: "https://dev.to/asabeneh",
        },
      ],
      skills: [
        "Web Development",
        "Data Analysis",
        "Data Visualization",
        "Programming",
        "Databases",
        "Developing API",
      ],
      bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
    },
  challenges: [
      {
        name: "30 Days Of Python",
        topics: [
          "Python",
          "Flask",
          "Numpy",
          "Pandas",
          "Statistics",
          "API",
          "MongoDB",
        ],
        days: 30,
        status: "Done",
        questions: "Above 500",
        projects: "Two",
        interviewQns: "",
        githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
        summary:"Python"
      },
      {
        name: "30 Days Of JavaScript",
        topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
        days: 30,
        status: "Ongoing",
        questions: "Above 500",
        projects: "About 30",
        interviewQns: "",
        githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
        summary:"JavaScript"
      },
      {
        name: "30 Days Of HTML & CSS",
        topics: ["CSS", "Flex", "Grid", "CSS Animation"],
        days: 30,
        status: "Coming",
        questions: "Above 500",
        projects: "Two",
        interviewQns: "",
        githubUrl: "",
        summary:"HTML & CSS"
      },
      {
        name: "30 Days Of React",
        topics: [
          "React",
          "React Router",
          "Redux",
          "Context API",
          "React Hooks",
          "MERN",
        ],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        summary:"React"
      },
      {
        name: "30 Days Of ReactNative",
        topics: ["ReactNative", "Redux"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "Two",
        interviewQns: "",
        githubUrl: "",
        summary:"ReactNative"
      },
      {
        name: "30 Days Of Fullstack",
        topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        summary:"Fullstack"
      },
      {
        name: "30 Days Of Data Analysis",
        topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        summary:"Data Analysis"
      },
      {
        name: "30 Days Of Machine Learning",
        topics: [
          "Python",
          "Numpy",
          "Pandas",
          "Scikit-learn",
          "Scipy",
          "Linear Algebra",
          "Statistics",
          "Visualization",
        ],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        summary:"Machine Learning"
      },
    ],
  };
  
  //console.log(asabenehChallenges2020);
  // INSERT YOUR CODE HERE
  //AS REFERENCE IN THE FOLLOWING CODE, I WILL USE HTML ELEMENT LIKE:
  // h2 TO CREATE THE ELEMENT AND h2Element  TO SELECT IT
  
  // PART 1: CREATING THE HTML ELEMENTS AND INSERTING THEM ON THE PAGE AND ALSO RENDERING 
  // THEIR innerHTMLs and textContents
  
  // here is the selection of the body element
  const bodyElement = document.body;
  console.log(bodyElement);
  
  
  // select the wrapper div element
  const wrapper = document.querySelector('.wrapper');
  wrapper.style.display = 'grid';
  wrapper.style.placeItems = 'center';
   
  const h2 = document.createElement('h2'); // create the h2 element
  h2.classList.add('js-h2-element'); // add a class to the h2 element for selection but not yet selected
  wrapper.appendChild(h2);// insert the h2 element on the page before the wrapper
  h2.innerHTML = `${mawuChallenges2025.challengeTitle} in <span class="new-year"> ${mawuChallenges2025.challengeYear} </span>`;
  console.log(h2);
  console.log(h2.innerHTML);
  h2.style.textAlign = 'center';
  
  
  // select the h2 element with its class name after rendering it on the page
  const h2Element = document.querySelector('.js-h2-element');
  
  const newYearSpan = document.querySelector('.new-year'); // select the span inside h2 element
  console.log(newYearSpan);
  console.log(newYearSpan.textContent);
  newYearSpan.style.fontSize = '50px'
  // List of colors to cycle through
  const yearColors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
  let colorIndex = 0;

  // Change the colors of the year 2025 every second
  setInterval(() => {
    newYearSpan.style.color = yearColors[colorIndex]; // Set the new color
    colorIndex = (colorIndex + 1) % yearColors.length; // Update index and loop through the colors
  }, 1000);

  
  const h3 = document.createElement('h3'); // create the h3 element
  h3.classList.add('js-h3-element'); // add a class to the h3 element
  wrapper.appendChild(h3); // insert h3 before the wrapper div
  h3.textContent = mawuChallenges2025.challengeSubtitle;
  console.log(h3);
  console.log(h3.textContent);
  h3.style.textAlign = 'center';
  h3.style.marginTop = '-5px';
  
  const h4 = document.createElement('h4'); // create the h4 element
  h4.classList.add('datetime'); // add a class to the h4 element
  wrapper.appendChild(h4); // insert h4 before the wrapper div
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  const h4Element = document.querySelector('.datetime');
  h4Element.textContent = currentDateTime;
  console.log(h4);
  console.log(h4.textContent);
  

  const dateColors = ['pink', 'orange', 'green', 'blue', 'purple', 'red'];
  function styleH4(){
    h4.style.width = '170px';
    h4.style.height = '22px';
    h4.style.padding = '5px'
    h4.style.textAlign = 'center';
    h4.style.marginTop = '-10px';
    h4.style.backgroundColor = dateColors[colorIndex]; //set the new colors
    colorIndex = (colorIndex + 1) % dateColors.length; // update index and loop through the colors
  }

  setInterval(styleH4, 1000);
  
  
  // RENDING THE CHALLENGES PART OF THE ARRAY
  
  mawuChallenges2025.challenges.forEach(challenge => {
        const p = document.createElement('p');
        p.classList.add('challenge');
        p.style.display = 'flex';
        p.style.justifyContent = 'space-between';
        p.style.width = '45%';
        p.style.height = 'auto';
        p.style.padding = '25px'
        p.style.textAlign = 'center';
        p.style.margin = '1px';
        

        const spanName = document.createElement('span');
        spanName.classList.add('span-name');
        spanName.textContent = challenge.name;
        p.appendChild(spanName);


        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = challenge.summary;
        details.appendChild(summary);
        
        const ul = document.createElement('ul');
        ul.style.display = 'inline-block';
        ul.style.textAlign = 'left';
        ul.style.paddingLeft = '0px';
        challenge.topics.forEach(topic => {
            const li = document.createElement('li');
            li.style.listStyleType = 'none';
            li.textContent = topic;
            ul.appendChild(li);
        });
        details.appendChild(ul);
        p.appendChild(details);

        const spanStatus = document.createElement('span');
        spanStatus.textContent = challenge.status;
        p.appendChild(spanStatus);

        wrapper.appendChild(p);

    });

    const pElements = document.querySelectorAll('.challenge'); // selection of all the p with className 'challenge'
    for(let i = 0; i < pElements.length; i++){
        pElements[i].style.backgroundColor = '#eb695b';
        pElements[0].style.backgroundColor = '#5bbc7a';
        pElements[0].style.marginTop = '-10px';
        pElements[1].style.backgroundColor = '#f7dc5c';
    }

    const spanNames = document.querySelectorAll('.span-name');
        for(let i = 0; i < spanNames.length; i++){
            spanNames[0].style.textDecoration = 'underline';
            spanNames[1].style.textDecoration = 'underline';
        }
    
  
  
  // display the author name
  const authorNameDiv = document.createElement('div');
  authorNameDiv.classList.add('author-name-div');
  wrapper.appendChild(authorNameDiv);
  const authorNameDivElement = document.querySelector('.author-name-div');
  authorNameDivElement.textContent = `${mawuChallenges2025.author.firstName} ${mawuChallenges2025.author.lastName}`;
  console.log(authorNameDivElement);
  authorNameDiv.style.fontSize = '27px';
  authorNameDiv.style.fontWeight = 'bold';
  authorNameDiv.style.marginTop = '15px';
  authorNameDiv.style.marginBottom = '10px';
  
  
  // display the author social media icons
  const mediaIconsDiv = document.createElement('div');
  mediaIconsDiv.classList.add('media-icons-div');
  wrapper.appendChild(mediaIconsDiv);
  mediaIconsDiv.style.paddingInline = '15px';
  const mediaIconsDivElement = document.querySelector('.media-icons-div');
  mediaIconsDivElement.innerHTML = `
      <a class="social" href="${mawuChallenges2025.author.socialLinks[0].url}">
        <img src="./linkedin.png" alt="${mawuChallenges2025.author.socialLinks[0].social}">
      </a>
  
      <a class="social" href="${mawuChallenges2025.author.socialLinks[1].url}">
        <img src="./twitter.png" alt="${mawuChallenges2025.author.socialLinks[1].social}">
      </a>
  
      <a class="social" href="${mawuChallenges2025.author.socialLinks[2].url}">
        <img src="./github.png" alt="${mawuChallenges2025.author.socialLinks[2].social}">
      </a> 
  `;
  
  const aElements = document.querySelectorAll('.social');
  for(let aElement of aElements){
    aElement.style.paddingInline = '7px';
  }

  console.log(mediaIconsDivElement);
  
  // Rendering for the author description which is the author.bio part of the object
  const authorBioP = document.createElement('p');
  authorBioP.classList.add('p-bio-element');
  wrapper.appendChild(authorBioP);
  const authorBioPElement = document.querySelector('.p-bio-element');
  authorBioPElement.textContent = mawuChallenges2025.author.bio;
  authorBioP.style.width = '43%';
  authorBioP.style.marginTop = '40px';
  console.log(authorBioPElement);
  
  // Rendering the titles(t), skills(s), and qualifications(q) part. all in another div (tsqDiv)
  const tsqDiv = document.createElement('div');
  tsqDiv.classList.add('div-tsq');
  wrapper.appendChild(tsqDiv); // Append the div to the wrapper
  tsqDiv.style.display = 'flex';
  tsqDiv.style.justifyContent = 'space-between';
  tsqDiv.style.width = '45%';
  tsqDiv.style.height = 'auto';
  
  // 1- Rendering the titles part
  // Create a ul element to contain the list of titles
  const titlesUl = document.createElement('ul');
  titlesUl.classList.add('ul-titles');
  tsqDiv.appendChild(titlesUl); // Append to tsqDiv
  titlesUl.style.display = 'inline-block';
  titlesUl.style.textAlign = 'left';
  titlesUl.style.paddingLeft = '0px';
  titlesUl.style.listStyleType = 'none';
  
  
  // Add a header for titles
  const titlesHeader = document.createElement('h3');
  titlesHeader.textContent = 'Titles';
  titlesUl.appendChild(titlesHeader);
  
  // Loop through titles and append them
  mawuChallenges2025.author.titles.forEach((title) => {
    const li = document.createElement('li'); // Create li for each title
    li.classList.add('li-titles');
    li.textContent = `${title[0]} - ${title[1]}`; // Use title parts from the array
    titlesUl.appendChild(li); // Append li to ul
  });
  
  // 2- Rendering the skills part
  // Create a ul element to contain the list of skills
  const skillsUl = document.createElement('ul');
  skillsUl.classList.add('ul-skills');
  tsqDiv.appendChild(skillsUl); // Append to tsqDiv
  skillsUl.style.listStyleType = 'none';
  
  // Add a header for skills
  const skillsHeader = document.createElement('h3');
  skillsHeader.textContent = 'Skills';
  skillsUl.appendChild(skillsHeader);
  
  // Loop through skills and append them
  mawuChallenges2025.author.skills.forEach((skill) => {
    const li = document.createElement('li'); // Create li for each skill
    li.classList.add('li-skills');
    li.textContent = `✅${skill}`; // Use skill text directly
    skillsUl.appendChild(li); // Append li to ul
  });
  
  // 3- Rendering the qualifications part
  // Create a ul element to contain the list of qualifications
  const qualificationsUl = document.createElement('ul');
  qualificationsUl.classList.add('ul-qualifications');
  tsqDiv.appendChild(qualificationsUl); // Append to tsqDiv
  qualificationsUl.style.listStyleType = 'none';
  
  // Add a header for titles
  const qualificationsHeader = document.createElement('h3');
  qualificationsHeader.textContent = 'Qualifications';
  qualificationsUl.appendChild(qualificationsHeader);
  
  // Loop through titles and append them
  mawuChallenges2025.author.qualifications.forEach((qualification) => {
    const li = document.createElement('li'); // Create li for each qualification
    li.classList.add('li-qualifications');
    li.textContent = qualification; // Use qualifications parts from the array
    qualificationsUl.appendChild(li); // Append li to ul
  });
  
  // render the Keywords part of the object on the DOM page using div
  const keywordsDiv = document.createElement('div');
  keywordsDiv.classList.add('div-keywords');
  wrapper.appendChild(keywordsDiv); // Append the div to the wrapper
  keywordsDiv.style.width = '40%';

  
  // Add a header for keywords
  const keywordsHeader = document.createElement('h3');
  keywordsHeader.textContent = 'Keywords';
  keywordsDiv.appendChild(keywordsHeader);
  
  
  // add the keywords content inside p element
  const keywordsP = document.createElement('p');
  keywordsP.classList.add('p-keywords');
  keywordsDiv.appendChild(keywordsP);
  //keywordsP.style.height = 'auto';
  keywordsP.style.display = 'flex';
  keywordsP.style.flexWrap = 'wrap';
  keywordsP.style.justifyContent = 'center';
  keywordsP.style.gap = '5px';
  keywordsP.style.marginTop = '-15px';
  
  // render each item of keywords in a span element and append it to keywordsP
  mawuChallenges2025.keywords.forEach((keyword) =>{
    const KeywordsSpan = document.createElement('span');
    KeywordsSpan.classList.add('span-keywords');
    KeywordsSpan.textContent = `#${keyword}`;
    keywordsP.appendChild(KeywordsSpan);
  });

  const keywordsSpans = document.querySelectorAll('.span-keywords');
  const colors = ['#563250', '#43964b', '#e4ec6a', '#bd5e7c', '#d65766', '#6adb92', '#6adb92',
    '#e4fc9b', '#e3e14d', '#c7328f', '#d8abc9', '#ebd462', '#57ac33', '#c8be72', '#1d34b6',
    '#48a031', '#72edbf', '#749185', '#de5d6a', '#757c7d', '#6c9c73', '#ba5366', '#32561d',
    '#bbc8d9', '#a59add', '#7c4747', '#5bc33f', '#985838', '#649ca5', '#988b6c', '#f9e969',
    '#97cae3', '#86db51'];

  for(let i = 0; i < keywordsSpans.length; i++){
    keywordsSpans[i].style.marginLeft = '10px';
    keywordsSpans[i].style.color = '#000';
    keywordsSpans[i].style.fontSize = '10px';
    keywordsSpans[i].style.padding = '8px 12px';
    keywordsSpans[i].style.borderRadius = '15px';
    keywordsSpans[i].style.whiteSpace = 'nowrap';
    keywordsSpans[i].style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    //keywordsSpans[i].style.backgroundColor = '#e3e3e3';
    keywordsSpans[i].style.backgroundColor = colors[i % colors.length];

  }