import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import Photo from '../Photo';
import PhotoComments from '../PhotoComments';
import './styles.css';
import PhotoDelete from '../PhotoDelete';

const PhotoContent = ({ data }) => {
  const userContext = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <section className="photo">
      <figure className="photo-container">
        <Photo title={photo.title} src={photo.src} />
      </figure>

      <aside className="photo-details">
        <div>
          <div className="container-author">
            {userContext.user && userContext.user.username === photo.author ? (
              <PhotoDelete photoId={photo.id} className="input-delete-photo" />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className="details-views">{photo.acessos}</span>
          </div>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className="item-attributes">
            <li>{photo.peso} kilograms</li>
            <li>{photo.idade <= 1 ? `${photo.idade} year` : `${photo.idade} years`}</li>
          </ul>
        </div>
      </aside>

      <PhotoComments className="comments" id={photo.id} comments={comments} />
    </section>
  );
};

export default PhotoContent;
