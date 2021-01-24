import { IStyle } from '@uifabric/styling';
import { IStyleFunctionOrObject } from '@uifabric/utilities';
import { RenderElementProps } from 'slate-react';
import {
  Deserialize,
  ElementWithAttributes,
  HtmlAttributesProps,
  NodeToProps,
  RenderNodeOptions,
  RenderNodePropsOptions,
  RootProps,
} from '../../common/types/PluginOptions.types';

// Data of Element node
export interface LazyBlockquoteNodeData {}

// Element node
export interface LazyBlockquoteNode
  extends ElementWithAttributes,
    LazyBlockquoteNodeData {}

// renderElement options given as props
export interface LazyBlockquoteRenderElementPropsOptions {
  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<
    LazyBlockquoteElementStyleProps,
    LazyBlockquoteElementStyles
  >;
}

// renderElement props
export interface LazyBlockquoteElementProps
  extends RenderElementProps,
    RenderNodePropsOptions,
    HtmlAttributesProps,
    LazyBlockquoteRenderElementPropsOptions {
  element: LazyBlockquoteNode;
}

export type LazyBlockquoteKeyOption = 'lazy_blockquote';

// Plugin options
export type LazyBlockquotePluginOptionsValues = RenderNodeOptions &
  RootProps<LazyBlockquoteRenderElementPropsOptions> &
  NodeToProps<LazyBlockquoteNode, LazyBlockquoteRenderElementPropsOptions> &
  Deserialize;
export type LazyBlockquotePluginOptionsKeys = keyof LazyBlockquotePluginOptionsValues;
export type LazyBlockquotePluginOptions<
  Value extends LazyBlockquotePluginOptionsKeys = LazyBlockquotePluginOptionsKeys
> = Partial<
  Record<
    LazyBlockquoteKeyOption,
    Pick<LazyBlockquotePluginOptionsValues, Value>
  >
>;

// renderElement options
export type LazyBlockquoteRenderElementOptionsKeys = LazyBlockquotePluginOptionsKeys;
export interface LazyBlockquoteRenderElementOptions
  extends LazyBlockquotePluginOptions<LazyBlockquoteRenderElementOptionsKeys> {}

// deserialize options
export interface LazyBlockquoteDeserializeOptions
  extends LazyBlockquotePluginOptions<'type' | 'rootProps' | 'deserialize'> {}

export interface LazyBlockquoteElementStyles {
  /**
   * Style for the root element.
   */
  root?: IStyle;

  // Insert LazyBlockquoteElement classNames below
}

export interface LazyBlockquoteElementStyleProps {
  /**
   * Accept custom classNames
   */
  className?: string;

  // Insert LazyBlockquoteElement style props below
}
