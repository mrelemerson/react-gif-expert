import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export function GifItem({ id, title, url }) {
  return (
    <div className="col">
      <div className="card">
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          {/* <p className="card-text"></p> */}
        </div>
      </div>
    </div>
  );
}

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
