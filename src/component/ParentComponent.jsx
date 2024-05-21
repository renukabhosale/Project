import React, { useState } from 'react';
import Navbar from './Navbar';

const ParentComponent = () => {
  const [view, setView] = useState('');

  return (
    <div>
      <Navbar setView={setView} />
      {/* Other content */}
    </div>
  );
};

export default ParentComponent;