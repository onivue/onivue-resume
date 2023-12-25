import {
  Document,
  Font,
  Page,
  Text,
  View
} from '@react-pdf/renderer'

import docStyle from './styleZen'

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

Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
})

Font.registerHyphenationCallback((word) => [word])

export const CoverZen = ({resumeSettings, formValues}) => {
  const styles = docStyle(resumeSettings.accentColor)

  return (
    <Document
      title={resumeSettings.title}
      author={resumeSettings.author}
      subject={resumeSettings.subject}
      keywords={resumeSettings.keywords}
      creator={resumeSettings.creator}
      producer={resumeSettings.producer}
      language={resumeSettings.language}
    >
      <Page size="A4" style={{ padding: 35 }}>
        <View
          style={{
            textAlign: 'right',
            borderRadius: 10,
            // backgroundColor: styles.colors.secondary,
            paddingHorizontal: 10,
            // paddingVertical: 5,
            width: '100%',

            // color: styles.colors.primary,
          }}
        >
          <Text style={styles.h3}>
            {formValues.details.firstName} {formValues.details.lastName}
          </Text>
          <View>
            <Text style={styles.p}>
              {[
                formValues.details.address,
                formValues.details.location,
                formValues.details.phone,
                formValues.details.mail,
              ].map((item, index, arr) => {
                return (
                  <Text key={index}>
                    {item}
                    {index !== arr.length - 1 && item !== '' && (
                      <Text style={{ color: styles.colors.primary }}>
                        {' | '}
                      </Text>
                    )}
                  </Text>
                )
              })}
              {/* Ringstrasse 8{' '}
              <Text style={{ color: styles.colors.primary }}>|</Text> 9200
              Gossau <Text style={{ color: styles.colors.primary }}>|</Text> 076
              801 36 64 <Text style={{ color: styles.colors.primary }}>|</Text>{' '}
              lknope@parksdept.com */}
            </Text>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View
          style={{
            borderRadius: 10,
            marginTop: 25,
          }}
        >
          <Text style={styles.h3}>{formValues.cover.receiver}</Text>
          <Text style={styles.p}>{formValues.cover.receiverAddress}</Text>
        </View>

        <View style={{ marginTop: 45 }}>
          <View
            style={{
              textAlign: 'right',
              marginBottom: 20,
            }}
          >
            <Text style={styles.p}>{formValues.cover.date}</Text>
          </View>
          <Text style={styles.h2}>{formValues.cover?.title}</Text>
          <Text style={styles.h3}>{formValues.cover?.subtitle}</Text>
        </View>
        <View style={{ marginTop: 15, textAlign: 'justify' }}>
          <Text style={styles.p}>{formValues.cover?.summary}</Text>
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
    return <>
      {text.split('\n').map((item, i) => {
        if (item.match(/^-\s/)) {
          return (
            <ListItem key={i} styles={styles}>
              {item.replace(/^-\s/, '')}
            </ListItem>
          );
        } else {
          return (
            <Text key={i} style={styles.p}>
              {item}
            </Text>
          )
        }
      })}
    </>;
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
