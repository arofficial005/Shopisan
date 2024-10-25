import { View, Pressable, ImageBackground, FlatList } from "react-native";

import React from "react";

import ScreenWrapper from "../../../components/screen-wrapper";

import { AppColors } from "../../../utils";

import Header from "../../../components/header";

import { logout } from "../../../Redux/Actions/Auth";

import { useDispatch } from "react-redux";
import { commerceData } from "../../../utils/dummy-data";
import ItemCard from "../../../components/item-card/ItemCard";
import CustomText from "../../../components/text";
import { height, width } from "../../../utils/dimension";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <ScreenWrapper
      backgroundColor={AppColors.white_100}
      statusBarColor={AppColors.white_100}
      barStyle="dark-content"
    >
      <Header
        showLeft={true}
        showBack
        title="Commerce"
        rightIcon
        onRightPress={() => {}}
        containerStyle={{ width: width(90), alignSelf: "center" }}
      />
      <CustomText
        textAlign="left"
        color={AppColors.black}
        textProps={{ fontFamily: "Mulish-Bold" }}
        textStyles={{
          fontFamily: "Mulish-Bold",
          paddingHorizontal: width(8),
          marginTop: height(4),
          marginBottom: height(2),
        }}
        size={2.2}
      >
        Posts
      </CustomText>
      <FlatList
        data={commerceData ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => index?.toString()}
        renderItem={({ item }) => {
          return (
            <ItemCard
              key={item.id}
              title={item.title}
              rating={item.rating}
              tags={item.tags}
              description={item.description}
              image={item.image}
              fromFavorite={false}
            />
          );
        }}
        ListEmptyComponent={() => {
          <CustomText
            textAlign="center"
            color={AppColors.grey_100}
            textProps={{ fontFamily: "Mulish-Bold" }}
            textStyles={{ fontFamily: "Mulish-Bold" }}
            size={2.2}
          >
            No items available
          </CustomText>;
        }}
      />
    </ScreenWrapper>
  );
}
