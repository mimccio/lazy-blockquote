import * as React from "react";
import { useSlate } from "slate-react";
import { someNode } from "../../../common/queries/someNode";
import { toggleWrapNodes } from "../../../common/transforms/toggleWrapNodes";
import { getPreventDefaultHandler } from "../../../common/utils";
import { ToolbarButton } from "../../../components/ToolbarButton/index";
import { ToolbarLazyBlockquoteElementProps } from "./ToolbarLazyBlockquoteElement.types";

/**
 * Toolbar button to toggle lazy_blockquote element in selection.
 */
export const ToolbarLazyBlockquoteElement = ({ type, inactiveType, ...props }: ToolbarLazyBlockquoteElementProps) => {
  const editor = useSlate();

  return (
    <ToolbarButton
      active={someNode(editor, { match: { type } })}
      onMouseDown={getPreventDefaultHandler(toggleWrapNodes, editor, type)}
      {...props}
    />
  );
};
