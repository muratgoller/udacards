import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Picker } from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'
import { addCard } from '../actions/index'

class Score extends Component{

    backToDeck = () => {
        this.props.navigation.navigate('DeckEdit', {
            title: this.props.navigation.state.params.title
          });
    }

    startOver = () => {
        this.props.navigation.navigate('Quiz', {
            title: this.props.navigation.state.params.title
          });
    }

    render(){
        const deckTitle = this.props.navigation.state.params.title
        const countOfSucceed = this.props.navigation.state.params.countOfSucceed
        const countOfQuestions = this.props.decks[deckTitle].questions.length

        return(
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>
                    You've succeed on {countOfSucceed} questions in {countOfQuestions}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress = {this.startOver}>
                    <Text style={{color:'white'}}>Start Over</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.backToDeck}>
                    <Text style={{color:'white'}}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return { decks: state }
}

export default connect(mapStateToProps, null)(Score)