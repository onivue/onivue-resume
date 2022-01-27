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

// const styles = StyleSheet.create(resumeStyle)

export const MyDoc = ({}) => {
  const resumeDesign = useResumeStore((state) => state.resumeDesign)
  const resumeMetadata = useResumeStore((state) => state.resumeMetadata)
  const styles = resumeStyle(resumeDesign.accentColor)
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
      <Page size="A4" style={styles.body}>
        {/* 
          // !  --------------------------------
          // !  SIDECONTENT
          // !  -------------------------------- 
        */}
        <View style={styles.section0}>
          {/* // !  DETAILS */}
          {resumeData.details.image && (
            <Image
              // source="https://source.unsplash.com/random/"
              source={resumeData.details.image}
              style={styles.detailsImage}
            />
          )}
          <View
            style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}
          >
            <Text style={styles.detailsName}>
              {resumeData.details.firstName}{' '}
            </Text>
            <Text style={styles.detailsName}>
              {resumeData.details.lastName}
            </Text>
          </View>
          <Text style={styles.detailsTitle}>{resumeData.details.jobTitle}</Text>
          <View style={styles.blockWrapper} wrap={false}>
            <Text style={styles.h3}>Kontakt</Text>
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
                      <Text style={styles.detailsContact} key={i}>
                        {char}
                      </Text>
                    ))}
                  </View>
                )
              }
            })}
          </View>
          {/*  // !  SECTION 0 */}

          {resumeData.sections[0].blocks.map((block, index) => {
            return (
              <View wrap={false} key={index}>
                {block.type === 'text' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h3}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <TextBlock
                          text={value.text}
                          styles={styles}
                          key={index}
                        />
                      )
                    })}
                  </View>
                )}

                {block.type === 'career' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h3}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <CareerBlock item={value} styles={styles} key={index} />
                      )
                    })}
                  </View>
                )}

                {block.type === 'tag' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h3}>{block.title}</Text>
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
                )}
                {block.type === 'level' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h3}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <ProgressBar
                          title={value.title}
                          progress={`${value.level || 50}%`}
                          styles={styles}
                          key={index}
                        />
                      )
                    })}
                  </View>
                )}
                {block.type === 'links' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h3}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <Link src={value.url} style={styles.link} key={index}>
                          {value.title}
                        </Link>
                      )
                    })}
                  </View>
                )}

                {/* {index !== resumeData.sections[0].blocks.length - 1 && (
                  <View style={styles.separator} />
                )} */}
              </View>
            )
          })}
        </View>
        <View style={styles.section0Overlay} fixed />
        {/* 
          // !  --------------------------------
          // !  MAIN
          // !  --------------------------------
        */}
        <View style={styles.section1}>
          {/* // !  SECTION 1 */}
          {resumeData.sections[1].blocks.map((block, index) => {
            return (
              <View wrap={false} key={index}>
                {block.type === 'text' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h2}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <TextBlock
                          text={value.text}
                          styles={styles}
                          key={index}
                        />
                      )
                    })}
                  </View>
                )}

                {block.type === 'career' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h2}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <CareerBlock item={value} styles={styles} key={index} />
                      )
                    })}
                  </View>
                )}

                {block.type === 'tag' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h2}>{block.title}</Text>
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
                )}
                {block.type === 'level' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h2}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <ProgressBar
                          title={value.title}
                          progress={`${value.level || 50}%`}
                          styles={styles}
                          key={index}
                        />
                      )
                    })}
                  </View>
                )}
                {block.type === 'links' && (
                  <View style={styles.blockWrapper} wrap={false}>
                    <Text style={styles.h2}>{block.title}</Text>
                    {block.values.map((value, index) => {
                      return (
                        <Link src={value.url} style={styles.link} key={index}>
                          {value.title}
                        </Link>
                      )
                    })}
                  </View>
                )}

                {index !== resumeData.sections[1].blocks.length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            )
          })}
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
    <View wrap={false}>
      <Text style={styles.h4}>{item.title}</Text>
      <Text style={styles.em}>
        {item.location} | {item.from} - {item.to}
      </Text>
      <TextBlock styles={styles} text={item.summary} />
    </View>
  )
}
