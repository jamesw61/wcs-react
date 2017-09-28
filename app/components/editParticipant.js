import React, { Component } from 'react';
import axios from 'axios';

class EditParticipant extends Component {

  constructor(props) {
      super(props);
      this.addParticipantService = new ItemService();
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {value: '' };
  }

  componentDidMount(){
    axios.get('/participants/edit'+this.props.match.params.id)
    .then(response => {
      this.setState({ value: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  updateData(data, id){
    axios.post('/participant/update/'+id, {
      participant: data
    })
    .then(res => this.setState({ participant: res.data }))
    .catch(err => console.log(err))
  }

  handleSubmit(event) {
    event.preventDefault();
    this.updateData(this.state.value,this.props.match.params.id);
    this.props.history.push('/participant');
  }

  render() {
    return (
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Edit Dancer:
                <input type="text" value={this.state.value.item} onChange={this.handleChange}  className="form-control"/>
              </label><br/>
              <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
        </div>
    );
  }
}

export default EditParticipant;