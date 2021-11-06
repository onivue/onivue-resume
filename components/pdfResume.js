import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  wrapper: { display: 'flex', flexDirection: 'row', height: '100%' },
  sectionSide: {
    backgroundColor: 'green',
    textAlign: 'left',
    height: '100%',
    width: 220,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#f7fafc',
  },
  sectionMain: {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    width: 380,
    paddingTop: 40,
    paddingHorizontal: 30,
    fontSize: 10,
  },
  sectionMainx: {
    textAlign: 'center',
    height: '100%',
  },
  name: {
    fontSize: 30,
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 20,
  },
  cvSection: {
    marginTop: 24,
  },
  cvSectionTitle: {
    fontSize: 18,
  },
  cvSectionText: {
    fontSize: 14,
  },
  csvTagWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  csvTag: {
    fontSize: 8,
    border: 1,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    paddingTop: 4,
    marginRight: 4,
    marginVertical: 2,
  },
})

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

export const MyDoc = ({ text }) => (
  <Document>
    <Page size="A4">
      <View style={styles.wrapper}>
        <View style={styles.sectionSide}>
          <Text style={styles.name}>Albin Hoti</Text>
          <Text style={styles.jobTitle}>Informatiker</Text>

          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>Kontakt</Text>
            <Text style={styles.cvSectionText}>076 801 36 64</Text>
            <Text style={styles.cvSectionText}>albin.hoti@gmail.com</Text>
            <Text style={styles.cvSectionText}>9200 Gossau</Text>
          </View>
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>Skills</Text>
            <View style={styles.csvTagWrapper}>
              <Text style={styles.csvTag}>React</Text>
              <Text style={styles.csvTag}>Tailiwnd</Text>
              <Text style={styles.csvTag}>Node.js</Text>
              <Text style={styles.csvTag}>Firebase</Text>
              <Text style={styles.csvTag}>Zustand.js</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionMain}>
          <View style={styles.sectionMainx}>
            <Text>
              En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no
              ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
              adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
              vaca que carnero, salpicón las más noches, duelos y quebrantos los
              sábados, lentejas los viernes, algún palomino de añadidura los
              domingos, consumían las tres partes de su hacienda. El resto della
              concluían sayo de velarte, calzas de velludo para las fiestas con
              sus pantuflos de lo mismo, los días de entre semana se honraba con
              su vellori de lo más fino. Tenía en su casa una ama que pasaba de
              los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo
              de campo y plaza, que así ensillaba el rocín como tomaba la
              podadera. Frisaba la edad de nuestro hidalgo con los cincuenta
              años, era de complexión recia, seco de carnes, enjuto de rostro;
              gran madrugador y amigo de la caza. Quieren decir que tenía el
              sobrenombre de Quijada o Quesada (que en esto hay alguna
              diferencia en los autores que deste caso escriben), aunque por
              conjeturas verosímiles se deja entender que se llama Quijana; pero
              esto importa poco a nuestro cuento; basta que en la narración dél
              no se salga un punto de la verdad
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
