import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;