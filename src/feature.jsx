import React from 'react';
import Card from './Card';
import CardArtile from './CardArticle';

const Cardcomponent = (CardArtile, i) => {
  return (
    <Card 
    key = {i}
    imageurl = {CardArtile.imageurl}
    title={CardArtile.title}
    description={CardArtile.description}
    rating={CardArtile.rating}
    author={CardArtile.author}

    />
          
  );
};
const Cartlist = ()=>{
  return(
    <div className="articles">
      {CardArtile.map(Cardcomponent)}
    </div>
  )
}
export default Cartlist;

    