const defaultFormValues = {
  details: {
    firstName: 'Lola',
    lastName: 'Balboa',
    jobTitle: 'Pharma-Assistentin',
    address: 'Omnistreet 9',
    phone: '317-660-2160',
    mail: 'some-email@mail.com',
    location: '9000 St. Gallen',
    image:
      'data:image/jpeg;base64,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',
  },
  sections: [
    {
      name: 'Infobereich',
      blocks: [
        {
          title: 'Skills',
          type: 'tag',
          values: [
            { tags: ['Microsoft', 'Word', 'Excel', 'SAP', 'PowerPoint'] },
          ],
        },
        {
          title: 'Sprachen',
          type: 'level',
          values: [
            { title: 'Deutsch', level: '100' },
            { title: 'Englisch', level: '90' },
          ],
        },
        {
          title: 'Soft Skills',
          type: 'text',
          values: [{ text: '- Positivity\n- Leadership\n- Public Speaking' }],
        },
        {
          title: 'Links',
          type: 'links',
          values: [{ title: 'www.onivue.ch', url: 'https://onivue.ch' }],
        },
      ],
    },
    {
      name: 'Hauptbereich',
      blocks: [
        {
          title: 'Über mich',
          type: 'text',
          values: [
            {
              text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.',
            },
          ],
        },
        {
          title: 'Berufserfahrung',
          type: 'career',
          values: [
            {
              title: 'City Councilor',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2012',
              to: 'aktuell',
              summary:
                'In placerat nisi pellentesque felis blandit, vel varius justo eleifend. Etiam porttitor tortor vel lobortis ultricies.\n- Nam non libero accumsan, sagittis nibh vitae, auctor.\n- Sed hendrerit dui a ante porttitor, vitae tristique.\n- Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.',
            },
            {
              title: 'Deputy Director Parks Department',
              location: 'City of Pawnee, Indiana',
              from: 'Feb 2009',
              to: 'Jan 2012',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
            {
              title: 'Employee Parks Department',
              location: 'City of Pawnee, Indiana',
              from: 'Jul 1999',
              to: 'Jan 2012',
              summary:
                '- Sed ut lorem viverra urna malesuada interdum in ut risus.\n- Duis at sem non justo aliquam iaculis.\n- Quisque lobortis nibh non turpis interdum ornare.\n- Sed et diam nec arcu tempor suscipit sit amet at tellus.\n- Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.',
            },
          ],
        },
        {
          title: 'Ausbildung',
          type: 'career',
          values: [
            {
              title: 'A Environmental and Public Affairs',
              location: 'Indiana University, Bloomington, Indiana',
              from: 'Oct 1993',
              to: 'May 1993',
              summary: '',
            },
          ],
        },
      ],
    },
  ],
  cover: {
    title: 'Bewerbung als Lorem ipsum',
    subtitle: 'Lorem ipsum dolor sit amet',
    summary:
      'Sehr geehrte Damen und Herren\n\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n\nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \n\nLorem ipsum dolor sit amet\n\n\nLola Balboa\n',
    receiver: 'Company Name AG',
    receiverAddress: 'Companystrasse 1\n9000 St. Gallen',
    date: 'Gossau, 16. Januar 2022',
  },
}
export default defaultFormValues
