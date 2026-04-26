import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const RESTAURANTS = [
  {
    id: '1',
    name: 'بيتزا ليبر',
    description: 'أشهى البيتزا الإيطالية الأصيلة',
    rating: 4.8,
    location: 'طرابلس، ليبيا',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    menu: [
      { name: 'بيتزا مارغريتا', price: '25 د.ل' },
      { name: 'بيتزا بيبروني', price: '30 د.ل' },
      { name: 'بيتزا خضار', price: '22 د.ل' },
      { name: 'بيتزا دجاج', price: '28 د.ل' },
    ]
  },
  {
    id: '2',
    name: 'مطعم البحر',
    description: 'أطيب المأكولات البحرية الطازجة',
    rating: 4.5,
    location: 'بنغازي، ليبيا',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    menu: [
      { name: 'سمك مشوي', price: '45 د.ل' },
      { name: 'جمبري مقلي', price: '35 د.ل' },
      { name: 'كاليماري', price: '30 د.ل' },
    ]
  },
  {
    id: '3',
    name: 'مقهى الصباح',
    description: 'قهوة عربية أصيلة وحلويات',
    rating: 4.7,
    location: 'مصراتة، ليبيا',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
    menu: [
      { name: 'قهوة عربية', price: '5 د.ل' },
      { name: 'كرواسان', price: '8 د.ل' },
      { name: 'بسبوسة', price: '10 د.ل' },
    ]
  }
];

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

  if (selectedRestaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => setSelectedRestaurant(null)} style={styles.backButton}>
          <Text style={styles.backText}>← رجوع</Text>
        </TouchableOpacity>
        
        <ScrollView>
          <Image source={{ uri: selectedRestaurant.image }} style={styles.detailImage} />
          
          <View style={styles.detailContent}>
            <Text style={styles.detailName}>{selectedRestaurant.name}</Text>
            <Text style={styles.detailDescription}>{selectedRestaurant.description}</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.rating}>⭐ {selectedRestaurant.rating}</Text>
              <Text style={styles.location}>📍 {selectedRestaurant.location}</Text>
            </View>
            
            <Text style={styles.menuTitle}>🍽️ قائمة الطعام</Text>
            
            {selectedRestaurant.menu.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🍕 مطاعم ليبيا</Text>
      
      <FlatList
        data={RESTAURANTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => setSelectedRestaurant(item)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
                <Text style={styles.location}>📍 {item.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#d32f2f',
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 16,
    color: '#ff9800',
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    padding: 15,
    backgroundColor: '#fff',
  },
  backText: {
    fontSize: 18,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  detailImage: {
    width: '100%',
    height: 250,
  },
  detailContent: {
    padding: 20,
  },
  detailName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemName: {
    fontSize: 18,
    color: '#333',
  },
  menuItemPrice: {
    fontSize: 18,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});
