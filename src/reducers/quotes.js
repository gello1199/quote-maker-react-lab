export default (state = [], action) => {

  let index;
  let newQuote;

  switch(action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote]

      case "REMOVE_QUOTE":
        const newQuotes = state.filter(q => q.id !== action.quoteId)

        return newQuotes

        case "UPVOTE_QUOTE":
          index = state.findIndex(q => q.id === action.quoteId)

          newQuote = {
            ...state[index], 
            votes: state[index].votes + 1
          }

        return [
          ...state.slice(0, index),
          newQuote,
          ...state.slice(index + 1)
        ]

        case "DOWNVOTE_QUOTE":
          index = state.findIndex(q => q.id === action.quoteId)

          newQuote = {
            ...state[index],
            votes: state[index].votes - 1
          }

          if(newQuote.votes > 0) {
            // debugger
            return [
              ...state.slice(0, index),
              newQuote,
            ...state.slice(index + 1)
          ]
        }
        return state

        default:
          return state
  }
 }
