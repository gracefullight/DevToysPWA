import { BoxIconProps } from './components/BoxIcon';

export const ROUTES_ORDER = [
  'converters',
  'encoders',
  'formatters',
  'generators',
  'text',
  'graphic',
  'encryptors',
] as const;

export type RouteGroup = typeof ROUTES_ORDER[number];
export type RouteIcon = Pick<BoxIconProps, 'name' | 'type'>;
export interface Route {
  title: string;
  shortTitle: string;
  path: string;
  icon: RouteIcon;
}
export interface RouteObject {
  key: string;
  icon: RouteIcon;
  children: Route[];
}

export type Routes = Record<RouteGroup, RouteObject>;

export const ROUTES: Routes = {
  converters: {
    key: 'converters',
    icon: {
      name: 'sync',
    },
    children: [
      {
        title: 'jsonToYaml',
        shortTitle: 'jsonToYaml',
        path: '/converters/json-to-yaml',
        icon: {
          name: 'transfer-alt',
        },
      },
      {
        title: 'numberBase',
        shortTitle: 'numberBase',
        path: '/converters/number-base',
        icon: {
          name: 'math',
        },
      },
      {
        title: 'Date',
        shortTitle: 'Date',
        path: '/converters/Date',
        icon: {
          name: 'calendar',
        },
      },
    ],
  },
  encoders: {
    key: 'encoders',
    icon: {
      name: 'dna',
    },
    children: [
      {
        title: 'html',
        shortTitle: 'html',
        path: '/encoders/html',
        icon: {
          name: 'code-alt',
        },
      },
      {
        title: 'url',
        shortTitle: 'url',
        path: '/encoders/url',
        icon: {
          name: 'link',
        },
      },
      {
        title: 'base64',
        shortTitle: 'base64',
        path: '/encoders/base64',
        icon: {
          name: 'package',
        },
      },
      {
        title: 'gzip',
        shortTitle: 'gzip',
        path: '/encoders/gzip',
        icon: {
          name: 'file-archive',
          type: 'solid',
        },
      },
      {
        title: 'jwt',
        shortTitle: 'jwt',
        path: '/encoders/jwt',
        icon: {
          name: 'code-curly',
        },
      },
    ],
  },
  formatters: {
    key: 'formatters',
    icon: {
      name: 'align-left',
    },
    children: [
      {
        title: 'json',
        shortTitle: 'json',
        path: '/formatters/json',
        icon: {
          name: 'file-json',
          type: 'solid',
        },
      },
      {
        title: 'sql',
        shortTitle: 'sql',
        path: '/formatters/sql',
        icon: {
          name: 'data',
        },
      },
      {
        title: 'xml',
        shortTitle: 'xml',
        path: '/formatters/xml',
        icon: {
          name: 'code-alt',
        },
      },
    ],
  },
  generators: {
    key: 'generators',
    icon: {
      name: 'magic-wand',
      type: 'solid',
    },
    children: [
      {
        title: 'hash',
        shortTitle: 'hash',
        path: '/generators/hash',
        icon: {
          name: 'hash',
        },
      },
      {
        title: 'uuid',
        shortTitle: 'uuid',
        path: '/generators/uuid',
        icon: {
          name: 'id-card',
        },
      },
      {
        title: 'lorem',
        shortTitle: 'lorem',
        path: '/generators/lorem',
        icon: {
          name: 'paragraph',
        },
      },
      {
        title: 'checksum',
        shortTitle: 'checksum',
        path: '/generators/checksum',
        icon: {
          name: 'file-export',
          type: 'solid',
        },
      },
    ],
  },
  encryptors: {
    key: 'encryptors',
    icon: {
      name: 'key',
    },
    children: [
      {
        title: 'aes',
        shortTitle: 'aes',
        path: '/encryptors/aes',
        icon: {
          name: 'lock',
        },
      },
      {
        title: 'des',
        shortTitle: 'des',
        path: '/encryptors/des',
        icon: {
          name: 'lock-open',
        },
      },
    ],
  },
  text: {
    key: 'text',
    icon: { name: 'text' },
    children: [
      {
        title: 'inspector',
        shortTitle: 'inspector',
        path: '/text/inspector',
        icon: {
          name: 'font',
        },
      },
      {
        title: 'regex',
        shortTitle: 'regex',
        path: '/text/regex',
        icon: {
          name: 'rename',
        },
      },
      {
        title: 'diff',
        shortTitle: 'diff',
        path: '/text/diff',
        icon: {
          name: 'git-compare',
        },
      },
      {
        title: 'hyphenation',
        shortTitle: 'hyphenation',
        path: '/text/hyphenation',
        icon: {
          name: 'stats',
        },
      },
    ],
  },
  graphic: {
    key: 'graphic',
    icon: { name: 'images' },
    children: [
      {
        title: 'compressor',
        shortTitle: 'compressor',
        path: '/graphic/compressor',
        icon: {
          name: 'component',
          type: 'solid',
        },
      },
      {
        title: 'imageConverter',
        shortTitle: 'imageConverter',
        path: '/graphic/image-converter',
        icon: {
          name: 'image',
        },
      },
      {
        title: 'blindessSimulator',
        shortTitle: 'blindessSimulator',
        path: '/graphic/blindess-simulator',
        icon: {
          name: 'low-vision',
        },
      },
      {
        title: 'colorPicker',
        shortTitle: 'colorPicker',
        path: '/graphic/color-picker',
        icon: {
          name: 'palette',
          type: 'solid',
        },
      },
    ],
  },
};

export const getStaticRoutes = () => {
  console.log('😡 caluculate static routes');
  return ROUTES_ORDER.map((key) => ROUTES[key].children).flat();
};
