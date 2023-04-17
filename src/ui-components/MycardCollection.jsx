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
import Mycard from "./Mycard";
import { Collection } from "@aws-amplify/ui-react";
export default function MycardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Todo,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Find any todo..."
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "MycardCollection")}
      {...rest}
    >
      {(item, index) => (
        <Mycard
          todo={item}
          height="auto"
          width="400px"
          margin="0px 5px 5px 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Mycard>
      )}
    </Collection>
  );
}
