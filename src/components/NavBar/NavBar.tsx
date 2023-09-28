'use client';

import { Button } from '../Button/Button';

export const NavBar = () => {
  const abas = ['home', 'dashboard'];

  return (
    <header>
      <ul>
        <li>
          <Button
            label="Clicar"
            value="home"
            onClick={() => console.log('home')}
          />
        </li>
        <li>
          <Button
            label="Clicar"
            value="dashboard"
            onClick={() => console.log('dashboard')}
          />
        </li>
      </ul>
    </header>
  );
};
