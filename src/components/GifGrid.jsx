import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && (
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) }
      <div className="row row-cols-1 row-cols-md-2 g-4">
        { images.map((image) => (
          <GifItem
            key={image.id}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...image}
          />
        )) }
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
