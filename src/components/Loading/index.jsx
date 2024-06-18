import React from 'react';
import { LoaderContainer, Ball } from './styles';

const Loading = () => {
  return (
    <LoaderContainer>
      <Ball />
      <Ball />
      <Ball />
    </LoaderContainer>
  );
};

export {Loading};