/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ImageProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    Desc?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    cardTodo?: Todo;
} & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
