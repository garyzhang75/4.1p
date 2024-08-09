import React from 'react';
import Tutorial from './tutorial'; // Import the Tutorial component
import tutorialinfo from './tutoriallist1'; // Import the tutorial info data
import './tutorial.css'; // Import CSS file

const tutorialComponent = (tutorialItem, i) => {
  return (
    <Tutorial 
      key={i}
      imageurl1={tutorialItem.imageurl1}
      title1={tutorialItem.title1}
      description1={tutorialItem.description1}
    />
  );
};

const TUTORIAL = () => {
  return (
    <div className="articles">
      {tutorialinfo.map(tutorialComponent)}
    </div>
  );
};

export default TUTORIAL;