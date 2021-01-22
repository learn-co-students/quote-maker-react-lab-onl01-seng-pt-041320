export default (state =
  [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
      
      

    case 'REMOVE_QUOTE':

    const quotes = state.slice()
    let Array1 = quotes.filter((quote) => quote.id !== action.quoteId)
    return Array1;

    case 'UPVOTE_QUOTE':
      const quotes2 = state.slice()
      let quote = quotes2.filter((quote) => quote.id === action.quoteId)
      let Array2 = quotes2.filter((quote) => quote.id !== action.quoteId)
      quote[0].votes = quote[0].votes + 1
      Array2.push(quote[0])
      return Array2;

    case 'DOWNVOTE_QUOTE':

      const quotes3 = state.slice()
      let quote2 = quotes3.filter((quote) => quote.id === action.quoteId)
      let Array3 = quotes3.filter((quote) => quote.id !== action.quoteId)
      if (quote2[0].votes === 0) {

      } 
      else {
        quote2[0].votes = quote2[0].votes - 1
      }
      Array3.push(quote2[0])
      return Array3;

    default:
      return state;
  }
}
