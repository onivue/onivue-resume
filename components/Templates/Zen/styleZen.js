const defaultColors = {
  primary: 'rgba(46,204,113)',
  secondary: 'rgba(46,204,113,0.1)',
}

const defaultTextSizes = {
  h1: '26px',
  h2: '15px',
  h3: '12px',
  h4: '11px',
  p: '11px',
}

const style = (
  accentColor = 'rgba(255,193,7)',
  textSizes = defaultTextSizes,
) => {
  const colors = {
    primary: accentColor,
    secondary: accentColor.replace(/[^,]+(?=\))/, '0.1'),
  }
  return {
    colors,
    body: {
      paddingVertical: 35,
      fontFamily: 'Work Sans',
      textAlign: 'justify',
    },
    //
    // !SECTION LAYOUT
    //
    section0: {
      position: 'absolute',
      textAlign: 'left',
      zIndex: '10',
      top: '35',
      width: 220,
      paddingLeft: 35,
      paddingRight: 12,
      backgroundColor: 'white',
    },
    section0Overlay: {
      position: 'absolute',
      height: '297mm',
      zIndex: '20',
      top: '0',
      width: 220,
      backgroundColor: 'white',
    },
    section1: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 220,
      paddingLeft: 25,
      paddingRight: 35,
      fontSize: 10,
    },

    //
    // ! DETAILS BLOCKS
    //
    detailsImage: {
      borderRadius: '50%',
      // borderRadius: '5px',
      objectFit: 'cover',
      marginBottom: 15,
      marginRight: 10,
      width: 180,
      height: 180,
    },
    detailsName: {
      fontFamily: 'Montserrat',
      fontSize: textSizes.h1,
      marginBottom: 0,
      fontWeight: '600',
    },
    detailsTitle: {
      fontFamily: 'Montserrat',
      fontSize: textSizes.h2,
      marginBottom: 6,
    },
    detailsContact: {
      fontFamily: 'Work Sans',
      fontSize: textSizes.p,
      marginBottom: '2px',
    },
    //
    // ! VARIA COMPONENTS
    //
    blockWrapper: {
      marginVertical: 10,
    },
    separator: {
      height: '3px',
      width: '100%',
      backgroundColor: colors.secondary,
      marginVertical: '6px',
    },
    //
    // ! TYPOGRAPHY
    //
    h1: {
      fontFamily: 'Montserrat',
      fontSize: textSizes.h1,
      color: colors.primary,
      fontWeight: '600',
      lineHeight: 1.4,
    },

    h2: {
      fontFamily: 'Montserrat',
      fontSize: textSizes.h2,
      color: colors.primary,
      fontWeight: '600',
      lineHeight: 1.4,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: textSizes.h3,
      fontWeight: '600',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: 'Work Sans',
      fontSize: textSizes.h4,
      fontWeight: '600',
      lineHeight: 1.4,
    },
    p: {
      fontFamily: 'Work Sans',
      fontSize: textSizes.p,
      lineHeight: 1.4,
    },
    em: {
      fontFamily: 'Work Sans',
      fontStyle: 'italic',
      fontSize: textSizes.p,
      lineHeight: 1.4,
    },
    link: {
      fontFamily: 'Work Sans',
      fontSize: textSizes.p,
      lineHeight: 1.4,
      textDecoration: 'none',
      color: 'black',
    },
    //
    // ! LIST
    //
    listItem: {
      flexDirection: 'row',
    },
    listItemContent: {
      flex: 1,
    },
    listBulletPoint: {
      width: 10,
      fontSize: 10,
      color: colors.primary,
    },
    //
    // ! PROGRESS BAR
    //
    progressBarLine: {
      backgroundColor: colors.secondary,
      height: '5px',
      borderRadius: '50%',
      marginBottom: 3,
    },
    progressBarValue: {
      backgroundColor: colors.primary,
      height: '5px',
      borderRadius: '50%',
    },
    //
    // ! TAG
    //
    tagWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    tag: {
      fontSize: 8,
      borderRadius: '50%',
      color: colors.primary,
      backgroundColor: colors.secondary,
      paddingHorizontal: 6,
      paddingVertical: 2,
      marginRight: 4,
      marginVertical: 2,
    },
  }
}

export default style
