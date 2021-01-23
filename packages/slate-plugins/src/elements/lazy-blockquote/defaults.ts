import { LazyBlockquoteElement } from './components/LazyBlockquoteElement';
import {
  LazyBlockquoteKeyOption,
  LazyBlockquotePluginOptionsValues,
} from './types';

export const ELEMENT_LAZY_BLOCKQUOTE = 'lazy_blockquote';

export const DEFAULTS_LAZY_BLOCKQUOTE: Record<
  LazyBlockquoteKeyOption,
  LazyBlockquotePluginOptionsValues
> = {
  lazy_blockquote: {
    component: LazyBlockquoteElement,
    type: ELEMENT_LAZY_BLOCKQUOTE,
    hotkey: 'alt+shift+q',
    rootProps: {
      className: 'slate-lazy-blockquote',
      as: 'blockquote',
    },
  },
};
