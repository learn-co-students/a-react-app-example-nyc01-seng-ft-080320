import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */}
          "Now"
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;


//! both `React` and `moment` are npm packages that are being `imported` from the `node_modules` folder
// import React, { Component } from 'react';
// import moment from 'moment';

//!in this case, App.js is importing from files in the same directory as it (hence why they are `./` instead of 'react' and 'moment' above.)
// import ExampleComponent from './ExampleComponent'
// import TestComponent from './TestComponent'
  
  //!App is the parent component while ExampleComponent is a child component
// class App extends Component {
//   render() { //!all JXS code is written within the code block of a render() function... 
//     return ( //!...as the "return" of that code block
//       <div className="App">
//         <header className="App-header">
//           {moment().format('MMMM Do YYYY, hh:mm:ss a')}
//         </header>
//         <p className="App-intro">
//           In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
//           JSX lets us include JavaScript functions right along with the HTML, and also
//           allows us to add in components, which are separate, self-contained chunks of JSX.
//         </p>
//         <ExampleComponent />

//       </div>
//     );
//   }
// }

//!'export' allows OTHER files to import from App.js
// export default App;
//!there are other types of exports besides 'default' 
//!`export default App` is saying that the App class is the main thing to be exported from App.js
//! only one default export per file

