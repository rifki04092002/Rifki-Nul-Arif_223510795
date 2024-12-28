import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Provider as PaperProvider,
  Appbar,
  Button,
  Card,
  Text,
  Avatar,
} from "react-native-paper";
import { View, StyleSheet, Image, ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

// Header Kustom
const CustomHeader = ({ title, navigation, back }) => (
  <Appbar.Header style={styles.header}>
    {back ? (
      <Appbar.BackAction onPress={navigation.goBack} color="#fff" />
    ) : null}
    <Appbar.Content title={title} titleStyle={styles.headerTitle} />
  </Appbar.Header>
);

// Data Calon Presiden
const candidates = [
  {
    id: 1,
    name: "Calon Presiden Nomor Urut 1",
    party: "Partai (Nasdem,PKB,PKS)",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Finfopemilu.kpu.go.id%2FPemilu%2Fsikadeka%2Fpwp&psig=AOvVaw0L3XTOCSQxDHzumChaOxFw&ust=1735458219423000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiGiej7yYoDFQAAAAAdAAAAABAJ",
    description:
      "Sosok Anies Baswedan tentu sudah tak asing bagi masyarakat Indonesia, terlebih warga Jakarta. Pria kelahiran 1969 ini tengah maju mencalonkan diri sebagai Capres di Pilpres 2024. dan Muhaimin Iskandar, atau lebih akrab disapa dengan panggilan Cak Imin, maju sebagai cawapres Anies pada Pilpres 2024 mendatang. Dirinya adalah Ketum Partai Kebangkitan Bangsa (PKB) yang telah menjabat sejak 2005.",
  },
  {
    id: 2,
    name: "Calon Presiden Nomor Urut 2",
    party: "Partai (Grindra,Golkar,Demokrat,PAN,PSI)",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnnindonesia.com%2Fnasional%2F20241020083751-20-1157308%2Flive-report-pelantikan-presiden-wakil-presiden-ri-2024-2029&psig=AOvVaw1AkGibLIRrkeQJAf2hPE5X&ust=1735459414838000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjHjaWAyooDFQAAAAAdAAAAABAE",
    description:
      "Kegagalan nampaknya tidak ada di kamus Prabowo Subianto. Nama mantan Komandan Komando Pasukan Khusus (Kopasus) ini kembali mewarnai Pilpres 2024.Adalah Prabowo Subianto, Ketum Partai Gerindra sekaligus Menteri Pertahanan (Menhan). Sebelum dilantik menjadi Menhan, dirinya sudah 4 kali mencalonkan diri sebagai Capres. dan Menjadi anak orang pertama di Indonesia tentu membuatnya dikenal oleh semua orang. Gibran Rakabuming Raka adalah putra sulung Joko Widodo yang lahir di Surakarta, 1 Oktober 1987. Di usianya yang masih belia, lulusan Management Development Institute of Singapore ini telah dilantik menjadi Walikota Surakarta pada 2021 lalu. Kini, nama Gibran Rakabuming diumumkan sebagai pendamping Prabowo Subianto.",
  },
  {
    id: 3,
    name: "Calon Presiden Nomor Urut 3",
    party: "Partai (PDI,PPP,Perindo,Hanura)",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnasional.sindonews.com%2Fread%2F1251675%2F12%2Fganjar-mahfud-nomor-urut-3-ahmad-rofiq-semangat-reformasi-lawan-kkn-1700003477&psig=AOvVaw2o3wcakKMWykdFMzO4V_I6&ust=1735459486096000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMirxsSAyooDFQAAAAAdAAAAABAE",
    description:
      "Bukan hanya Gubernur DKI Jakarta saja yang maju mencalonkan diri di Pilpres 2024, Ganjar Pranowo, selaku Gubernur Jawa Tengah, juga tak mau kalah.Lahir di Karanganyar, 28 Oktober 1968, Ganjar Pranowo merupakan mantan Gubernur Jawa Tengah. Jabatan tersebut pernah ia emban selama 2 periode, yakni pada 2013-2018 dan 2018-2023.Mirip Cak Imin, alumnus Fakultas Hukum UGM ini juga pernah menjadi bagian dari DPR RI. Dalam kurun waktu 2010-2013, ia pernah memegang dua jabatan sekaligus, yakni Anggota Timwas Century di DPR RI dan Wakil Sekretaris Fraksi PDIP DPR RI. dan Mahfud MD resmi diumumkan sebagai cawapres dari Ganjar Pranowo di Pemilu 2024. Pengumuman ini disampaikan langsung oleh Ketum PDIP Megawati Soekarnoputri. Foto: Grandyos Zafna Dalam jalan menuju Pilpres 2024, Ganjar menggandeng Mahfud MD sebagai cawapresnya. Pria kelahiran 1957 ini juga mengisi daftar capres dan cawapres 2024 yang lulus dari UGM. Mahfud MD sendiri adalah Menteri Koordinator Bidang Politik, Hukum, dan Keamanan RI. Sebelum menjadi bagian dari Kabinet Indonesia Maju, alumnus UGM ini pernah menduduki posisi Ketua Mahkamah Konstitusi RI kurang lebih selama 6 tahun.",
  },
];

// Layar Beranda
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomHeader title="Pilpres 2024" navigation={navigation} />
      <ScrollView>
        <Text style={styles.heading}>Daftar Calon Presiden</Text>
        {candidates.map((candidate) => (
          <Card key={candidate.id} style={styles.card}>
            <Card.Title
              title={candidate.name}
              subtitle={candidate.party}
              left={(props) => (
                <Avatar.Image
                  {...props}
                  source={{ uri: candidate.image }}
                  size={50}
                />
              )}
            />
            <Card.Content>
              <Text style={styles.text}>{candidate.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                mode="contained"
                buttonColor="#6200ea"
                textColor="#fff"
                onPress={() => navigation.navigate("Detail", { candidate })}
                style={styles.button}
              >
                Lihat Detail
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

// Layar Detail Calon
function DetailsScreen({ route, navigation }) {
  const { candidate } = route.params;

  return (
    <View style={styles.container}>
      <CustomHeader title={candidate.name} navigation={navigation} back />
      <ScrollView>
        <Image source={{ uri: candidate.image }} style={styles.banner} />
        <Card style={styles.card}>
          <Card.Title title={candidate.name} subtitle={candidate.party} />
          <Card.Content>
            <Text style={styles.text}>{candidate.description}</Text>
          </Card.Content>
        </Card>
        <Button
          icon="arrow-left"
          mode="contained"
          buttonColor="#03dac5"
          textColor="#000"
          onPress={() => navigation.goBack()} // PERBAIKAN
          style={styles.button}
        >
          Kembali
        </Button>
      </ScrollView>
    </View>
  );
}

// Komponen Utama
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Beranda">
          <Stack.Screen
            name="Beranda"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    backgroundColor: "#6200ea",
  },
  headerTitle: {
    color: "#fff",
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    margin: 10,
    borderRadius: 5,
  },
});
