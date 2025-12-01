// App.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AttractionCard from './components/AttractionCard';

export default function App() {
  const [currentAttractionIndex, setCurrentAttractionIndex] = useState(0);
  const [showInfoType, setShowInfoType] = useState('tips');

  // Attractions data
  const attractions = [
    {
      name: 'Alameda dos Anjos',
      description: 'Angel Grove, Califórnia é uma cidade fictícia no Universo Power Rangers, palco de grande parte da ação da Era Zordon dos Power Rangers. Angel Grove provavelmente é baseada em Los Angeles ou San Francisco (embora, na verdade, as filmagens tenham sido realizadas em Valencia, Califórnia), mas a cidade foi apresentada como tendo sido colonizada pelos britânicos, uma impossibilidade histórica.',
      image: require('./assets/images/angel-grove.jpg'),
      tips: 'Cuidado com partes mecânicas gigantes caíndo do céu. Se em perigo, não vá para estruturas grandes. Em caso de explosões, corra.',
      location: 'California, United States of America',
      curiosities: 'Existem "Rangers" misteriosos que combarem o crime.',
    },
    {
      name: 'Cidade de Gotham',
      description: 'Uma metrópole sombria e repleta de crimes na Costa Leste dos Estados Unidos, primariamente conhecida como o lar do Batman e seus aliados. Caracterizada por sua arquitetura gótica, atmosfera de noite perpétua e alta taxa criminal, Gotham representa a decadência urbana e a corrupção.',
      image: require('./assets/images/gotham-city.png'),
      tips: 'Evite becos após o anoitecer. Viaje em grupos. Mantenha objetos de valor escondidos. Reporte qualquer atividade suspeita de palhaços imediatamente.',
      location: 'New Jersey, Estados Unidos (localização fictícia)',
      curiosities: 'Construída sobre cemitérios nativos americanos amaldiçoados. Lar do Asilo Arkham, contendo os criminosos mais perigosos do mundo.',
    },
    {
      name: 'Townsville',
      description: 'Uma cidade vibrante e colorida constantemente ameaçada por vilões monstruosos e desastres bizarros. Protegida por três super-heroínas em idade pré-escolar: Blossom, Bubbles e Buttercup. Conhecida por seus frequentes danos à propriedade e reconstruções milagrosas.',
      image: require('./assets/images/townsville.jpg'),
      tips: 'Abaixe-se e cubra-se durante ataques de monstros. Mantenha o elemento X longe de crianças. Evite o Mojo Jojo. Edifícios são reconstruídos em horas.',
      location: 'Estados Unidos da América (estado exato desconhecido)',
      curiosities: 'Lar do Professor Utonium que acidentalmente criou as Meninas Superpoderosas com açúcar, tempero e tudo de bom mais o Elemento X.',
    },
  ];

  const currentAttraction = attractions[currentAttractionIndex];

  // Changing the attraction
  const nextAttraction = () => {
    setCurrentAttractionIndex((prevIndex) => 
      prevIndex === attractions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Changing the info type
  const changeInfoType = (type) => {
    setShowInfoType(type);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>EcoTravel Brasil</Text>
        <Text style={styles.subtitle}>
          Descubra lugares incríveis com viagens sustentáveis!
        </Text>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Card */}
      <AttractionCard
        name={currentAttraction.name}
        description={currentAttraction.description}
        image={currentAttraction.image}
        type={showInfoType}
      />

      {/* Dynamic Info */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>
          {showInfoType === 'tips' ? 'Dicas' : 
           showInfoType === 'location' ? 'Localização' : 
           'Curiosidades'}
        </Text>
        <Text style={styles.infoText}>
          {showInfoType === 'tips' ? currentAttraction.tips :
           showInfoType === 'location' ? currentAttraction.location :
           currentAttraction.curiosities}
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={nextAttraction}>
          <Text style={styles.buttonText}>Proximo Local</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.smallButton} onPress={() => changeInfoType('tips')}>
          <Text style={styles.smallButtonText}>Dicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => changeInfoType('location')}>
          <Text style={styles.smallButtonText}>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => changeInfoType('curiosities')}>
          <Text style={styles.smallButtonText}>Curiosidades</Text>
        </TouchableOpacity>
      </View>

      {/* Counter */}
      <Text style={styles.counter}>
        Destino {currentAttractionIndex + 1} de {attractions.length}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F8F0',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C3D1C',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#2E8B57',
    textAlign: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoBox: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 15,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C3D1C',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#2E8B57',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  smallButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  counter: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});