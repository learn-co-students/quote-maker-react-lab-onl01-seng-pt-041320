export default (state = [], action) => {
  let idx;
  let vote;
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
      // { quotes: state.quotes.concat(action.payload.text) };

    case 'UPVOTE_QUOTE':
      vote = state.map(quote => {
        if(quote.id === action.quoteId) {
          return {
            ...quote, votes: quote.votes + 1 }
          } else {
            return quote
          }
        }
      )
      return vote;

      case 'DOWNVOTE_QUOTE':
        vote = state.map(quote => {
          if(quote.id === action.quoteId && quote.votes > 0) {
            return { 
              ...quote, votes: quote.votes - 1 }
          } else {
            return quote
          }
        }
        )
        return vote; 


    default:
      return state;
  }
}
