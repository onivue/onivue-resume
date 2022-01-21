import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from '@react-pdf/renderer'

import { resumeStyle } from '@/components/Resume/style'
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
const styles = StyleSheet.create(resumeStyle)

export const MyDoc = ({}) => {
  const resumeData = useResumeStore((state) => state.formValues)
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
          {resumeData.details.image && (
            <Image
              // source="https://source.unsplash.com/random/"
              source={resumeData.details.image}
              style={styles.imageSecondary}
            />
          )}

          {/* 
            // !  NAME
          */}
          <View
            style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
          >
            <Text style={styles.h1Secondary}>
              {resumeData.details.firstName}{' '}
            </Text>
            <Text style={styles.h1Secondary}>
              {resumeData.details.lastName}
            </Text>
          </View>
          <Text style={styles.h2Secondary}>{resumeData.details.jobTitle}</Text>
          {/* 
            // !  CONTACT
          */}
          <View style={styles.wrapperSecondary} wrap={false}>
            <Text style={styles.h3Secondary}>Kontakt</Text>
            {[
              resumeData.details.address,
              resumeData.details.plz,
              resumeData.details.phone,
              resumeData.details.mail,
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

          {resumeData.sections[0].blocks.map((block, index) => {
            if (block.type === 'tag') {
              return (
                <View style={styles.wrapperSecondary} wrap={false} key={index}>
                  <Text style={styles.h3Secondary}>{block.title}</Text>
                  <View style={styles.tagWrapper}>
                    {block.values.map((value, index) => {
                      return value.tags.map((tag, index) => {
                        return (
                          <Text key={index} style={styles.tag}>
                            {tag}
                          </Text>
                        )
                      })
                    })}
                  </View>
                </View>
              )
            }
          })}
          {/* 
            // !  LANGUAGES
          */}
          {resumeData.sections[0].blocks.map((block, index) => {
            if (block.type === 'level') {
              return (
                <View style={styles.wrapperSecondary} wrap={false} key={index}>
                  <Text style={styles.h3Secondary}>{block.title}</Text>
                  {block.values.map((value, index) => {
                    return (
                      <ProgressBar
                        title={value.title}
                        progress={`${value.level || 50}%`}
                        key={index}
                      />
                    )
                  })}
                </View>
              )
            }
          })}
          {/* 
            // !  SOCIAL
          */}
          {resumeData.sections[0].blocks.map((block, index) => {
            if (block.type === 'links') {
              return (
                <View style={styles.wrapperSecondary} wrap={false} key={index}>
                  <Text style={styles.h3Secondary}>{block.title}</Text>
                  {block.values.map((value, index) => {
                    return (
                      <Link
                        src={value.url}
                        style={styles.pSecondary}
                        key={index}
                      >
                        {value.title}
                      </Link>
                    )
                  })}
                </View>
              )
            }
          })}
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
          {resumeData.sections[1].blocks.map((block, index) => {
            if (block.type === 'text') {
              return (
                <View style={styles.wrapperSecondary} wrap={false} key={index}>
                  <Text style={styles.h2}>{block.title}</Text>
                  {block.values.map((value, index) => {
                    return <MultLineText text={value.text} key={index} />
                  })}
                </View>
              )
            }
          })}
          <View style={styles.separator}></View>
          {/* 
            // !  EXPERIENCE 
          */}
          {resumeData.sections[1].blocks.map((block, index) => {
            if (block.type === 'career') {
              return (
                <View style={styles.wrapperSecondary} wrap={false} key={index}>
                  <Text style={styles.h2}>{block.title}</Text>
                  {block.values.map((value, index) => {
                    return <TextBlock item={value} key={index} />
                  })}
                </View>
              )
            }
          })}
          <View style={styles.separator}></View>
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

const ProgressBar = ({ title, progress }) => (
  <>
    <Text style={{ fontSize: 10, marginBottom: 3 }}>{title || '...'}</Text>
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
