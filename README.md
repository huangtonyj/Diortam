Run "npm start" or "yarn start" to start. It should automatically open up in localhost:3000.

FEATURES HIGHLIGHT:

  1. Mock API Request and ComponentDidMount:
    Upon <App/> ComponentDidMount, it makes a synthetic async request call with use of a SetTimeout function with a random delay.
    
    After data has been received, it dissects the and organizes the data for easy filter. To be discussed in section 4.

  2. Semantic UI:
    I utilized the (react) semantic UI library to quickly give the app a modern look.

  3. React:
    I built this app with React.js framework by managing application state in the <App/> component. I built and glued components together and passed respective props to each component.
    
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

    When data is recieved, I reorganized as follow:
      predictionLabels: [Steph Curry, Draymond Green, Bus, etc...] for quick filter dropdown

      videoStreams: [Warriors, Bus Stop, Vet Hospital] for quick filtering of selected video source

      events:
        {
          videoSource1: [
            event1: {
              imageSource: "http://somesite.com/asdf.png,
              predictions: [
                {boundingBox, scores}
              ],
              timestamp: 1234567890
            },
            event2: {
              imageSource: "http://somesite.com/asdf.png,
              predictions: [
                {boundingBox, scores}
              ],
              timestamp: 1234567890
            },
          ],
          videoSource2: [
            event1: {
              imageSource: "http://somesite.com/asdf.png,
              predictions: [
                {boundingBox, scores}
              ],
              timestamp: 1234567890
            }
          ]
        }

  5. <EventIndex/> component
    In the <EventIndex/> component, there is a function to take incoming array of selected VideoSource events. If a filter label was selected, it will filter that array and then return an array of mapped <EventCard/> component.

  6. Error reporting
    Hover over the <PredictionBox/> and popup will display upon click.
    It presents two button to report accurate or error prediction. It is currently not functional but theroically will make an API POST request to write to backend server.