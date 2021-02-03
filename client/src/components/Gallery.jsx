import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '@styled-icons/boxicons-solid';

const Container = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: center;
`;
const Container1 = styled.div`
  width: 100%
  max-width: 1128px;
`;
const GalleryContainer = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  max-width: 1128px;
`;
const BigContainer = styled.div`
  width: 50%;
`;
const Row1 = styled.div`
  height: 50%;
`;
const Row2 = styled.div`
  height: 50%;
  padding-top: 8px;
  box-sizing: border-box;
  position: relative;
`;
const LeftColumn = styled.div`
  flex-direction: column;
  width: 25%;
  padding-left: 8px;
`;
const RightColumn = styled.div`
  flex-direction: column;
  height: 100%;
  width: 25%;
  padding-left: 8px;
`;
const SmallContainer = styled.div`
  height: 100%;
`;
const ShowContainer = styled.div`
  display: flex;
  position: absolute;
  top: 70%;
  right: 15%;
`;
const ShowAnchor = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  font-size: 14px;
  line-height: 18px
  font-weight: 600;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 7px 15px;
  border-color: rgb(34, 34, 34);
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  touch-action: manipulation !important;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
`;
const ShowTextContainer = styled.div`
  display: flex;
  align-items: center;
`;
const GridEmoji = styled(Grid)`
  height: 12px;
  width: 12px;
  display: block;
`;
const ShowText = styled.div`
  margin-left: 8px;
  box-sizing: border-box;
`;
const BigImage = styled.img`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
const SmallImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const SmallTopRight = styled.img`
  border-top-right-radius: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const SmallBottomRight = styled.img`
  border-bottom-right-radius: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Gallery = (props) => {
  const { allImages, showModal, onClick } = props;

  return (
    <Container>
      <Container1>
        <GalleryContainer>
          <BigContainer>
            <BigImage
              src={allImages[0].photoUrl}
              type="image/webp"
              alt="house image"
              onClick={() => onClick(0)}
              height="556px"
              width="400px"
            />
          </BigContainer>
          <LeftColumn>
            <SmallContainer>
              <Row1>
                <SmallImage
                  src={allImages[1].photoUrl}
                  type="image/webp"
                  alt="house image"
                  onClick={() => onClick(1)}
                  height="278px"
                  width="200px"
                />
              </Row1>
              <Row2>
                <SmallImage
                  src={allImages[2].photoUrl}
                  type="image/webp"
                  alt="house image"
                  onClick={() => onClick(2)}
                  height="278px"
                  width="192px"
                />
              </Row2>
            </SmallContainer>
          </LeftColumn>
          <RightColumn>
            <SmallContainer>
              <Row1>
                <SmallTopRight
                  src={allImages[3].photoUrl}
                  type="image/webp"
                  alt="house image"
                  onClick={() => onClick(3)}
                  height="278px"
                  width="200px"
                />
              </Row1>
              <Row2>
                <SmallBottomRight
                  src={allImages[4].photoUrl}
                  type="image/webp"
                  alt="house image"
                  onClick={() => onClick(4)}
                  height="278px"
                  width="192px"
                />
                <ShowContainer>
                  <ShowAnchor onClick={() => showModal()}>
                    <ShowTextContainer>
                      <GridEmoji />
                      <ShowText>
                        Show all photos
                      </ShowText>
                    </ShowTextContainer>
                  </ShowAnchor>
                </ShowContainer>
              </Row2>
            </SmallContainer>
          </RightColumn>
        </GalleryContainer>
      </Container1>
    </Container>
  );
};

Gallery.propTypes = {
  allImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Gallery;
