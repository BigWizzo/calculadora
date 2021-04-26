import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const clickHandler = (buttonName) => onClick(buttonName);

  return (
    <div id="panel" className="button-panel">
      <div id="group-1">
        <Button onClick={clickHandler} name="AC" />
        <Button onClick={clickHandler} name="+/-" />
        <Button onClick={clickHandler} name="%" />
        <Button onClick={clickHandler} name="÷" />
      </div>
      <div id="group-2">
        <Button onClick={clickHandler} name="7" />
        <Button onClick={clickHandler} name="8" />
        <Button onClick={clickHandler} name="9" />
        <Button onClick={clickHandler} name="X" />
      </div>
      <div id="group-3">
        <Button onClick={clickHandler} name="4" />
        <Button onClick={clickHandler} name="5" />
        <Button onClick={clickHandler} name="6" />
        <Button onClick={clickHandler} name="-" />
      </div>
      <div id="group-4">
        <Button onClick={clickHandler} name="1" />
        <Button onClick={clickHandler} name="2" />
        <Button onClick={clickHandler} name="3" />
        <Button onClick={clickHandler} name="+" />
      </div>
      <div id="group-5">
        <Button onClick={clickHandler} name="0" />
        <Button onClick={clickHandler} name="." />
        <Button onClick={clickHandler} name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
