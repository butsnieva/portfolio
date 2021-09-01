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
  'JavaScript, Express.js, Node.js ,MongoDB, Mongoose',
  budgetTrackerPic,
  'https://budget-tracker-kb.herokuapp.com/',
  'https://github.com/butsnieva/budget-tracker'
);


let portfolioData = [budgetTrackerCard,];

export default portfolioData;
