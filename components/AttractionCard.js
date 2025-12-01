// components/AttractionCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AttractionCard = ({ name, description, image, type }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.type}>{type.toUpperCase()}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#112240', // Azul escuro
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#64ffda',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#233554', 
  },
  type: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64ffda', 
    marginBottom: 8,
    alignSelf: 'flex-start',
    letterSpacing: 1,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#233554', 
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ccd6f6',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#a8b2d1', 
    textAlign: 'justify',
    lineHeight: 20,
  },
});

export default AttractionCard;