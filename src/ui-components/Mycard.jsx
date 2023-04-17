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
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Mycard(props) {
  const { todo, overrides, ...rest } = props;
  const buttonOnClick = useDataStoreDeleteAction({
    id: todo?.id,
    model: Todo,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="847px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(10,207,131,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="36px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Mycard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="336px"
        height="53px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={todo?.name}
        {...getOverrideProps(overrides, "Heading")}
      ></Text>
      <Image
        width="300px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={todo?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="100"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.25px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        margin="0 5px 0 5px"
        children={todo?.description}
        {...getOverrideProps(overrides, "Text data")}
      ></Text>
      <Button
        width="27px"
        height="27px"
        border="1px SOLID rgba(54,94,61,1)"
        borderRadius="50%"
        shrink="0"
        boxShadow="-13px 11px 11px rgba(0, 0, 0, 0.25)"
        backgroundColor="rgba(255,153,0,1)"
        size="default"
        isDisabled={false}
        variation="default"
        position="absolute"
        right="0"
        top="0"
        color="white"
        children="X"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
