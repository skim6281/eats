import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants('new york');
  }

  renderRestaurants() {
    return this.props.restaurants.map((restaurant,ind) => {
      return (<li key={ind}>{restaurant.name} {restaurant.url}</li>);
    });
  }

  render() {
    return (
      <div>MAIN
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
