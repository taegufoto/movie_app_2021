import React from 'react';
import PropTypes from 'prop-types';

function Food({Name, Image, rating}) {
  return (
    <div>
      <h1>I like {Name} potato</h1>
      <h4>{rating}/5.0</h4>
      <img src = {Image} height="200" width="200" alt={Name} />
    </div>
  );
}

const foodILike = [
  {
    Id: 1,
    Name: 'Kimchi',
    Image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/BAAD/production/_115698774_gettyimages-1229221846.jpg',
    rating: 5
  },
  {
    Id: 2,
    Name: 'Sushi',
    Image: 'https://properfoodie.com/wp-content/uploads/2020/07/sushi-1-1.jpg',
    rating: 4.9
  },
  {
    Id: 3,
    Name: 'Tonkaksu',
    Image: 'https://blog.kakaocdn.net/dn/H8hTw/btqCsHjuF6y/MgM0Rd8Q1kwlSLFQ5ie7c1/img.jpg',
    rating: 3.5
  },
  {
    Id: 4,
    Name: 'Cookie',
    Image: 'https://image.msscdn.net/images/goods_img/20210126/1762522/1762522_3_500.jpg',
    rating: 4
  }
];

function App() {
//    return <div className="App" />;

  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(current => (<Food key={current.Id} Name={current.Name} Image={current.Image} rating={current.rating} />))};
    </div>
  );
}

Food.propTypes = {
  Name: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
