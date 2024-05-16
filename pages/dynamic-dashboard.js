import React from 'react';
import Link from 'next/link';

export async function getServerSideProps() {
  // Simulate fetching dynamic user data
  const userData = {
    username: 'john_doe',
    lastLogin: new Date().toISOString(),
  };

  return {
    props: {
      userData,
    },
  };
}

const DynamicDashboard = ({ userData }) => {
  return (
    <div>
      <h1>Dynamic Dashboard</h1>
      <p>Username: {userData.username}</p>
      <p>Last Login: {userData.lastLogin}</p>
      <Link href="/static-dashboard">Go to Static Dashboard</Link>
    </div>
  );
};

export default DynamicDashboard;
