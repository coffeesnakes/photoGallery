import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';
import Gallery from './Gallery';
import Modal from './Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { listingId } = this.props;
    this.state = {
      listingId,
      galleria: {},
      show: false,
      verticalShow: false,
      picture: { _id: 1 },
      pictureIndex: 0,
      allImages: [],
      modalImage: null,
      loading: true,
      isSaved: false,
      viewPort: null,
    };
  }

  async componentDidMount() {
    await this.getGalleryById();
    this.getGalleryById = this.getGalleryById.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleViewPort = this.handleViewPort.bind(this);
    await window.addEventListener('resize', this.handleViewPort);
    this.handleViewPort();
  }

  handleViewPort() {
    this.setState({ viewPort: window.innerWidth });
  }

  handleSaveClick() {
    const { isSaved } = this.state;
    this.setState({ isSaved: !isSaved });
  }

  handleModalClick(photoId) {
    const { allImages } = this.state;
    this.setState({
      pictureIndex: photoId, modalImage: allImages[photoId], show: true, verticalShow: false,
    });
  }

  handleLeftButtonClick() {
    const { pictureIndex, allImages } = this.state;
    return pictureIndex === 0
      ? this.setState({
        pictureIndex: allImages.length - 1, modalImage: allImages[allImages.length - 1],
      })
      : this.setState({ pictureIndex: pictureIndex - 1, modalImage: allImages[pictureIndex - 1] });
  }

  handleRightButtonClick() {
    const { pictureIndex, allImages } = this.state;
    return pictureIndex === allImages.length - 1
      ? this.setState({ pictureIndex: 0, modalImage: allImages[0] })
      : this.setState({ pictureIndex: pictureIndex + 1, modalImage: allImages[pictureIndex + 1] });
  }

  getGalleryById() {
    const { listingId } = this.state;
    axios.get(`/api/galleries/${listingId}`)
      .then((res) => {
        this.setState({ galleria: res.data[0] }, () => {
          const { galleria, loading } = this.state;
          const { gallery } = galleria;
          this.setState({ allImages: gallery, loading: !loading, modalImage: gallery[0] });
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  showModal() {
    const { viewPort, show } = this.state;
    if ((viewPort > 1127) || show) {
      this.setState({ show: true, verticalShow: false });
    } else if (viewPort < 1128 && show) {
      this.setState({ show: true, verticalShow: false });
    } else {
      this.showVerticalModal();
    }
  }

  showVerticalModal() {
    const { viewPort } = this.state;
    if (viewPort < 1128) {
      this.setState({ show: false, verticalShow: true });
    }
  }

  hideModal() {
    const { allImages } = this.state;
    this.setState({
      show: false, verticalShow: false, modalImage: allImages[0], pictureIndex: 0,
    });
  }

  render() {
    const {
      galleria, show, picture, allImages, loading, pictureIndex,
      modalImage, isSaved, viewPort, verticalShow,
    } = this.state;
    const renderModal = (show || verticalShow)
      ? (
        <Modal
          show={show}
          hideModal={this.hideModal}
          onLeftClick={this.handleLeftButtonClick}
          onRightClick={this.handleRightButtonClick}
          allImages={allImages}
          pictureIndex={pictureIndex}
          modalImage={modalImage}
          isSaved={isSaved}
          onSaveClick={this.handleSaveClick}
          viewPort={viewPort}
          onClick={this.handleModalClick}
          verticalShow={verticalShow}
        />
      )
      : (<></>);
    const loadingRender = loading
      ? (<div>Loading....</div>)
      : (
        <div>
          <Header
            galleria={galleria}
            featuredPicture={picture}
            onClick={this.handleSaveClick}
            isSaved={isSaved}
          />
          <Gallery
            allImages={allImages}
            showModal={this.showModal}
            onClick={this.handleModalClick}
          />
        </div>
      );
    return (
      <div>
        {loadingRender}
        {renderModal}
      </div>
    );
  }
}

App.propTypes = {
  listingId: PropTypes.number.isRequired,
};
export default App;
