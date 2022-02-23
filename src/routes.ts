export const routersOrder = [
  'converters',
  'encoders',
  'formatters',
  'generators',
  'text',
  'graphic',
  'encryptors',
] as const;

export const routes = {
  converters: [
    {
      title: 'home',
      shortTitle: 'home',
      path: '/converters/json-to-yaml',
    },
    {
      title: 'numberBase',
      shortTitle: 'numberBase',
      path: '/converters/number-base',
    },
    {
      title: 'numberBase',
      shortTitle: 'numberBase',
      path: '/converters/number-base',
    },
  ],
  encoders: [
    {
      title: 'html',
      shortTitle: 'html',
      path: '/encoders/html',
    },
    {
      title: 'url',
      shortTitle: 'url',
      path: '/encoders/url',
    },
    {
      title: 'base64',
      shortTitle: 'base64',
      path: '/encoders/base64',
    },
    {
      title: 'gzip',
      shortTitle: 'gzip',
      path: '/encoders/gzip',
    },
    {
      title: 'jwt',
      shortTitle: 'jwt',
      path: '/encoders/jwt',
    },
  ],
  formatters: [
    {
      title: 'json',
      shortTitle: 'json',
      path: '/formatters/json',
    },
    {
      title: 'sql',
      shortTitle: 'sql',
      path: '/formatters/sql',
    },
    {
      title: 'xml',
      shortTitle: 'xml',
      path: '/formatters/xml',
    },
  ],
  generators: [
    {
      title: 'hash',
      shortTitle: 'hash',
      path: '/generators/hash',
    },
    {
      title: 'uuid',
      shortTitle: 'uuid',
      path: '/generators/uuid',
    },
    {
      title: 'lorem',
      shortTitle: 'lorem',
      path: '/generators/lorem',
    },
    {
      title: 'checksum',
      shortTitle: 'checksum',
      path: '/generators/checksum',
    },
  ],
  encryptors: [
    {
      title: 'aes',
      shortTitle: 'aes',
      path: '/encryptors/aes',
    },
    {
      title: 'des',
      shortTitle: 'des',
      path: '/encryptors/des',
    },
  ],
  text: [
    {
      title: 'inspector',
      shortTitle: 'inspector',
      path: '/text/inspector',
    },
    {
      title: 'regex',
      shortTitle: 'regex',
      path: '/text/regex',
    },
    {
      title: 'diff',
      shortTitle: 'diff',
      path: '/text/diff',
    },
    {
      title: 'hyphenation',
      shortTitle: 'hyphenation',
      path: '/text/hyphenation',
    },
  ],
  graphic: [
    {
      title: 'compressor',
      shortTitle: 'compressor',
      path: '/graphic/compressor',
    },
    {
      title: 'imageConverter',
      shortTitle: 'imageConverter',
      path: '/graphic/image-converter',
    },
    {
      title: 'blindessSimulator',
      shortTitle: 'blindessSimulator',
      path: '/graphic/blindess-simulator',
    },
    {
      title: 'colorPicker',
      shortTitle: 'colorPicker',
      path: '/graphic/color-picker',
    },
  ],
} as const;
