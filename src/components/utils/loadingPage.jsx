import React from "react";
import Loader  from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const LoadingPage = () => {
  return (
    <Loader
        type="Oval"
        color="#d78520"
        height={150}
        width={150}
        timeout={0} 
      />
  );
};

export default LoadingPage;
