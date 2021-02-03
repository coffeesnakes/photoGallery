import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HeartOutlined, Heart, Star, Trophy, ShareAlternative,
} from '@styled-icons/entypo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 5%;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 2%;
`;
const HeadContain = styled.div`
  width: 100%;
  min-width: auto;
  max-width: 1128px;
`;
const TitleRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1128px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;
const DescriptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;
const HeaderDescrip = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex: 1;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
`;
const HeaderEnd = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 5px;
`;
const StarEmoji = styled(Star)`
  margin-right: 4px;
  color: red;
  vertical-align: text-top;
  height: 15px;
   width: 15px;
`;
const Rating = styled.div`
  font-weight: 1000;
  font-size: 14px;
`;
const Separator = styled.span`
  margin-left: 8px;
  margin-right: 8px;
`;
const Reviews = styled.div`
  color: rgb(113,113,113);
  padding-left: 4px;
`;
const SuperEmoji = styled(Trophy)`
  margin-right: 4px;
  color: red;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const Superhost = styled.div`
  color: rgb(113,113,113);
`;
const Location = styled.a`
  font-weight: 600;
  color: rgb(113, 113, 113);
`;
const ShareEmoji = styled(ShareAlternative)`
  margin-right: 4px;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const SaveEmoji = styled(HeartOutlined)`
  margin-right: 4px;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
`;
const ClickedSaveEmoji = styled(Heart)`
  margin-right: 4px;
  vertical-align: text-top;
  height: 15px;
  width: 15px;
  color: red;
`;
const Button = styled.button`
  appearance: none;
  outline: none;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: rgb(34, 34, 34);
  text-decoration: underline;
  cursor: pointer;
  padding: 8px;
  font-weight: bold;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
`;
const Header = (props) => {
  const { galleria, onClick, isSaved } = props;
  const {
    title, reviews, rating, isSuperhost, location,
  } = galleria;
  const { city, state, country } = location;
  return (
    <Container>
      <HeadContain>
        <TitleRow>
          <h1>{title}</h1>
        </TitleRow>
        <DescriptionRow>
          <HeaderDescrip>
            <Rating>
              <StarEmoji />
              {parseFloat(rating).toFixed(2)}
            </Rating>
            <Reviews>
              {`(${reviews})`}
            </Reviews>
            <Separator>
              ·
            </Separator>
            {isSuperhost ? <SuperEmoji /> : <></> }
            {isSuperhost ? <Superhost>Superhost</Superhost> : <></>}
            {isSuperhost ? <Separator>·</Separator> : <></>}
            <Location href={`https://www.google.com/search?q=${city}+${state}+${country}`}>{`${city}, ${state}, ${country}`}</Location>
          </HeaderDescrip>
          <HeaderEnd>
            <Button onClick={() => onClick()}>
              {isSaved
                ? <ClickedSaveEmoji />
                : <SaveEmoji />}
              Save
            </Button>
            <Button>
              <ShareEmoji />
              Share
            </Button>
          </HeaderEnd>
        </DescriptionRow>
      </HeadContain>
    </Container>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  galleria: PropTypes.shape({
    reviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    isSuperhost: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Header;
