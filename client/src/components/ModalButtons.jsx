/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ChevronLeft, ChevronRight,
} from '@styled-icons/entypo';

const ButtonContainer = styled.div`
  contain: content !important;
  height: 100% !important;
  left: 0px !important;
  position: absolute !important;
  top: 0px !important;
  width: 100% !important;
  animation-fill-mode: both !important;
  animation-delay: 0.4s !important;
  animation-duration: 0.3s !important;
  animation-iteration-count: 1 !important;
  animation-timing-function: ease-in-out !important;
  animation-name: keyframe_18jn58a !important;
`;

const Button = styled.button`
  appearance: none !important;
  z-index: 1;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: absolute !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
  `;
const ButtonBackground = styled.div`
  content: "" !important;
  display: flex !important;
  justify-content: center;
  position: absolute !important;
  top: 50% !important;
  left: 5% !important;
  transform: translate(-50%, -50%) !important;
  width: 48px !important;
  height: 48px !important;
  cursor: pointer !important;
  border-radius: 50% !important;
  background: rgb(255, 255, 255) !important;
  border: 1px solid rgb(176, 176, 176) !important;
`;
const ButtonBackgroundRight = styled.div`
  content: "" !important;
  display: flex !important;
  justify-content: center;
  position: absolute !important;
  top: 50% !important;
  right: 2% !important;
  cursor: pointer !important;
  transform: translate(-50%, -50%) !important;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: rgb(255, 255, 255) !important;
  border: 1px solid rgb(176, 176, 176) !important;
`;

const ButtonEmojiContainer = styled.span`
  border: 0px !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(100%) !important;
  clip-path: inset(100%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0px !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;
const LeftButtonEmoji = styled(ChevronLeft)`
  display: block;
  height: 50px;
  width: 30px;
  overflow: visible;
`;
const RightButtonEmoji = styled(ChevronRight)`
  display: block;
  height: 50px;
  width: 30px;
  overflow: visible;
`;
const ModalButtons = (props) => {
  const { onLeftClick, onRightClick } = props;
  return (
    <ButtonContainer>
      <ButtonBackground onClick={() => onLeftClick()}>
        <LeftButtonEmoji />
        <Button>
          <ButtonEmojiContainer>
            Left
          </ButtonEmojiContainer>
        </Button>
      </ButtonBackground>
      <ButtonBackgroundRight onClick={() => onRightClick()}>
        <RightButtonEmoji />
        <Button>
          <ButtonEmojiContainer>
            Right
          </ButtonEmojiContainer>
        </Button>
      </ButtonBackgroundRight>
    </ButtonContainer>
  );
};

ModalButtons.propTypes = {
  onRightClick: PropTypes.func.isRequired,
  onLeftClick: PropTypes.func.isRequired,
};
export default ModalButtons;
