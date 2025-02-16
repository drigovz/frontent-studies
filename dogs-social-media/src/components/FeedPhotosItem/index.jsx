import './style.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className="feed-item">
      <img
        //loading="lazy"
        //data-src={photo.src}
        src={photo.src}
        title={photo.title}
        alt={photo.title}
      />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
