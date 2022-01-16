export const blocksObject = {
  details: {
    type: 'fields',
    fields: [
      {
        label: 'Bild',
        id: 'image',
        type: 'file',
        required: false,
      },
      {
        label: 'Vorname',
        id: 'firstName',
        type: 'text',
        required: true,
      },
      {
        label: 'Nachname',
        id: 'lastName',
        type: 'text',
        required: true,
      },
      {
        label: 'Job Titel',
        id: 'jobTitle',
        type: 'text',
        required: true,
      },
      {
        label: 'Adresse',
        id: 'address',
        type: 'text',
        required: false,
      },
      {
        label: 'PLZ',
        id: 'plz',
        type: 'text',
        required: false,
      },
      {
        label: 'Telefon',
        id: 'phone',
        type: 'text',
        required: false,
      },
      {
        label: 'Email',
        id: 'mail',
        type: 'text',
        required: false,
      },
    ],
  },
  // ! -----------------------
  history: {
    type: 'fieldarray',
    fields: [
      {
        label: 'Title',
        id: 'title',
        type: 'text',
        required: true,
      },
      {
        label: 'Location',
        id: 'location',
        type: 'text',
        required: true,
      },
      {
        label: 'Von',
        id: 'from',
        type: 'text',
        required: true,
      },
      {
        label: 'Bis',
        id: 'to',
        type: 'text',
        required: true,
      },
      {
        label: 'Summary',
        id: 'summary',
        type: 'textarea',
        required: true,
      },
      //   ],
      // },
    ],
  },
  // ! -----------------------
  tag: {
    type: 'fields',
    fields: [
      {
        label: 'Tag',
        id: 'tags',
        type: 'taginput',
        required: false,
        helperText: 'Mit Enter bestätigen',
      },
    ],
  },
  // ! -----------------------
  text: {
    type: 'fields',
    fields: [
      {
        label: 'Text',
        id: 'text',
        type: 'textarea',
        required: true,
        rows: 5,
      },
    ],
  },
  // ! -----------------------
  level: {
    type: 'fieldarray',
    fields: [
      {
        label: 'Title',
        id: 'title',
        type: 'text',
        required: true,
      },
      {
        label: 'Level',
        id: 'level',
        type: 'rangeinput',
        required: true,
      },
    ],
  },
  // ! -----------------------
  links: { type: 'fieldarray', fields: [] },
}
