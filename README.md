Run "npm start" or "yarn start" to start. It should automatically open up in localhost:3000.

FEATURES TO NOTE:

  1. Mock API Request:
    Upon App ComponentDidMount, it makes a synthetic async request call with use of a SetTimeout function with a random delay.

  2. Semantic UI:
    I utilized the (react) semantic UI library to quickly give the app a modern look.

  3. React:
    I built this app with React.js framework by managing application state in the App component. I built and glued components together and passed respective props to each component.
    

  4. React State:
    this.state = {
      predictionLabels: [],
      searchTerm: '',
      minScore: 70,
      videoStreams: [],
      selectedVideoStream: '',
      events: {'': []},
    }

    Organizing state is a design art itself and should be carefully thought out to optimize code complexity for time and space tradeoff.

  5. Events Index
    filter + map to display list of event cards

  6. Error reporting
    click on prediction box and a popup will display.
    Not functional but theroically will make an API POST request to write to backend server.