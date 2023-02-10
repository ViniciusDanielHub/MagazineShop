import { Modal } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from '../button';

import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import * as S from './styles'

type ModalProps = {
  successText: string | Object;
  errorText: any
  colorIconCircle: string;
  buttonText: string | Object
  isVisible: boolean
  openCloseModal: () => void;
}

export const ModalComponent = ({
  successText,
  errorText,
  colorIconCircle,
  buttonText,
  isVisible,
  openCloseModal
}: ModalProps) => {

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
              <Icon name="close" size={32} color={colorIconCircle} />
            </S.CloseModalIcon>

            {errorText ? (
              <S.ErrorCircle>
                <Icon name="close" size={48} color='#fff' />
              </S.ErrorCircle>
            ) : (
              <S.SuccessfullCircle>
                  <Icon name='checkmark' size={32} color='#fff' />
              </S.SuccessfullCircle>
            )}

            {errorText ? (
              <S.successText>
                {errorText}
              </S.successText>
            ) : (
              <S.successText>
                {successText}
              </S.successText>
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