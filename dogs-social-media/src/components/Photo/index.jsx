const Photo = ({ title, src }) => {
  return (
    <>
      <img src={src} title={title} alt={title} />
    </>
  );
};

export default Photo;
