import React from 'react';
import './styles.css';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <div className={'btnContainer'}>
      <button className={'primaryButton'} onClick={onClick}>
        <p>{title}</p>
      </button>
    </div>
  );
};
