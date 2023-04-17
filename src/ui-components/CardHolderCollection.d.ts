/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CardHolderProps } from "./CardHolder";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardHolderCollectionOverridesProps = {
    CardHolderCollection?: PrimitiveOverrideProps<CollectionProps>;
    CardHolder?: CardHolderProps;
} & EscapeHatchProps;
export declare type CardHolderCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CardHolderProps;
} & {
    overrides?: CardHolderCollectionOverridesProps | undefined | null;
}>;
export default function CardHolderCollection(props: CardHolderCollectionProps): React.ReactElement;
