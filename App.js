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
    backgroundColor: '#0a192f', 
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ccd6f6', 
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: '#64ffda',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#8892b0', 
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#112240', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#64ffda', 
  },
  emojiLogo: {
    fontSize: 50,
  },
  infoBox: {
    backgroundColor: '#112240',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#233554', 
    shadowColor: '#64ffda',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#64ffda', 
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#a8b2d1', 
    lineHeight: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    width: '100%',
  },
  navButton: {
    backgroundColor: '#233554', 
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2d47',
  },
  mainButton: {
    backgroundColor: '#64ffda',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#ccd6f6',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mainButtonText: {
    color: '#0a192f', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallButton: {
    backgroundColor: '#233554', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2d47',
  },
  activeButton: {
    backgroundColor: '#64ffda', 
    borderColor: '#52d3aa',
  },
  smallButtonText: {
    color: '#ccd6f6',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  counter: {
    fontSize: 18,
    color: '#64ffda',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  cityIndicators: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#233554', 
    marginHorizontal: 6,
  },
  activeIndicator: {
    backgroundColor: '#64ffda',
    transform: [{ scale: 1.3 }],
    shadowColor: '#64ffda',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#8892b0', 
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
  },
});