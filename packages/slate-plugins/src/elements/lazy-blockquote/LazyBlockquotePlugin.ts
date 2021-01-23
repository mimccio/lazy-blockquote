import { SlatePlugin } from "@udecode/slate-plugins-core";
import { getOnHotkeyToggleNodeTypeDefault } from "../../common/utils/getOnHotkeyToggleNodeTypeDefault";
import { DEFAULTS_LAZY_BLOCKQUOTE } from "./defaults";
import { deserializeLazyBlockquote } from "./deserializeLazyBlockquote";
import { renderElementLazyBlockquote } from "./renderElementLazyBlockquote";
import { LazyBlockquotePluginOptions } from "./types";

/**
 * Enables support for block quotes, useful for
 * quotations and passages.
 */
export const LazyBlockquotePlugin = (options?: LazyBlockquotePluginOptions): SlatePlugin => ({
  renderElement: renderElementLazyBlockquote(options),
  deserialize: deserializeLazyBlockquote(options),
  onKeyDown: getOnHotkeyToggleNodeTypeDefault({
    key: "lazy_blockquote",
    defaultOptions: DEFAULTS_LAZY_BLOCKQUOTE,
    options,
  }),
});
