export const fieldGroups = [
  {
    groupName: 'Persönliche Informationen',
    defaultOpen: true,
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
      {
        label: 'Über mich',
        id: 'aboutMe',
        type: 'textarea',
        required: true,
        rows: 5,
      },
    ],
  },
  {
    groupName: 'Skills',
    defaultOpen: false,
    fields: [
      {
        label: 'Skills',
        id: 'skills',
        type: 'taginput',
        required: false,
        helperText: 'Mit Enter bestätigen',
      },
    ],
  },
  {
    groupName: 'Sprachen',
    defaultOpen: false,
    fields: [
      {
        name: 'languages',
        type: 'fieldarray',
        fieldsArray: [
          {
            label: 'Sprache',
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
    ],
  },
  {
    groupName: 'Berufserfahrung',
    defaultOpen: false,
    fields: [
      {
        name: 'experience',
        type: 'fieldarray',
        fieldsArray: [
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
        ],
      },
    ],
  },
  {
    groupName: 'Ausbildung',
    defaultOpen: false,
    fields: [
      {
        name: 'education',
        type: 'fieldarray',
        fieldsArray: [
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
        ],
      },
    ],
  },
]
