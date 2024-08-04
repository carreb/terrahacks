import React, { useEffect, useState } from 'react';
import './intro.css'; // Import the updated CSS file for styling

const Intro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Hide after 3 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="intro">
        <h1>
          We have 500 years until the world is uninhabitable
          <br />
          Help us save the world
        </h1>
      </div>
    )
  );
};

export default Intro;
