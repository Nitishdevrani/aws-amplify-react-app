/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Todo } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardHolder from "./CardHolder";
import { Collection } from "@aws-amplify/ui-react";
export default function CardHolderCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  console.log('recporps',props);


  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Todo,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      console.log('itemsProp',itemsProp);
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "CardHolderCollection")}
      {...rest}
    >
      {(item, index) => (
        <CardHolder
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardHolder>
      )}
    </Collection>
  );
}
