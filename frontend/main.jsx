import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchRestaurants('new york');
  // }

  renderRestaurants() {
    return this.props.restaurants.map((restaurant,ind) => {
      return (<li key={ind}>{restaurant.name} {restaurant.url}</li>);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.city);
  }

  update(e) {
    e.preventDefault();
    this.setState({city: e.currentTarget.value});
  }

  render() {
    return (
      <div>MAIN
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.update}/>
          <input type="submit" value="Search"/>
        </form>
      <ul>{this.renderRestaurants()}</ul></div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: city => dispatch(fetchRestaurants(city))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
