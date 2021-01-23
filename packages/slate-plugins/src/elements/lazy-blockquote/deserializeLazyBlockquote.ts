import { DeserializeHtml } from "@udecode/slate-plugins-core";
import { getElementDeserializer } from "../../common/utils/getElementDeserializer";
import { setDefaults } from "../../common/utils/setDefaults";
import { DEFAULTS_LAZY_BLOCKQUOTE } from "./defaults";
import { LazyBlockquoteDeserializeOptions } from "./types";

export const deserializeLazyBlockquote = (options?: LazyBlockquoteDeserializeOptions): DeserializeHtml => {
  const { lazy_blockquote } = setDefaults(options, DEFAULTS_LAZY_BLOCKQUOTE);

  return {
    element: getElementDeserializer({
      type: lazy_blockquote.type,
      rules: [{ nodeNames: "LAZY_BLOCKQUOTE" }],
      ...options?.lazy_blockquote?.deserialize,
    }),
  };
};
