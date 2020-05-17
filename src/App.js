import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ListingModal from "./components/listing-modal.component";
import Account from "./components/account.component";
import AboutUs from "./components/about-us.component";
import HomePage from "./components/homepage.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={HomePage} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/account" component={Account} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/listing" component={ListingModal} />
      <Route path="/listings" component={ExercisesList} />
      <Route path="/home" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
