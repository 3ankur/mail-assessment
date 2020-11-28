import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const SignIn = React.lazy(()=> import('./components/SignInForm'));
const SignUp = React.lazy(()=> import('./components/SignUpForm'));
const MailContainer = React.lazy(()=> import('./components/MailContainer'));

function App() {
  return (
    <div className="">
      <React.Suspense fallback={<span>Loading...</span>}>
         <Router>
          <Switch>
              <Route  path="/" exact render={()=><SignIn/>} />
              <Route  path="/signin" exact render={()=><SignIn/>} />
              <Route  path="/signup" exact render={()=><SignUp/>} />
              <Route  path="/mails" exact render={()=><MailContainer/>} />
              <Route  path="/mails/:id" exact render={()=><MailContainer/>} />
          </Switch>
       </Router>
      </React.Suspense>
      
    </div>
  );
}

export default App;
