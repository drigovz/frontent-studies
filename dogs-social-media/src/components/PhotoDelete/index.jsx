import { useNavigate } from 'react-router-dom';
import { PHOTO_DELETE } from '../../api/photoEndpoints';
import { getToken } from '../../utilities/utils';
import useFetch from '../../hooks/useFetch';
import './styles.css';

const PhotoDelete = ({ photoId }) => {
  const token = getToken();
  const navigate = useNavigate();
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Would you like to delete this photo?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(photoId, token);
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/');
      }
    } else {
      return;
    }
  }

  return (
    <>
      {loading ? (
        <button className="delete-photo" disabled id="detele-photo" name="detele-photo">
          Deleting...
        </button>
      ) : (
        <button className="delete-photo" id="detele-photo" name="detele-photo" onClick={handleClick}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
