import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, sortByRating, sortByPrice } from './actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  renderSortOptions() {
    if(this.props.restaurants.length > 1) {
      return (
        <div>
          <span>Sort by: </span>
          <button onClick={this.props.sortByRating}>Rating</button>
          <button onClick={this.props.sortByPrice}>Price</button>
        </div>
      )
    }
  }

  renderList() {
    if(this.props.restaurants.length > 0) {
      return(
        <section className="list">
          <heading className="flex btwn">
            <div className="restaurant-col">
              Restaurant
            </div>
            <div className="details flex btwn">
              <div className="rating-col">
                Rating
              </div>
              <div className="price-col">
                Price
              </div>
            </div>
          </heading>
          {this.renderRestaurants()}
        </section>
      )
    }
  }

  renderRestaurants() {
    return this.props.restaurants.map((restaurant,ind) => {
      return (
        <content key={ind} className="business flex btwn">
          <div className="name">
            <a href={restaurant.url} target="_blank">
              {restaurant.name}
            </a>
          </div>
          <div className="details flex btwn">
            <div className="rating">
              {restaurant.rating}
            </div>
            <div className="price">
              {restaurant.price}
            </div>
          </div>
        </content>);
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
      <div>
        <h1>
          Eats
        </h1>
        <form className="search flex" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={this.update}/>
          <button className="search-button">
            <img src={window.images.magnifyingGlass}/>
          </button>
        </form>
        {this.renderSortOptions()}
        {this.renderList()}
      </div>
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
    fetchRestaurants: city => dispatch(fetchRestaurants(city)),
    sortByRating: () => dispatch(sortByRating()),
    sortByPrice: () => dispatch(sortByPrice())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
