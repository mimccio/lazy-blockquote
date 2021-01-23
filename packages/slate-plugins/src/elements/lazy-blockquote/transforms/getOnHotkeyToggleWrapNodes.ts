import { setDefaults } from "../../../common/utils/setDefaults";
import isHotkey from "is-hotkey";
import castArray from "lodash/castArray";
import { Editor } from "slate";
import { toggleWrapNodes } from "../../../common/transforms/toggleWrapNodes";
import { HotkeyOptions } from "../../../common/types/PluginOptions.types";

interface GetOnHotkeyToggleNodeTypeDefaultOptions {
  key: string;
  defaultOptions: Record<string, any>;
  options?: any;
}

/**
 * `getOnHotkeyToggleWrapNodes` with default options.
 */
export const getOnHotkeyToggleWrapNodesDefault = ({
  key,
  defaultOptions,
  options,
}: GetOnHotkeyToggleNodeTypeDefaultOptions) => {
  const keyOptions = setDefaults(options, defaultOptions)[key];

  return getOnHotkeyToggleWrapNodes(keyOptions);
};

export interface GetOnHotkeyToggleNodeTypeOptions extends HotkeyOptions {
  /**
   * Key of the mark
   */
  type: string;
}

/**
 * Get `onKeyDown` handler to toggle wrap nodes if hotkey is pressed.
 */
export const getOnHotkeyToggleWrapNodes = ({ type, hotkey }: GetOnHotkeyToggleNodeTypeOptions) => {
  if (!hotkey) return;

  const hotkeys = castArray(hotkey);

  return (e: any, editor: Editor) => {
    for (const key of hotkeys) {
      if (isHotkey(key, e)) {
        e.preventDefault();
        toggleWrapNodes(editor, type);
        return;
      }
    }
  };
};
