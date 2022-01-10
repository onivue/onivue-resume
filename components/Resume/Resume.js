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
  family: 'Montserrat',
  fonts: [
    {
      src: '/fonts/montserrat-v18-latin-regular.ttf',
    },
    {
      src: '/fonts/montserrat-v18-latin-700.ttf',
      fontWeight: 700,
    },
    {
      src: '/fonts/montserrat-v18-latin-600.ttf',
      fontWeight: 600,
    },
  ],
})

Font.register({
  family: 'Work Sans',
  fonts: [
    {
      src: '/fonts/work-sans-v13-latin-regular.ttf',
    },
    {
      src: '/fonts/work-sans-v13-latin-500.ttf',
      fontWeight: 500,
    },
    {
      src: '/fonts/work-sans-v13-latin-300italic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
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
        {/* 
          // !  --------------------------------
          // !  SIDECONTENT
          // !  -------------------------------- 
        */}
        <View style={styles.sectionSecondary}>
          {/* 
            // !  IMAGE
          */}
          {resumeData.image && (
            <Image
              // source="https://source.unsplash.com/random/"
              source={resumeData.image}
              style={styles.imageSecondary}
            />
          )}

          {/* 
            // !  NAME
          */}
          <Text style={styles.h1Secondary}>
            {resumeData?.name.length > 15
              ? resumeData?.name.replace(/\s+/g, '\n')
              : resumeData?.name}
          </Text>
          <Text style={styles.h2Secondary}>{resumeData?.jobTitle}</Text>
          {/* 
            // !  CONTACT
          */}
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
          {/* 
            // !  SKILLS
          */}
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
          {/* 
            // !  LANGUAGES
          */}
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Sprachen</Text>
            {resumeData?.languages?.map((item, i) => {
              return (
                <ProgressBar
                  language={item.title}
                  progress={`${item.level}%`}
                  key={i}
                />
              )
            })}
          </View>
          {/* 
            // !  SOCIAL
          */}
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Social</Text>
            <Text style={styles.pSecondary}>www.onivue.ch</Text>
          </View>
        </View>
        <View style={styles.sectionSecondaryOverlay} fixed></View>
        {/* 
          // !  --------------------------------
          // !  MAIN
          // !  --------------------------------
        */}
        <View style={styles.sectionMain}>
          {/* 
            // !  ABOUTME
          */}
          <Text style={styles.h2}>Über mich</Text>
          <MultLineText text={resumeData?.aboutMe} />
          <View style={styles.separator}></View>
          {/* 
            // !  EXPERIENCE 
          */}
          <View>
            <Text style={styles.h2}>Erfahrung</Text>
            {resumeData?.experience?.map((item, i) => {
              return <TextBlock item={item} key={i} />
            })}
          </View>
          <View style={styles.separator}></View>
          {/* 
            // !  EDUCATION
          */}
          <View>
            <Text style={styles.h2}>Ausbildung</Text>
            {resumeData?.education?.map((item, i) => {
              return <TextBlock item={item} key={i} />
            })}
            <MultLineText text={resumeData?.education} />
          </View>
        </View>
        {/* 
          // !  --------------------------------
          // !  PAGENUMBER
          // !  --------------------------------
        */}
        {/* <Text
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
        /> */}
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
    <Text style={{ ...styles.listItemContent, ...styles.p }}>{children}</Text>
  </View>
)

export const MultLineText = ({ text }) => {
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

export const TextBlock = ({ item }) => {
  return (
    <View wrap={false}>
      <Text style={styles.h3}>{item.title}</Text>
      <Text style={styles.em}>
        {item.location} | {item.from} - {item.to}
      </Text>
      <MultLineText text={item.summary} />
    </View>
  )
}
