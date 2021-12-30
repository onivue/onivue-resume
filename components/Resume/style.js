const colors = {
  primary: 'rgba(46,204,113)',
  secondary: 'rgba(46,204,113,0.1)',
}

export const resumeStyle = {
  body: {
    paddingTop: 35,
    paddingBottom: 35,
    fontFamily: 'Open Sans',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    left: '0',
    right: '0',
    top: '0',
    // height: '100%',
  },
  sectionSide: {
    position: 'absolute',
    textAlign: 'left',
    zIndex: '10',
    top: '0',
    width: 220,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  sectionSideOverlay: {
    position: 'absolute',
    height: '297mm',
    zIndex: '20',
    top: '0',
    width: 220,
    backgroundColor: 'white',
  },
  sectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 220,
    paddingHorizontal: 30,
    fontSize: 10,
  },
  section: {
    // textAlign: 'center',
    // height: '100%',
  },
  sectionH1: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 18,
    paddingBottom: '10px',
  },
  sectionSeparator: {
    height: '3px',
    width: '100%',
    backgroundColor: colors.secondary,
    marginVertical: '15px',
  },
  sectionH2: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: '4px',
  },
  sectionH3: {
    fontSize: 10,
    fontWeight: '600',
    marginBottom: '8px',
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
    color: colors.primary,
    backgroundColor: colors.secondary,
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
    color: colors.primary,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
  },
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
