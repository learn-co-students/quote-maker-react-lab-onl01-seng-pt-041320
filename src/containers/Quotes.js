import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {
  
  renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard upvoteQuote={this.props.upvote} downvoteQuote={this.props.downvote} removeQuote={this.props.remove} quote={quote} />)

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
             
            {this.renderQuotes()}
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 const mapStateToProps = state => {
  return state
 }

const mapDispatchToProps = dispatch => ({
  downvote: (id) => dispatch(downvoteQuote(id)),
  upvote: (id) => dispatch(upvoteQuote(id)),
  remove: (id) => dispatch(removeQuote(id))
})

//add arguments to connect as needed
//export default connect(mapStateToProps)(Quotes);
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
