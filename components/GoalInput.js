import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText)  => {
    setEnteredGoal(enteredText);
  };

const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
}

return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.box}>
            <TextInput  
                placeholder="Unesi odje" 
                style={styles.inputbox} 
                onChangeText={goalInputHandler} 
                value={enteredGoal} 
            />
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <Button title="Otkaži" color="red" onPress={props.onCancel} />
                </View>
                <View style={styles.button}>
                    <Button title="Dodaj" onPress={addGoalHandler} />
                </View>
            </View>
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
      },
      inputbox: {
        width:150, 
        borderColor: 'black', 
        borderWidth:1, 
        padding:1,
        marginBottom:10
      },
      btnContainer: {
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%' 
      },
      button: {
          width: '40%'
      }
  });

  export default GoalInput;
