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
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  type: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C3D1C',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default AttractionCard;