import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import { Button } from '../button';

import * as S from './styles'

type ModalProps = {
   textModal:string | Object;
   iconName: string;
   colorIconCircle: string;
   colorIcon:string;
   buttonText: string | Object
   isVisible: boolean
   errorText: any
   openCloseModal: () => void;
}

export const ModalComponent = ({
    textModal, 
    iconName, 
    colorIconCircle, 
    colorIcon, 
    buttonText,
    isVisible,
    errorText,
    openCloseModal
  }: ModalProps) => {

  const [isOpen, setIsOpen] = useState(true)

  const navigation = useNavigation()

  return (
    <S.BackgroundModal isOpen={isVisible}>

    <S.ModalView>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          openCloseModal();
        }}
      >
        <S.ModalContent>

          <S.CloseModalIcon onPress={openCloseModal}>
            <Icon name="close" size={48} color={colorIconCircle}/>
          </S.CloseModalIcon>

            {errorText ? (
              <S.ErrorCircle>
                <Icon name="close" size={48} color='#fff' />
              </S.ErrorCircle>
            ): (
                <S.SuccessfullCircle>
                  <Icon name={iconName} size={48} color={colorIcon} />
                </S.SuccessfullCircle>
            )}

            {errorText ? (
              <S.TextModalRedefinePassword>
                {errorText}
              </S.TextModalRedefinePassword>
            ) : (
                <S.TextModalRedefinePassword>
                  {textModal}
                </S.TextModalRedefinePassword>
            )}

            {errorText ? (
              <Button
                text={HardCodedTexts.errorGlobalFormTry}
                onPress={openCloseModal}
              />
            ) : (
                <Button
                  text={buttonText}
                  onPress={openCloseModal}
                />
            )}

        </S.ModalContent>
      </Modal>
    </S.ModalView>
    </S.BackgroundModal>
  );
};
