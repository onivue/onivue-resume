import {
  Page,
  Text,
  View,
  Document,
  Font,
  Image,
  Link,
} from '@react-pdf/renderer'

import docStyle from './styleZen'
import useResumeStore from '@/stores/useResumeStore'

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
// Font.registerHyphenationCallback((word) => [word])
Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
})

export const CoverZen = ({}) => {
  const resumeDesign = useResumeStore((state) => state.resumeDesign)
  const resumeMetadata = useResumeStore((state) => state.resumeMetadata)
  const styles = docStyle(resumeDesign.accentColor)
  const resumeData = useResumeStore((state) => state.formValues)

  return (
    <Document
      title={resumeMetadata.title}
      author={resumeMetadata.author}
      subject={resumeMetadata.subject}
      keywords={resumeMetadata.keywords}
      creator={resumeMetadata.creator}
      producer={resumeMetadata.producer}
      language={resumeMetadata.language}
    >
      <Page size="A4" style={{ padding: 35 }}>
        <View style={{ height: 120, paddingTop: 20 }}>
          <Text style={styles.p}>Empfänger</Text>
        </View>
        <View style={{ marginTop: 60 }}>
          <Text style={styles.h2}>{resumeData.cover?.title}</Text>
          <Text style={styles.h3}>{resumeData.cover?.subtitle}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.p}>{resumeData.cover?.summary}</Text>
        </View>
        {/* 
          // !  --------------------------------
          // !  PAGENUMBER
          // !  --------------------------------
        */}
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

const ProgressBar = ({ title, progress, styles }) => (
  <>
    <Text style={{ fontSize: 10, marginBottom: 3 }}>{title || '...'}</Text>
    <View style={styles.progressBarLine}>
      <View style={{ width: progress, ...styles.progressBarValue }}></View>
    </View>
  </>
)

export const ListItem = ({ children, styles }) => (
  <View style={styles.listItem}>
    <Text style={styles.listBulletPoint}>•</Text>
    <Text style={{ ...styles.listItemContent, ...styles.p }}>{children}</Text>
  </View>
)

export const TextBlock = ({ text, styles }) => {
  if (typeof text === 'string') {
    return (
      <>
        {text.split('\n').map((item, i) => {
          if (item.match(/^-\s/)) {
            return (
              <ListItem key={i} styles={styles}>
                {item.replace(/^-\s/, '')}
              </ListItem>
            )
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

export const CareerBlock = ({ item, styles }) => {
  return (
    <>
      <Text style={styles.h4}>{item.title}</Text>
      <Text style={styles.em}>
        {item.location} | {item.from} - {item.to}
      </Text>
      <TextBlock styles={styles} text={item.summary} />
    </>
  )
}
