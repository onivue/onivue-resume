import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

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
    flexDirection: 'column',
    width: 380,
    paddingTop: 40,
    paddingHorizontal: 30,
    fontSize: 10,
  },
  sectionMainx: {
    textAlign: 'center',
    height: '100%',
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

const CvContact = ({ style }) => {
  return (
    <View>
      <Text style={styles.cvSectionText}>076 801 36 64</Text>
      <Text style={styles.cvSectionText}>albin.hoti@gmail.com</Text>
      <Text style={styles.cvSectionText}>9200 Gossau</Text>
    </View>
  )
}

export default CvContact
