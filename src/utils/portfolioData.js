import budgetTrackerPic from '../assets/images/projects/budget-tracker.png';
import myJoberPic from '../assets/images/projects/myJober.png';
import notepadPic from '../assets/images/projects/notepad.png';
import bSafePic from '../assets/images/projects/bsafe.png';
import chatNlearnPic from '../assets/images/projects/chat-n-learn.png';
import teamProfileGeneratorPic from '../assets/images/projects/team-profile-generator.png';
import bookSearchPic from '../assets/images/projects/book-search.png';



function ProjectCard(title, about, builtWith, imgURL, siteURL, repoURL) {
  this.title = title;
  this.about = about;
  this.builtWith = builtWith;
  this.imgURL = imgURL;
  this.siteURL = siteURL;
  this.repoURL = repoURL;
}

const budgetTrackerCard = new ProjectCard(
  'Budget Tracker',
  `Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.
  Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.`,
  'JavaScript | Express.js | Node.js | MongoDB | Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const myJoberCard = new ProjectCard(
  'myJober',
  'myJober is a platform which allows users to post short-term jobs they need help with, and also accept jobs that other users have posted. ',
  'React | Express.js | Node.js | MongoDB',
  myJoberPic,
  'https://my-jober.herokuapp.com/',
  'https://github.com/butsnieva/myJober'
);

const notepadCard = new ProjectCard(
  'Notepad',
  'Notepad is a note taking app that allow the user to write, save, and delete notes.',
  'JavaScript | CSS | Express.js | Node.js | Bootstrap',
  notepadPic,
  'https://bk-note-taker.herokuapp.com/',
  'https://github.com/butsnieva/note_taker'
);

const bSafeCard = new ProjectCard(
  'b.safe',
  'With B.SAFE you can view a plethora of information about each country and COVID’s impact. The app will additionally show the heat map of confirmed COVID-19 cases for each country - allowing for you to make the best decision possible when traveling out of the country again.',
  'HTML | CSS | JavaScript | jQuery | Bulma',
  bSafePic,
  'https://ewebber283.github.io/B-Safe/',
  'https://github.com/ewebber283/B-Safe'
);

const chatAndLearnCard = new ProjectCard(
  "Chat 'n Learn ",
  'A web Application which connects users who can help one another learn a new language by communicatingwith those who speak it!',
  'CSS | JavaScript | Handlebars | Express.js | Node.js',
  chatNlearnPic,
  'https://chatnlearn.herokuapp.com/',
  'https://github.com/Chrisdocs/ChatnLearn'
);

const teamProfileGeneratorCard = new ProjectCard(
  'Team profile generator',
  'Team Profile Generator is a command-line-interface application, that allows the user to easily generate a team profile webpage, featuring summaries of their team members. All they have to do is answer a series of prompted quesitons on the command line about each members, and an HTML file will automatically be generated.',
  'JavaScript | Node.js | MySQL',
  teamProfileGeneratorPic,
  'https://github.com/butsnieva/team-profile-generator',
  'https://github.com/butsnieva/team-profile-generator'
);

const bookSearchCard = new ProjectCard(
  'Book Search',
  'This is a MERN applicaiton which searches the Google API for books. It allows users to sign up, login, and save books to a persoanl list.',
  'React | Express.js | Node.js | MongoDB',
  bookSearchPic,
  'https://bk-book-search.herokuapp.com/',
  'https://github.com/butsnieva/book-search-engine'
);


let portfolioData = [
  myJoberCard, 
  budgetTrackerCard,
  chatAndLearnCard,
  bookSearchCard,
  notepadCard,
  teamProfileGeneratorCard,
  bSafeCard,
];

export default portfolioData;
