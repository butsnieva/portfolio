import budgetTrackerPic from '../assets/images/projects/budget-tracker.png';


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
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const myJoberCard = new ProjectCard(
  'myJober',
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const notepadCard = new ProjectCard(
  'Notepad',
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const bSafeCard = new ProjectCard(
  'b.safe',
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const chatAndLearnCard = new ProjectCard(
  "Chat 'n Learn ",
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const teamProfileGeneratorCard = new ProjectCard(
  'Team profile generator',
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);

const bookSearchCard = new ProjectCard(
  'Book Search',
  'Progressive web application that allows users to track their budgets by adding expenses and deposits to their budget with or without an internet connection. Transactions stored offline are transferred to the database when the app is reconnected to the internet.',
  'JavaScript Express.js Node.js MongoDB Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);


let portfolioData = [budgetTrackerCard, chatAndLearnCard, myJoberCard, bookSearchCard, notepadCard, teamProfileGeneratorCard, bSafeCard];

export default portfolioData;
