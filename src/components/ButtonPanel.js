import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const clickHandler = (buttonName) => onClick(buttonName);

  return (
    <div id="panel" className="button-panel">
      <div id="group-1">
        <Button onClick={clickHandler} buttonName="AC" />
        <Button onClick={clickHandler} buttonName="+/-" />
        <Button onClick={clickHandler} buttonName="%" />
        <Button onClick={clickHandler} buttonName="÷" />
      </div>
      <div id="group-2">
        <Button onClick={clickHandler} buttonName="7" />
        <Button onClick={clickHandler} buttonName="8" />
        <Button onClick={clickHandler} buttonName="9" />
        <Button onClick={clickHandler} buttonName="X" />
      </div>
      <div id="group-3">
        <Button onClick={clickHandler} buttonName="4" />
        <Button onClick={clickHandler} buttonName="5" />
        <Button onClick={clickHandler} buttonName="6" />
        <Button onClick={clickHandler} buttonName="-" />
      </div>
      <div id="group-4">
        <Button onClick={clickHandler} buttonName="1" />
        <Button onClick={clickHandler} buttonName="2" />
        <Button onClick={clickHandler} buttonName="3" />
        <Button onClick={clickHandler} buttonName="+" />
      </div>
      <div id="group-5">
        <Button onClick={clickHandler} buttonName="0" />
        <Button onClick={clickHandler} buttonName="." />
        <Button onClick={clickHandler} buttonName="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
