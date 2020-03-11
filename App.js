import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import Constants from "expo-constants";
// vector icons est un ensemble de packs d'icones
import { Ionicons, AntDesign } from "@expo/vector-icons";

// View = div
// Text = p

// Avec React Native :
// Les textes sont obligatoirement dans des <Text>
// Pas de fichier css, pas de className
// Tout est automatiquement en `display: flex`
// Il n'y a pas d'héritage de CSS. Exemple : Pour appliquer une couleur sur un élément, il faut lui transmettre directement et pas à son parent comme sur le Web

// Sur Android :
// Le scroll de la ScrollView s'active seulement si des éléments dépassent de l'écran

// Pour les images, vous devez appliquer des dimensions

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.logo} source={require("./assets/imdb.png")} />
      </View>

      <View>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.infos}>
          2014 PG-13 2h40min Adventures, Drama, Sci-Fx
        </Text>
      </View>

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.imgMovie}
              source={require("./assets/movie.jpg")}
            />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              neque neque, viverra eu malesuada nec, ornare ut nulla. Nullam
              blandit consequat dapibus. Proin id ipsum libero.
            </Text>
          </View>
          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text
                style={{
                  color: "#fff",
                  textTransform: "uppercase"
                }}
              >
                + Add to watchlist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View
          style={{
            height: 100,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons name="md-star" size={40} color="yellow" />
          <Text style={{ color: "#fff" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>8.6</Text>/10
          </Text>
        </View>

        <View
          style={{
            height: 100,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons name="md-star-outline" size={40} color="#fff" />
          <Text style={{ color: "#fff" }}>RATE THIS</Text>
        </View>

        <View
          style={{
            height: 100,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AntDesign name="banckward" size={40} />
          <Text style={{ color: "#fff" }}>Metascore</Text>
        </View>
      </View>

      <View style={styles.sep}></View>

      <View style={styles.section}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10
          }}
        >
          <Text style={styles.subTitle}>Top Billed Cast</Text>
          <Text style={styles.seeAll}>SEE ALL</Text>
        </View>

        <ScrollView horizontal={true}>
          {/* Image 1 */}
          <View>
            <Image
              style={styles.imgActor}
              source={require("./assets/actor01.jpg")}
            />
            <View style={styles.actorsNameBG}>
              <Text style={styles.actorsName}>Matthew McConaughey</Text>
              <Text style={styles.actorsSubname}>Cooper</Text>
            </View>
          </View>
          {/* Image 2 */}
          <View>
            <Image
              style={styles.imgActor}
              source={require("./assets/actor02.jpg")}
            />
            <View style={styles.actorsNameBG}>
              <Text style={styles.actorsName}>Anne Hataway</Text>
              <Text style={styles.actorsSubname}>Cooper</Text>
            </View>
          </View>

          {/* Image 3 */}
          <View>
            <Image
              style={styles.imgActor}
              source={require("./assets/actor03.jpg")}
            />
            <View style={styles.actorsNameBG}>
              <Text style={styles.actorsName}>Matthew McConaughey</Text>
              <Text style={styles.actorsSubname}>Cooper</Text>
            </View>
          </View>

          {/* Image 4 */}
          <View>
            <Image
              style={styles.imgActor}
              source={require("./assets/actor04.jpg")}
            />
            <View style={styles.actorsNameBG}>
              <Text style={styles.actorsName}>Matthew McConaughey</Text>
              <Text style={styles.actorsSubname}>Cooper</Text>
            </View>
          </View>
        </ScrollView>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.job}>Director</Text>
          <Text style={styles.jobName}>Christopher Nolan</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.job}>Writters</Text>
          <Text style={styles.jobName}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Chaque clé de l'objet transmis à create() sera l'équivalent d'une classe CSS
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#202020",
    flex: 1
  },

  section: {
    padding: 10,
    marginTop: 20
  },

  row: {
    flexDirection: "row"
  },

  sep: {
    height: 10,
    backgroundColor: "#000"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#0177BD",
    padding: 10
  },

  topBar: {
    backgroundColor: "#393939",
    height: 50
  },

  logo: {
    width: 80,
    height: 40,
    marginTop: 5,
    marginLeft: 20
  },

  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    color: "#ffffff"
  },

  infos: {
    color: "#B7B7B7",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20
  },

  imgMovie: {
    width: 120,
    height: 200,
    marginLeft: 20
  },

  description: {
    color: "#fff",
    marginLeft: 20,
    width: 220,
    textAlign: "justify"
  },

  fixToText: {
    margin: 30
  },

  textButton: {
    textAlign: "center"
  },

  subTitle: {
    fontSize: 20,
    color: "#fff"
  },

  seeAll: {
    color: "#0E7BAC"
  },

  imgActor: {
    width: 150,
    height: 220,
    margin: 5,
    marginTop: 10
  },

  actorsNameBG: {
    backgroundColor: "#2A2A2A",
    width: 150,
    height: 80,
    padding: 5
  },

  actorsName: {
    color: "#D7D7D7",
    fontSize: 16
  },

  actorsSubname: {
    color: "#B7B7B7",
    fontSize: 14,
    marginTop: 5
  },

  job: { fontSize: 18, color: "#D8D8D8" },

  jobName: { fontSize: 14, color: "#A2A2A2", marginTop: 5 }
});

export default App;
