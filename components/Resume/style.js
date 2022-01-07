const colors = {
  primary: 'rgba(46,204,113)',
  secondary: 'rgba(46,204,113,0.1)',
}

const textSizes = {
  h1: '26px',
  h2: '16px',
  h3: '12px',
  h4: '11px',
  p: '10px',
}

export const resumeStyle = {
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    fontFamily: 'Work Sans',
  },
  //
  //
  //
  sectionSecondary: {
    position: 'absolute',
    textAlign: 'left',
    zIndex: '10',
    top: '0',
    width: 220,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 12,
    backgroundColor: 'white',
  },
  sectionSecondaryOverlay: {
    position: 'absolute',
    height: '297mm',
    zIndex: '20',
    top: '0',
    width: 220,
    backgroundColor: 'white',
  },
  wrapperSecondary: {
    marginTop: 10,
  },
  imageSecondary: {
    borderRadius: '10px',
    objectFit: 'cover',
  },
  //
  //
  //

  //
  //
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
  //
  //
  //

  sectionMain: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 220,
    paddingHorizontal: 30,
    fontSize: 10,
  },
  separator: {
    height: '3px',
    width: '100%',
    backgroundColor: colors.secondary,
    marginVertical: '15px',
  },
  //
  //
  //
  h1Secondary: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h1,
    marginBottom: 0,
    fontWeight: '600',
  },
  h2Secondary: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h2,
    marginBottom: 6,
  },
  h3Secondary: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h3,
    marginBottom: 2,
    fontWeight: '600',
  },
  h4Secondary: {
    fontFamily: 'Work Sans',
    fontSize: textSizes.h4,
    marginBottom: 6,
  },
  pSecondary: {
    fontFamily: 'Work Sans',
    fontSize: textSizes.p,
  },
  //
  //
  //
  h1: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h1,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: '4px',
  },

  h2: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h2,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: '4px',
  },
  h3: {
    fontFamily: 'Montserrat',
    fontSize: textSizes.h3,
    fontWeight: '600',
    marginBottom: '4px',
  },
  h4: {
    fontFamily: 'Work Sans',
    fontSize: textSizes.h4,
    fontWeight: '400',
    marginBottom: '4px',
  },
  p: {
    fontFamily: 'Work Sans',
    fontSize: textSizes.p,
    marginBottom: '4px',
  },
  em: {
    fontFamily: 'Work Sans',
    fontStyle: 'italic',
    fontSize: textSizes.p,
    marginBottom: '4px',
  },
  //
  //
  //
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
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
  //
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
}
