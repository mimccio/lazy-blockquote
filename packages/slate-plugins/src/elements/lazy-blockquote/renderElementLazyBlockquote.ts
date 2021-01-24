import { getRenderElement } from '../../common/utils/getRenderElement';
import { setDefaults } from '../../common/utils/setDefaults';
import { DEFAULTS_LAZY_BLOCKQUOTE } from './defaults';
import { LazyBlockquoteRenderElementOptions } from './types';

export const renderElementLazyBlockquote = (
  options?: LazyBlockquoteRenderElementOptions
) => {
  const { lazy_blockquote } = setDefaults(options, DEFAULTS_LAZY_BLOCKQUOTE);

  return getRenderElement(lazy_blockquote);
};
