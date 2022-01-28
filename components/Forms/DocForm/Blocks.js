import {
  HiLink,
  HiMenu,
  HiMenuAlt1,
  HiOutlineAdjustments,
  HiOutlineMenuAlt1,
  HiOutlineTag,
  HiOutlineUser,
} from 'react-icons/hi'

const iconStyle = 'h-5 w-5'

export const blocksObject = {
  details: {
    type: 'fields',
    icon: <HiOutlineUser className={iconStyle} />,
    displayname: '',
    fields: [
      // {
      //   label: 'Bild',
      //   id: 'image',
      //   type: 'file',
      //   required: false,
      // },
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
  cover: {
    type: 'fields',
    icon: <HiMenu className={iconStyle} />,
    displayname: '',
    fields: [
      {
        label: 'Überschrift',
        id: 'title',
        type: 'text',
        required: true,
      },
      {
        label: 'Untertitel',
        id: 'subtitle',
        type: 'text',
        required: false,
      },
      {
        label: 'Summary',
        id: 'summary',
        type: 'textarea',
        required: false,
        rows: 15,
      },
    ],
  },
  // ! -----------------------
  career: {
    type: 'fieldarray',
    icon: <HiMenuAlt1 className={iconStyle} />,
    displayName: 'Werdegang',
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
    icon: <HiOutlineTag className={iconStyle} />,
    displayName: 'Tags',
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
    icon: <HiMenu className={iconStyle} />,
    displayName: 'Textfeld',
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
    icon: <HiOutlineAdjustments className={iconStyle} />,
    displayName: 'Level',
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
  links: {
    type: 'fieldarray',
    icon: <HiLink className={iconStyle} />,
    displayName: 'Hyperlinks',
    fields: [
      {
        label: 'Title',
        id: 'title',
        type: 'text',
        required: true,
      },
      {
        label: 'URL',
        id: 'url',
        type: 'text',
        required: true,
      },
    ],
  },
}
