import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <ul>
        <li>
          <Link href="/static-dashboard">Static Dashboard</Link>
        </li>
        <li>
          <Link href="/dynamic-dashboard">Dynamic Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
