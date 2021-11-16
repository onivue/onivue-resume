import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    // height: '100%'
  },
  sectionSide: {
    backgroundColor: 'green',
    textAlign: 'left',
    // height: '100%',
    width: 220,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: '#f7fafc',
  },
  sectionMain: {
    textAlign: 'center',
    // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: 380,
    paddingTop: 40,
    paddingHorizontal: 30,
    fontSize: 10,
  },
  sectionMainx: {
    textAlign: 'center',
    // height: '100%',
    flex: 1,
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
    marginBottom: 5,
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
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#5b21b6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginVertical: 2,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
  },
})

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})

const ProgressBar = ({ language, progress }) => (
  <>
    <Text style={{ fontSize: 10, marginBottom: 3 }}>{language}</Text>
    <View
      style={{
        backgroundColor: '#e2e8f0',
        height: '5px',
        borderRadius: '50%',
        marginBottom: 3,
      }}
    >
      <View
        style={{
          backgroundColor: '#5b21b6',
          height: '5px',
          width: progress,
          borderRadius: '50%',
        }}
      ></View>
    </View>
  </>
)

export const ListItem = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
)

export const MyDoc = ({ text }) => (
  <Document>
    <Page size="A4" wrap>
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
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>Sprachen</Text>
            <ProgressBar language={'English'} progress="75%" />
            <ProgressBar language={'Deutsch'} progress="100%" />
          </View>
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>List</Text>
            {['1', '2', '3', '4', '5'].map((number, i) => (
              <ListItem key={i} style={{ flexDirection: 'row' }}>
                {number}
              </ListItem>
            ))}
          </View>
          {/* <Image
            source="https://source.unsplash.com/random/800x600"
          /> */}
          <Image
            style={{
              width: 12,
              height: 12,
            }}
            src={
              'data:image/png;base64,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'
            }
          />
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>Social</Text>

            <Text style={styles.cvSectionText}>www.onivue.ch</Text>
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
