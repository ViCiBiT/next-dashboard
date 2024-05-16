import React from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  // Simulate fetching data for static dashboard
  const analyticsData = {
    visitors: 1200,
    pageViews: 3500,
  };

  return {
    props: {
      analyticsData,
    },
    revalidate: 10, // Regenerate the page every 10 seconds
  };
}

const StaticDashboard = ({ analyticsData }) => {
  return (
    <div>
      <h1>Static Dashboard</h1>
      <p>Visitors: {analyticsData.visitors}</p>
      <p>Page Views: {analyticsData.pageViews}</p>
      <Link href="/dynamic-dashboard">Go to Dynamic Dashboard</Link>
    </div>
  );
};

export default StaticDashboard;
