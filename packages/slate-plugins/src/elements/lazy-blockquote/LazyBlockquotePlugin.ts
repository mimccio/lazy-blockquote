import { SlatePlugin } from '@udecode/slate-plugins-core';
import { DEFAULTS_LAZY_BLOCKQUOTE, ELEMENT_LAZY_BLOCKQUOTE } from './defaults';
import { deserializeLazyBlockquote } from './deserializeLazyBlockquote';
import { renderElementLazyBlockquote } from './renderElementLazyBlockquote';
import { getOnHotkeyToggleWrapNodesDefault } from './transforms';
import { LazyBlockquotePluginOptions } from './types';

/**
 * Enables support for `Lazy` block quotes, useful for
 * quotations and passages.
 */
export const LazyBlockquotePlugin = (
  options?: LazyBlockquotePluginOptions
): SlatePlugin => ({
  renderElement: renderElementLazyBlockquote(options),
  deserialize: deserializeLazyBlockquote(options),
  onKeyDown: getOnHotkeyToggleWrapNodesDefault({
    key: ELEMENT_LAZY_BLOCKQUOTE,
    defaultOptions: DEFAULTS_LAZY_BLOCKQUOTE,
    options,
  }),
});
