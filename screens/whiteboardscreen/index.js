import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity,TextInput } from 'react-native';
import Styling from "./styles";
export default function Whiteboard() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [whiteboardContent, setWhiteboardContent] = useState('');
  const [savedWhiteboardContent, setSavedWhiteboardContent] = useState('');

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const saveWhiteboardContent = () => {
   
    setSavedWhiteboardContent(whiteboardContent);
    setWhiteboardContent('');
    toggleInput();
    console.log('Innehåll sparades:', whiteboardContent);
  };

  const renderWhiteboard = () => {
    if (showInput) {
      return (
        <View style={Styling.whiteboardContainer}>
          <TextInput
            multiline
            placeholder="Skriv något..."
            value={whiteboardContent}
            onChangeText={text => setWhiteboardContent(text)}
            style={Styling.whiteboardInput}
          />
          <TouchableOpacity onPress={saveWhiteboardContent} style={Styling.saveButton}>
            <Text style={Styling.saveButtonText}>Spara</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={Styling.container}>
      {!showInput && (
        <TouchableOpacity style={Styling.plusButton} onPress={toggleOverlay}>
          <Text style={Styling.plusButtonText}>+</Text>
        </TouchableOpacity>
      )}

      {showOverlay && (
        <View style={Styling.overlayContainer}>
          <View style={Styling.overlay}>
            <Text style={Styling.overlayText}>Skapa en ny whiteboard</Text>
            <TouchableOpacity onPress={() => {toggleOverlay(); toggleInput();}} style={Styling.createButton}>
              <Text style={Styling.createButtonText}>Skapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {renderWhiteboard()}
    </View>
  );
}
