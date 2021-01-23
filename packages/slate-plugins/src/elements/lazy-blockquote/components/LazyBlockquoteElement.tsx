import * as React from "react";
import { classNamesFunction, styled } from "@uifabric/utilities";
import { LazyBlockquoteElementProps, LazyBlockquoteElementStyleProps, LazyBlockquoteElementStyles } from "../types";
import { getLazyBlockquoteElementStyles } from "./LazyBlockquoteElement.styles";

const getClassNames = classNamesFunction<LazyBlockquoteElementStyleProps, LazyBlockquoteElementStyles>();

export const LazyBlockquoteElementBase = ({
  attributes,
  children,
  className,
  styles,
  htmlAttributes,
}: LazyBlockquoteElementProps) => {
  const classNames = getClassNames(styles, { className });

  return (
    <blockquote {...attributes} className={classNames.root} {...htmlAttributes}>
      {children}
    </blockquote>
  );
};

/**
 * LazyBlockquoteElement
 */
export const LazyBlockquoteElement = styled<
  LazyBlockquoteElementProps,
  LazyBlockquoteElementStyleProps,
  LazyBlockquoteElementStyles
>(LazyBlockquoteElementBase, getLazyBlockquoteElementStyles, undefined, {
  scope: "LazyBlockquoteElement",
});
