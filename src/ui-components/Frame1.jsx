/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { cardTodo, overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="200px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <View
        width="200px"
        height="200px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Image
        width="200px"
        height="100px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={cardTodo?.image}
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(245,245,245,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="130px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="85px"
        left="36px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={cardTodo?.name}
        {...getOverrideProps(overrides, "Label")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="12px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="147px"
        height="95px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="105px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={cardTodo?.description}
        {...getOverrideProps(overrides, "Desc")}
      ></Text>
    </View>
  );
}
