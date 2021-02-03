import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VerticalModalPictureContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  flex-flow: wrap;
  align-items: center;
`;
const PictureContainer = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const VerticalModalPicture = (props) => {
  const { image, onClick } = props;
  const { photoUrl, _id } = image;
  return (
    <VerticalModalPictureContainer>
      <PictureContainer src={photoUrl} alt="house image" onClick={() => onClick(_id - 1)} />
    </VerticalModalPictureContainer>
  );
};

VerticalModalPicture.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    hasDescription: PropTypes.bool.isRequired,
    isVerified: PropTypes.bool.isRequired,
    photoDescription: PropTypes.string.isRequired,
    photoName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default VerticalModalPicture;
