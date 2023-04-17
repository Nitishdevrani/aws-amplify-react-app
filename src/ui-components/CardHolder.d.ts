/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardHolderOverridesProps = {
    CardHolder?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Default_Cute_and_adorable_fantasy_owl_BirdofParadise_sparrow_full_bod_1_5e4e7f9b-f769-42fd-b7e1-a902906eb8cf_0 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Test is the only thing that matters. Test is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that matters"?: PrimitiveOverrideProps<TextProps>;
    "Title Here"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardHolderProps = React.PropsWithChildren<Partial<ViewProps> & {
    todoData?: Todo;
} & {
    overrides?: CardHolderOverridesProps | undefined | null;
}>;
export default function CardHolder(props: CardHolderProps): React.ReactElement;
