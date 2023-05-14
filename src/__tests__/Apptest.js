import React from 'react';
import ReactDOM from 'react-dom';
import Head from '../Components/Head';
import Table from '../Components/Table';
import Uploader from '../Components/Uploader';
import NavBar from '../Layout/navbar/NavBar';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Head /> , div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Uploader /> , div);
});
 
