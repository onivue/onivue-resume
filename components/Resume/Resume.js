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
        <View style={styles.sectionSecondary}>
          <Image
            source="https://source.unsplash.com/random/"
            style={styles.imageSecondary}
          />
          <Text style={styles.h1Secondary}>
            {resumeData?.name.length > 15
              ? resumeData?.name.replace(/\s+/g, '\n')
              : resumeData?.name}
          </Text>
          <Text style={styles.h2Secondary}>{resumeData?.jobTitle}</Text>

          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Kontakt</Text>
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
                      <Text style={styles.pSecondary} key={i}>
                        {char}
                      </Text>
                    ))}
                  </View>
                )
              }
            })}
          </View>
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Skills</Text>
            <View style={styles.tagWrapper}>
              {resumeData?.skills?.map((tag, index) => {
                return (
                  <Text key={index} style={styles.tag}>
                    {tag}
                  </Text>
                )
              })}
            </View>
          </View>
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Sprachen</Text>
            <ProgressBar language={'English'} progress="75%" />
            <ProgressBar language={'Deutsch'} progress="100%" />
          </View>
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>List</Text>
            {['1', '2', '3'].map((number, i) => (
              <ListItem key={i}>{number}</ListItem>
            ))}
          </View>

          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Social</Text>
            <Text style={styles.pSecondary}>www.onivue.ch</Text>
          </View>
        </View>
        <View style={styles.sectionSecondaryOverlay} fixed></View>
        <View style={styles.sectionMain}>
          <Text style={styles.h2}>Über mich</Text>
          <MultLineText text={resumeData?.aboutMe} />
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.h2}>Erfahrung</Text>

            {resumeData?.experience?.map((item, i) => {
              return (
                <View wrap={false} key={i}>
                  <Text style={styles.h3}>{item.title}</Text>
                  <Text style={styles.h4}>
                    {item.location} | {item.from} - {item.to}
                  </Text>
                  <MultLineText text={item.summary} />
                </View>
              )
            })}
          </View>

          <View style={styles.separator}></View>

          <View>
            <Text style={styles.h2}>Ausbildung</Text>
            {resumeData?.education?.map((item, i) => {
              return (
                <View wrap={false} key={i}>
                  <Text style={styles.h3}>{item.title}</Text>
                  <Text style={styles.h4}>
                    {item.location} | {item.from} - {item.to}
                  </Text>
                </View>
              )
            })}
            <MultLineText text={resumeData?.education} />
          </View>
        </View>

        <Text
          style={{
            position: 'absolute',
            fontSize: 10,
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
  <View style={styles.listItem}>
    <Text style={styles.listBulletPoint}>•</Text>
    <Text style={styles.listItemContent}>{children}</Text>
  </View>
)

export const MultLineText = ({ text }) => {
  console.log(typeof text)
  if (typeof text === 'string') {
    return (
      <>
        {text.split('\n').map((item, i) => {
          if (item.match(/^-\s/)) {
            return <ListItem key={i}>{item.replace(/^-\s/, '')}</ListItem>
          } else {
            return (
              <Text key={i} style={styles.p}>
                {item}
              </Text>
            )
          }
        })}
      </>
    )
  } else {
    return <></>
  }
}
