import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer'

import { resumeStyle } from '@/components/Resume/style'

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: '/fonts/open-sans-regular.ttf',
    },
    {
      src: '/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
})
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
})
// Font.registerHyphenationCallback((word) => [word])

const styles = StyleSheet.create(resumeStyle)

export const MyDoc = ({ resumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.sectionSide}>
          <Image
            source="https://source.unsplash.com/random/"
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <Text style={styles.name}>
            {resumeData?.name.replace(/\s+/g, '\n')}
          </Text>
          <Text style={styles.jobTitle}>{resumeData?.jobTitle}</Text>

          <View style={styles.cvSection} wrap={false}>
            {[
              resumeData.address,
              resumeData.plz,
              resumeData.phone,
              resumeData.mail,
            ].map((d, i) => {
              if (d) {
                return (
                  <View
                    style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                    key={i}
                  >
                    {Array.from(d).map((char, i) => (
                      <Text style={styles.cvSectionText} key={i}>
                        {char}
                      </Text>
                    ))}
                  </View>
                )
              }
            })}
          </View>
          <View style={styles.cvSection} wrap={false}>
            <Text style={styles.cvSectionTitle}>Skills</Text>
            <View style={styles.csvTagWrapper}>
              {resumeData?.skills?.map((tag, index) => {
                return (
                  <Text key={index} style={styles.csvTag}>
                    {tag}
                  </Text>
                )
              })}
            </View>
          </View>
          <View style={styles.cvSection} wrap={false}>
            <Text style={styles.cvSectionTitle}>Sprachen</Text>
            <ProgressBar language={'English'} progress="75%" />
            <ProgressBar language={'Deutsch'} progress="100%" />
          </View>
          <View style={styles.cvSection} wrap={false}>
            <Text style={styles.cvSectionTitle}>List</Text>
            {['1', '2', '3', '4', '5', '6'].map((number, i) => (
              <ListItem key={i} style={{ flexDirection: 'row' }}>
                {number}
              </ListItem>
            ))}
          </View>

          <View style={styles.cvSection} wrap={false}>
            <Text style={styles.cvSectionTitle}>Social</Text>

            <Text style={styles.cvSectionText}>www.onivue.ch</Text>
          </View>
        </View>
        <View style={styles.sectionSideOverlay} fixed></View>
        <View style={styles.sectionWrapper}>
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionH1} wrap={false}>
              Über mich
            </Text>
            <Text>{resumeData?.aboutMe}</Text>
          </View>
          <View style={styles.sectionSeparator}></View>
          <View style={styles.section}>
            <Text style={styles.sectionH1}>Erfahrung</Text>

            {resumeData?.experience?.map((item, i) => {
              return (
                <View wrap={false} key={i}>
                  <Text style={styles.sectionH2}>{item.title}</Text>
                  <Text style={styles.sectionH3}>
                    {item.location} | {item.from} - {item.to}
                  </Text>
                  {['1', '2', '3', '4', '5'].map((number, i) => (
                    <ListItem key={i} style={{ flexDirection: 'row' }}>
                      {number}
                    </ListItem>
                  ))}
                </View>
              )
            })}
          </View>

          <View style={styles.sectionSeparator}></View>

          <View style={styles.section}>
            <Text style={styles.sectionH1}>Ausbildung</Text>
            {resumeData?.education?.map((item, i) => {
              return (
                <View wrap={false} key={i}>
                  <Text style={styles.sectionH2}>{item.title}</Text>
                  <Text style={styles.sectionH3}>
                    {item.location} | {item.from} - {item.to}
                  </Text>
                </View>
              )
            })}
          </View>
        </View>

        <Text
          style={{
            position: 'absolute',
            fontSize: 12,
            bottom: 5,
            left: 5,
            right: 0,
            textAlign: 'left',
            color: 'grey',
          }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}

const ProgressBar = ({ language, progress }) => (
  <>
    <Text style={{ fontSize: 10, marginBottom: 3 }}>{language}</Text>
    <View style={styles.progressBarLine}>
      <View style={{ width: progress, ...styles.progressBarValue }}></View>
    </View>
  </>
)

export const ListItem = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
)
