/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <View
      width="1440px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="0px 0px 35px 35px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(26,188,254,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(239,240,240,1)"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="484px"
        height="34px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30px"
        left="65px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="~My Personal Diary~"
        {...getOverrideProps(overrides, "BrandText")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        borderRadius="36px"
        top="29px"
        left="1252px"
        backgroundColor="rgba(191,128,64,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Logout"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
