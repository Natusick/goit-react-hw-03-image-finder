import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getIconsApi from './Components/iconAPI';

import Container from './Components/Container/Container';
import Searchbar from './Components/Searchbar/Searchbar';
import Loader from './Components/Loader/Loader';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';

const iconsApiService = new getIconsApi();

class App extends Component {
  state = {
    images: [],
    query: '',
    largeImageURL: '',
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    iconsApiService.query = query;

    if (prevState.query !== query) {
      this.fetchImage();
    }
  }

  onSearchFormSubmit = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = e => {
    this.setState({
      largeImageURL: this.state.images.find(
        url => url.webformatURL === e.target.src
      ).largeImageURL,
    });
  };

  fetchImage = async () => {
    this.setState({ isLoading: true });

    try {
      const images = await iconsApiService.fetchImg();
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMore = async () => {
    this.setState({ isLoading: true });

    try {
      const images = await iconsApiService.fetchImg();
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onSearchFormSubmit} />

        {
          <ImageGallery
            images={images}
            onToggleModal={this.onToggleModal}
            onOpenModal={this.onOpenModal}
          />
         
        }
         

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.onToggleModal} url={largeImageURL} />
        )}

        {images.length >= 12 && (
          <Button onLoadMore={this.onLoadMore} isLoading={isLoading} />
        )}

        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
