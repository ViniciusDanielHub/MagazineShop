import React, { useRef, useState } from 'react';
import { ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import * as S from './styles'
import { BackBtn } from '../../components/backBtn';

export const TermsAndConditions = () => {

  const navigation = useNavigation()

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight)
      / completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, difference],
    outputRange: [0, difference],
  });

  const onContentSizeChange = (_, contentHeight) =>
    setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      layout: { height },
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };

  return (
    <S.Container>
      <BackBtn color={'#730FB0'} onPress={() => navigation.goBack()}/>
      <S.TermsText>{HardCodedTexts.termsTextTitle}</S.TermsText>
      <S.TermsTextUpdated>{HardCodedTexts.termsTextUpdatedData}</S.TermsTextUpdated>

     <S.ScrollContainer>
      <ScrollView
        style={S.stylesScroll.scrollViewContainer}
        contentContainerStyle={{ paddingRight: 40 }}
        onContentSizeChange={onContentSizeChange}
        onLayout={onLayout}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <S.TermsText>{HardCodedTexts.termsTextTopicTerms}</S.TermsText>
        <S.TermsTextContract>
          Welcome to Magazine

          These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at magazineshop.com.

          By accessing this website we assume you accept these terms and conditions. Do not continue to use Magazine Shop if you do not agree to take all of the terms and conditions stated on this page.

          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
        </S.TermsTextContract>

        <S.TermsText>{HardCodedTexts.termsTextTopicCookies}</S.TermsText>
        <S.TermsTextContract>
          We employ the use of cookies. By accessing Website Name, you agreed to use cookies in agreement with the Magazine Shop Privacy Policy.

          Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
        </S.TermsTextContract>

        <S.TermsText>{HardCodedTexts.termsTextTopicLicense}</S.TermsText>
        <S.TermsTextContract>
          Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.
          
          This Agreement shall begin on the date hereof.

          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

          Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

            Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.

            This Agreement shall begin on the date hereof.

            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Company Name does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Company Name,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Company Name shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

            Company Name reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.

            Unless otherwise stated, Company Name and/or its licensors own the intellectual property rights for all material on Website Name. All intellectual property rights are reserved. You may access this from Website Name for your own personal use subjected to restrictions set in these terms and conditions.

            This Agreement shall begin on the date hereof.

        </S.TermsTextContract>
      </ScrollView>

      <S.CustomScrollBarBackground>
        <Animated.View
          style={[
            S.stylesScroll.customScrollBar,
            {
              height: scrollIndicatorSize,
              transform: [{ translateY: scrollIndicatorPosition }],
            },
          ]}
        />
      </S.CustomScrollBarBackground>
      </S.ScrollContainer>
    </S.Container>
  );
};
