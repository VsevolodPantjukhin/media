import PhotosListItem from './PhotosListItem';
import { useFetchPhotosQuery } from '../store';

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);
  return (
    <div>
      PhotosList
      <PhotosListItem />
    </div>
  );
};

export default PhotosList;
