export default (state = [], action) => {

  switch(action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote]

      case "REMOVE_QUOTE":
        const newQuotes = state.filter(q => q.id !== action.quoteId)

        return newQuotes

        case "UPVOTE_QUOTE":
          const index = state.findIndex(q => q.id === action.quoteId)

          const newQuote = {
            ...state[index], 
            votes: state[index].votes + 1
          }

        return [
          ...state.slice(0, index),
          newQuote,
          ...state.slice(index + 1)
        ]

        case "DOWNVOTE_QUOTE":
          const downIndex = state.findIndex(q => q.id === action.quoteId)

          const downQuote = {
            ...state[downIndex],
            votes: state[downIndex].votes - 1
          }

          if(downQuote.votes > 0) {
            return [
              ...state.slice(0, downIndex),
            downQuote,
            ...state.slice(downIndex + 1)
          ]
        }
        return state

        default:
          return state
  }
 }
