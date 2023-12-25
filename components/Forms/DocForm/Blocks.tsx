import {
  HiLink,
  HiMenu,
  HiMenuAlt1,
  HiOutlineAdjustments,
  HiOutlineMenuAlt1,
  HiOutlineTag,
  HiOutlineUser,
} from 'react-icons/hi';

const iconStyle = 'h-5 w-5';

export const blocksObject = {
  details: {
    type: 'fields',
    icon: <HiOutlineUser className={iconStyle} />,
    displayname: '',
    fields: [
      {
        label: 'Vorname',
        id: 'firstName',
        type: 'text',
        required: false,
      },
      {
        label: 'Nachname',
        id: 'lastName',
        type: 'text',
        required: false,
      },
      {
        label: 'Job Titel',
        id: 'jobTitle',
        type: 'text',
        required: false,
      },
      {
        label: 'Adresse',
        id: 'address',
        type: 'text',
        required: false,
      },
      {
        label: 'Ort',
        id: 'location',
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
        label: 'Mail',
        id: 'mail',
        type: 'text',
        required: false,
      },
      {
        label: 'Bild',
        id: 'image',
        type: 'file',
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
        label: 'Empfänger',
        id: 'receiver',
        type: 'text',
        required: false,
      },
      {
        label: 'Empfänger Adresse',
        id: 'receiverAddress',
        type: 'textarea',
        required: false,
        rows: 3,
      },
      {
        label: 'Datumsangabe',
        id: 'date',
        type: 'text',
        required: false,
      },
      {
        label: 'Überschrift',
        id: 'title',
        type: 'text',
        required: false,
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
        label: 'Titel',
        id: 'title',
        type: 'text',
        required: false,
      },
      {
        label: 'Ort',
        id: 'location',
        type: 'text',
        required: false,
      },
      {
        label: 'Von',
        id: 'from',
        type: 'text',
        required: false,
      },
      {
        label: 'Bis',
        id: 'to',
        type: 'text',
        required: false,
      },
      {
        label: 'Summary',
        id: 'summary',
        type: 'textarea',
        required: false,
      },
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
        required: false,
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
        required: false,
      },
      {
        label: 'Level',
        id: 'level',
        type: 'rangeinput',
        required: false,
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
        label: 'Titel',
        id: 'title',
        type: 'text',
        required: false,
      },
      {
        label: 'URL',
        id: 'url',
        type: 'text',
        required: false,
      },
    ],
  },
};
