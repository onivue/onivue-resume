export const fieldGroups = [
  {
    groupName: 'Persönliche Informationen',
    defaultOpen: true,
    fields: [
      {
        label: 'Name',
        id: 'name',
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
        rows: 3,
      },
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
            label: 'Summary',
            id: 'summary',
            type: 'text',
            required: true,
          },
        ],
      },
    ],
  },
]
