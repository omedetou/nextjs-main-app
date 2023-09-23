import * as React from 'react';
import { Navbar } from './navbar';

export const Header: React.FC = () => {
  return (
    <header>
      <Navbar />
      <button type="button" className="mx-2 btn btn-outline-primary">
        Signup
      </button>

      <button type="button" className="mx-2 btn btn-outline-success">
        Login
      </button>
    </header>
  );
};
