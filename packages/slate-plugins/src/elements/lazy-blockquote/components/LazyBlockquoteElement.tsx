import * as React from "react";
import { classNamesFunction, styled } from "@uifabric/utilities";
import { LazyBlockquoteElementProps, LazyBlockquoteElementStyleProps, LazyBlockquoteElementStyles } from "../types";
import { getLazyBlockquoteElementStyles } from "./LazyBlockquoteElement.styles";

const getClassNames = classNamesFunction<LazyBlockquoteElementStyleProps, LazyBlockquoteElementStyles>();

/**
 * BlockquoteElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const LazyBlockquoteElementBase = ({
  attributes,
  children,
  className,
  styles,
  htmlAttributes,
}: LazyBlockquoteElementProps) => {
  const classNames = getClassNames(styles, {
    className,
    // Other style props
  });

  return (
    <blockquote {...attributes} className={classNames.root} {...htmlAttributes}>
      {children}
    </blockquote>
  );
};

/**
 * BlockquoteElement
 */
export const LazyBlockquoteElement = styled<
  LazyBlockquoteElementProps,
  LazyBlockquoteElementStyleProps,
  LazyBlockquoteElementStyles
>(LazyBlockquoteElementBase, getLazyBlockquoteElementStyles, undefined, {
  scope: "LazyBlockquoteElement",
});
