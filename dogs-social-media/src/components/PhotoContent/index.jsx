import { Link } from 'react-router-dom';
import Photo from '../Photo';
import PhotoComments from '../PhotoComments';
import './styles.css';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <section className="photo">
      <figure className="photo-container">
        <Photo title={photo.title} src={photo.src} />
      </figure>

      <aside className="photo-details">
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            <span className="details-views">{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className="item-attributes">
            <li>{photo.peso} kilograms</li>
            <li>{photo.idade <= 1 ? `${photo.idade} year` : `${photo.idade} years`}</li>
          </ul>
        </div>
      </aside>

      <PhotoComments id={photo.id} comments={photo.comments} />
    </section>
  );
};

export default PhotoContent;
