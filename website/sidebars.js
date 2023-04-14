// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [
    'about/index',
    'about/things-were-interested-in',
    'about/roadmap',
    'about/contribute',
    'about/history',
  ],
  learn: ['learn/index', 'learn/entries', 'learn/operations', 'learn/networks'],
  specification: [
    'specification/index',
    'specification/key-concepts',
    {
      type: 'category',
      label: 'Core data types',
      items: [
        'specification/data-types/bamboo',
        'specification/data-types/key-pairs',
        'specification/data-types/operations',
        'specification/data-types/schemas',
        'specification/data-types/documents',
        'specification/data-types/document-views',
      ],
    },
    'specification/authorisation',
    'specification/encryption',
    {
      type: 'category',
      label: 'APIs',
      items: [
        'specification/APIs/overview',
        'specification/APIs/publishing',
        'specification/APIs/queries',
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      items: [
        'specification/networking/clients-nodes',
        'specification/networking/discovery',
      ],
    },
    'specification/replication',
    'specification/encoding-data',
    'specification/glossary',
  ],
};

module.exports = sidebars;
