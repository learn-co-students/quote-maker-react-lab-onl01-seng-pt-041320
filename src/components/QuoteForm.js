import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  constructor() {
    super()

    this.state = {
      content: '',
      author: '',
      id: '',
      votes: 0 
   }
  }
  

  handleOnContentChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  handleOnAuthorChange = event => {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit = event => {
    // Create quote object from state
    let newID = uuid();
    this.setState({
      ...this.state,
      id: newID
    })
    this.props.addQuote(this.state)
    this.setState({
      content: '',
      author: '',
      id: '',
      votes: 0
    })
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        onChange={(event) => this.handleOnContentChange(event)}
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        onChange={(event) => this.handleOnAuthorChange(event)}
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

// const mapDispatchToProps = dispatch => ({
//   addQuote: state => dispatch(addQuote(state))
// })

//add arguments to connect as needed
export default connect(mapStateToProps, {addQuote})(QuoteForm);
