import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VerticalModalPicture from './VerticalModalPicture';

const VerticalModalContainer = styled.div`
  position: relative;
  padding-bottom: 32px;
  padding-top: 5%;
`;
const VerticalModalContainer1 = styled.div`
  display: flex;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 24px;
  padding-right: 24px;

`;
const VerticalModalContainer2 = styled.div`
  justify-content: flex-start;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--gp-section-max-width, 1128px);
`;
const VerticalModal = (props) => {
  const { allImages, onClick } = props;
  return (
    <VerticalModalContainer>
      <VerticalModalContainer1>
        <VerticalModalContainer2>
          {allImages.map((image) => <VerticalModalPicture image={image} onClick={onClick} />)}
        </VerticalModalContainer2>
      </VerticalModalContainer1>
    </VerticalModalContainer>
  );
};

VerticalModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  allImages: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    hasDescription: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    photoDescription: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  })).isRequired,
};
export default VerticalModal;
