/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardHolder(props) {
  const { todoData, overrides, ...rest } = props;
  console.log('item',props);
  return (
    <View
      width="100px"
      min-height="800px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CardHolder")}
      {...rest}
    >
      <Icon
        width="252px"
        height="240px"
        viewBox={{ minX: 0, minY: 0, width: 252, height: 240 }}
        paths={[
          {
            d: "M252 120C252 186.274 195.588 240 126 240C56.4121 240 0 186.274 0 120C0 53.7258 56.4121 0 126 0C195.588 0 252 53.7258 252 120Z",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-52px"
        left="-50px"
        {...getOverrideProps(overrides, "Ellipse 1")}
      ></Icon>
      <Image
        width="333px"
        height="500px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="167px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={todoData?.image}
        {...getOverrideProps(
          overrides,
          "Default_Cute_and_adorable_fantasy_owl_BirdofParadise_sparrow_full_bod_1_5e4e7f9b-f769-42fd-b7e1-a902906eb8cf_0 1"
        )}
      ></Image>
      <View
        width="500px"
        height="233px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="267px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.4)"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></View>
      <Text
        fontFamily="Irish Grover"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.5078125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="500px"
        height="233px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="267px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={todoData?.description}
        {...getOverrideProps(
          overrides,
          "Test is the only thing that matters. Test is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that mattersTest is the only thing that matters"
        )}
      ></Text>
      <Text
        fontFamily="Irish Grover"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.1796875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="160px"
        height="153px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={todoData?.name}
        {...getOverrideProps(overrides, "Title Here")}
      ></Text>
    </View>
  );
}
