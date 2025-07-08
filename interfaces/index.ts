import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
