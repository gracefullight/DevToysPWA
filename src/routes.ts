import {
  VscNote,
  VscCalendar,
  VscCode,
  VscLink,
  VscPackage,
  VscFileZip,
  VscSymbolNumeric,
  VscRegex,
  VscFold,
  VscJson,
  VscSquirrel,
  VscArrowRight,
  VscStarEmpty,
  VscReferences,
  VscSaveAs,
  VscLock,
  VscUnlock,
  VscCaseSensitive,
  VscDiff,
  VscDiffRemoved,
  VscSymbolColor,
  VscFileMedia,
  VscBrowser,
  VscSymbolMisc,
} from 'react-icons/vsc';

export const ROUTES_ORDER = [
  'converters',
  'encoders',
  'formatters',
  'generators',
  'text',
  'graphic',
  'encryptors',
] as const;

export const ROUTES = {
  converters: [
    {
      title: 'jsonToYaml',
      shortTitle: 'jsonToYaml',
      path: '/converters/json-to-yaml',
      icon: VscNote,
    },
    {
      title: 'numberBase',
      shortTitle: 'numberBase',
      path: '/converters/number-base',
      icon: VscSymbolNumeric,
    },
    {
      title: 'Date',
      shortTitle: 'Date',
      path: '/converters/Date',
      icon: VscCalendar,
    },
  ],
  encoders: [
    {
      title: 'html',
      shortTitle: 'html',
      path: '/encoders/html',
      icon: VscCode,
    },
    {
      title: 'url',
      shortTitle: 'url',
      path: '/encoders/url',
      icon: VscLink,
    },
    {
      title: 'base64',
      shortTitle: 'base64',
      path: '/encoders/base64',
      icon: VscPackage,
    },
    {
      title: 'gzip',
      shortTitle: 'gzip',
      path: '/encoders/gzip',
      icon: VscFileZip,
    },
    {
      title: 'jwt',
      shortTitle: 'jwt',
      path: '/encoders/jwt',
      icon: VscFold,
    },
  ],
  formatters: [
    {
      title: 'json',
      shortTitle: 'json',
      path: '/formatters/json',
      icon: VscJson,
    },
    {
      title: 'sql',
      shortTitle: 'sql',
      path: '/formatters/sql',
      icon: VscSquirrel,
    },
    {
      title: 'xml',
      shortTitle: 'xml',
      path: '/formatters/xml',
      icon: VscCode,
    },
  ],
  generators: [
    {
      title: 'hash',
      shortTitle: 'hash',
      path: '/generators/hash',
      icon: VscArrowRight,
    },
    {
      title: 'uuid',
      shortTitle: 'uuid',
      path: '/generators/uuid',
      icon: VscStarEmpty,
    },
    {
      title: 'lorem',
      shortTitle: 'lorem',
      path: '/generators/lorem',
      icon: VscReferences,
    },
    {
      title: 'checksum',
      shortTitle: 'checksum',
      path: '/generators/checksum',
      icon: VscSaveAs,
    },
  ],
  encryptors: [
    {
      title: 'aes',
      shortTitle: 'aes',
      path: '/encryptors/aes',
      icon: VscLock,
    },
    {
      title: 'des',
      shortTitle: 'des',
      path: '/encryptors/des',
      icon: VscUnlock,
    },
  ],
  text: [
    {
      title: 'inspector',
      shortTitle: 'inspector',
      path: '/text/inspector',
      icon: VscCaseSensitive,
    },
    {
      title: 'regex',
      shortTitle: 'regex',
      path: '/text/regex',
      icon: VscRegex,
    },
    {
      title: 'diff',
      shortTitle: 'diff',
      path: '/text/diff',
      icon: VscDiff,
    },
    {
      title: 'hyphenation',
      shortTitle: 'hyphenation',
      path: '/text/hyphenation',
      icon: VscDiffRemoved,
    },
  ],
  graphic: [
    {
      title: 'compressor',
      shortTitle: 'compressor',
      path: '/graphic/compressor',
      icon: VscSymbolMisc,
    },
    {
      title: 'imageConverter',
      shortTitle: 'imageConverter',
      path: '/graphic/image-converter',
      icon: VscFileMedia,
    },
    {
      title: 'blindessSimulator',
      shortTitle: 'blindessSimulator',
      path: '/graphic/blindess-simulator',
      icon: VscBrowser,
    },
    {
      title: 'colorPicker',
      shortTitle: 'colorPicker',
      path: '/graphic/color-picker',
      icon: VscSymbolColor,
    },
  ],
} as const;

export const getStaticRoutes = () => {
  console.log('😡 caluculate static routes');
  return ROUTES_ORDER.map((key) => ROUTES[key]).flat();
};
