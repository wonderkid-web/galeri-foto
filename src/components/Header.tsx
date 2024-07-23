"use client";

import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

// Definisikan gaya untuk header
const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    textAlign: "center",
  },
});

// Komponen Header
const Header = ({ title, date, companyName, companyAddress }: any) => (
  <View style={styles.headerContainer}>
    {/* <Image src={} /> */}
    <Image src={'/pelindo.png'} style={{width: 100, marginLeft: "40%", border: "solid"}} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{date}</Text>
    <Text style={styles.info}>{companyName}</Text>
    <Text style={styles.info}>{companyAddress}</Text>
  </View>
);

export default Header;
