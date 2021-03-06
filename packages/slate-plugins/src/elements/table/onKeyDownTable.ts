import { Editor, Transforms } from 'slate';
import { getNextTableCell } from './queries/getNextTableCell';
import { getPreviousTableCell } from './queries/getPreviousTableCell';
import { getTableCellEntry } from './queries/getTableCellEntry';
import { TableHotKey, TableOnKeyDownOptions } from './types';

export const onKeyDownTable = (options?: TableOnKeyDownOptions) => (
  e: KeyboardEvent,
  editor: Editor
) => {
  if (e.key === TableHotKey.TAB) {
    e.preventDefault();
    const res = getTableCellEntry(editor, {}, options);
    if (!res) return;
    const { tableRow, tableCell } = res;
    const [, tableCellPath] = tableCell;
    const shiftTab = e.shiftKey;
    const tab = !e.shiftKey;
    if (shiftTab) {
      // move left with shift+tab
      const previousCell = getPreviousTableCell(
        editor,
        tableCell,
        tableCellPath,
        tableRow
      );
      if (previousCell) {
        const [, previousCellPath] = previousCell;
        Transforms.select(editor, previousCellPath);
      }
    } else if (tab) {
      // move right with tab
      const nextCell = getNextTableCell(
        editor,
        tableCell,
        tableCellPath,
        tableRow
      );
      if (nextCell) {
        const [, nextCellPath] = nextCell;
        Transforms.select(editor, nextCellPath);
      }
    }
  }
};
