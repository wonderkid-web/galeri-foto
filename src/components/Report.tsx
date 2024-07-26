// @ts-nocheck
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { History } from "@/types";
import Header from "./Header";
import { formatter } from "@/static";

// Create styles

const styles = StyleSheet.create({
  page: {
    padding: 30,
    width: "full",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    // display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "16.66%", // Sesuaikan persentase ini sesuai kebutuhan
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColImage: {
    width: "100%", // Sesuaikan persentase ini sesuai kebutuhan
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  headerCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  image: {
    width: "60%",
    height: "auto",
    marginVertical: 10,
    marginHorizontal: "auto",
  },
  tableColImageDoc: {
    width: "60%",
    // height: "auto",
    marginHorizontal: "auto",
  }
});

// Create Document Component
const Report = ({ history }: { history: History[] }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header
          title="LAPORAN TAHUNAN"
          date="22 Juli 2024"
          companyName="PT. PELINDO SUMATERA UTARA"
          companyAddress="No. 100, Jl. Krakatau Ujung, Tanjung Mulia, Medan Deli, Medan City, North Sumatra 20241"
        />
        <View style={styles.table}>
          {/* Header Tabel */}
          <View style={styles.tableRow}>
            {[
              "Link Berita",
              "Cabang",
              "Tanggal",
              "Kategori",
              // "Bukti Foto",
              "Tanggal Acara",
              "Deskripsi",
            ].map((header, index) => (
              <View style={styles.tableCol} key={index}>
                <Text style={styles.tableCellHeader}>{header}</Text>
              </View>
            ))}
          </View>
          {/* Data Tabel */}
          {history.map((item, rowIndex) => (
            <View key={rowIndex}>
              <View style={styles.tableRow} >
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.newsLink}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.branch}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {formatter.format(item.createdAt)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.category}</Text>
                </View>
                {/* <View style={styles.tableCol}>
                    <Image
                    style={styles.image}
                    // style={{ width: 100, marginLeft: "40%", border: "solid" }}
                    src={item.photoUrl}
                  />
                </View> */}
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.eventDate}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.tableColImage}>
                <Image
                  style={styles.tableColImageDoc}
                  // style={{ width: 100, marginLeft: "40%", border: "solid" }}
                  src={item.photoUrl}
                />
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Report;
