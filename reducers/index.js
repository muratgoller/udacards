import { ADD_DECK } from '../actions'
import { ADD_CARD } from '../actions'
import { DELETE_DECK } from '../actions'
import { SET_AS_COMPLETED } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        [action.deck.title]: action.deck
      }

    case ADD_CARD :
      return {
        ...state,
        [action.card.title]: {
          questions : state[action.card.title].questions.concat({ 
            question: action.card.question, 
            answer: action.card.answer,
            correct: action.card.correct
          }),
          completed : false,
          title: action.card.title
        }
      }

    case DELETE_DECK :
      let copy = Object.assign({}, state)
      delete copy[action.deckTitle]
      return copy

      
    case SET_AS_COMPLETED :
      console.log(action)
      let copy1 = Object.assign({}, state)

      copy1[action.deckTitle].completed = true

      return copy1

    default :
      return state
  }
}

export default decks