import budgetTrackerPic from '../assets/images/projects/budget-tracker.png';
import myJoberPic from '../assets/images/projects/myJober.png';
import notepadPic from '../assets/images/projects/notepad.png';
import bSafePic from '../assets/images/projects/bsafe.png';
import chatNlearnPic from '../assets/images/projects/chat-n-learn.png';
import teamProfileGeneratorPic from '../assets/images/projects/team-profile-generator.png';
import bookSearchPic from '../assets/images/projects/book-search.png';
import weatherDashPic from '../assets/images/projects/weather.png';
import eCommercePic from '../assets/images/projects/e-commerce.png';



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
  `The budget tracker is an application that allows users to track their income and expenditures though a simple and intuitive interface. Users will simply enter a transaction then will be presented with a graphical representation of their budget.
   Data for the budget tracker app is persisted in a database so consecutice visits to the budget tracker will still show their previously entered transactions. Users may also still make transactions offline to be later stored in the database once the app reconnects to the internet. `,
  'JavaScript | Express.js | Node.js | MongoDB | Mongoose',
   budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const myJoberCard = new ProjectCard(
  'myJober',
  `myJober is a platform which allows users to post short-term jobs they need help with, and also accept jobs that other users have posted.
   Any user can post a short-term job offer and choose from many reliable workers who have requested the job. Additionaly, every registered user has an access to the dashboard, and able to contact post creator to get the job and earn some extra cash when needed.
  
   * This project is currently in development`,
  'React | Express.js | Node.js | MongoDB',
   myJoberPic,
  'https://my-jober.web.app/',
  'https://github.com/butsnieva/myJober'
);

const notepadCard = new ProjectCard(
  'Notepad',
  `Notepad is a full-stack note-taking application, built with Express.js, that allow the user to write, save, and delete notes.
   All saved notes can be accessed from any browser or computer and through any window closure or computer reset. This is accomplished by using server side code and npm packages to write all the notes to a .json file that is affiliated with the webpage's server.`,
  'JavaScript | CSS | Express.js | Node.js | Bootstrap',
   notepadPic,
  'https://bk-note-taker.herokuapp.com/',
  'https://github.com/butsnieva/note_taker'
);

const bSafeCard = new ProjectCard(
  'b.safe',
  `This application was developed to monitor the density of COVID-19 cases by county. The app will additionally show the heat map of confirmed COVID-19 cases for each country.
   This application is meant to be your hub for information about the Coronavirus pandemic, so you can make the best decision possible when traveling out of the country again.`,
  'HTML | CSS | JavaScript | jQuery | Bulma',
   bSafePic,
  'https://ewebber283.github.io/B-Safe/',
  'https://github.com/ewebber283/B-Safe'
);

const chatAndLearnCard = new ProjectCard(
  "Chat 'n Learn ",
  `An international chat application which allows users to communicate with people around the world in different languages.
   During account creation user can choose the language he wants to learn (e.g Spanish), and his native language (e.g. English). The app will provide a list of matching users who are native in Spanish, and also wants to learn English. Chat 'n Learn is a great way to help others learn and get to know each other.
   * This project is currently in development
`,
  'JavaScript | Handlebars | Express.js | Node.js | Socket.io',
   chatNlearnPic,
  'https://chatnlearn.herokuapp.com/',
  'https://github.com/Chrisdocs/ChatnLearn'
);

const teamProfileGeneratorCard = new ProjectCard(
  'Team profile generator',
  `Team Profile Generator is a command-line-interface application, that allows the user to easily generate a team profile webpage, featuring summaries of their team members. All they have to do is answer a series of prompted quesitons on the command line about each members, and an HTML file will automatically be generated.
   The user is first prompted to answer questions about their team manager. Then they may add as many engineers and interns as they like. When they have finished - they may open up their generated html document in the browser and view their new team profile!`,
  'JavaScript | Node.js | MySQL',
   teamProfileGeneratorPic,
  '',
  'https://github.com/butsnieva/team-profile-generator'
);

const bookSearchCard = new ProjectCard(
  'Book Search',
  `The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. 
  It's set up to allow users to sign up, login, and save books to a persoanl list. The application is built using Google Books API search engine build with GraphQL API and Apollo Server. `,
  'React | Express.js | Node.js | MongoDB',
   bookSearchPic,
  'https://bk-book-search.herokuapp.com/',
  'https://github.com/butsnieva/book-search-engine'
);

const weatherDashCard = new ProjectCard(
  'Weather Dashboard',
  `This application allows the user to search for a city and be presented with the current and future weather conditions. The current conditions include temperature, humidity, windspeed and UV index of that city. The UV index is color coded in order to represent if conditions are favorable, moderate, or severe.
   When the user searches for a city, it is added to their search history and a button is created that the user may click on to revisit the conditions for that city. When the user refreshes the page their search history will persist and they will be presented with the weather for the last city they searched for.`,
  'CSS | JavaScript | jQuery | Moment.js | Bootstrap',
   weatherDashPic,
  'https://butsnieva.github.io/weather-dashboard/',
  'https://github.com/butsnieva/weather-dashboard'
);

const eCommerceBackendCard = new ProjectCard(
  'E-commerce backend',
  `The E-commerce Backend is strictly a backend application that uses Sequelize to query an inventory database. The database contains information for products, categories of products, and tags.
   Users can get all information from a table, get an item from a table by id, update information in a table, and lastly delete any item. This makes the application total CRUD!`,
  'JavaScript | Node.js | MySQL | Sequelize | Express.js',
  eCommercePic,
  '',
  'https://github.com/butsnieva/e-commerce'
);

const portfolioGeneratorCard = new ProjectCard(
  'Git It Done',
  ``,
  '',

  '',
  ''
)

let portfolioData = [
  myJoberCard, 
  budgetTrackerCard,
  bookSearchCard,
  eCommerceBackendCard,
  notepadCard,
  teamProfileGeneratorCard,
  bSafeCard,
  weatherDashCard,
];

export default portfolioData;
