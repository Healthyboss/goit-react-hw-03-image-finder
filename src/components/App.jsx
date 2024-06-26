import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";

const App = () => {

  const[images, setImages] = useState([]);
  const[query, setQuery] = useState('');
  const[page,setPage] = useState(1);
  const[isLoading, setIsLoading] = useState(false);
  const[showModal, setShowModal] = useState(false);
  const[largeImageURL, setLargeImageURL] = useState('');

  useEffect(() =>{

  if(query === '') return;

  const fetchImages = async() => {
    const API_KEY = '43706689-5ac61aa02d8e0198b8519ebdf';
    const BASE_URL = 'https://pixabay.com/api/';

    setIsLoading(true);

    try {
      const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
      setIsLoading(false);
    }
    catch (error) {
      console.error('Error fetching images:', error);
      setIsLoading(false);
    }
  };

  fetchImages();

  }, [query,page]);


const handleSearch = (query) =>{
  setQuery(query);
  setPage(1);
  setImages([]);
}

const handleLoadMore = () => {
  setPage((prevPage) => prevPage + 1);
};


const handleImageClick = (largeImageURL) => {
  setShowModal(true);
  setLargeImageURL(largeImageURL);
}

const closeModal = () => {
  setShowModal(false);
  setLargeImageURL('');
}

  return (
  <div className="App">

    <SearchBar onSubmit={handleSearch}/>
    <ImageGallery images={images} onImageClick={handleImageClick} />
    {isLoading && <Loader/>}
    {images.length > 0 && !isLoading && <Button onClick={handleLoadMore}/>}
    {showModal && <Modal largeImageURL={largeImageURL} onClose={closeModal}/>}

  </div>
  );
}

export default App;
