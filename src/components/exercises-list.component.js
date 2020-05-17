import React, { Component } from 'react';
import{ Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleMaps from './google-maps.component';
import axios from 'axios';


const Exercise = props => (
  <Card>
  <Card.Header as="h5">{props.exercise.username}</Card.Header>
  <Card.Body>
    <Card.Title>{props.exercise.description}</Card.Title>
   <GoogleMaps />
    <Card.Text>
    {props.exercise.duration}
    {props.exercise.date.substring(0,10)}
      </Card.Text>
    
    <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        { this.exerciseList() }
      </div>
    )
  }
}