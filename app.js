import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to SkillForge: Quest Tracker</Text>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center' },
  titleText: { fontSize: 16, color: '#888888', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 2 },
  clockDisplay: { fontSize: 60, fontWeight: 'bold', color: '#ffffff', marginBottom: 40 },
  alarmSection: { alignItems: 'center', backgroundColor: '#1E1E1E', padding: 20, borderRadius: 15, width: '80%' },
  alarmStatus: { fontSize: 18, color: '#AAAAAA', marginBottom: 15, textAlign: 'center' },
});
