import Button from './Button';

const group1 = ['AC', '+/-', '%', ' ÷'];
const group2 = [7, 8, 9, 'X'];
const group3 = [4, 5, 6, '-'];
const group4 = [1, 2, 3, '+'];
const group5 = [0, '.', '='];

const ButtonPanel = () => (
  <>
    <div className="group">
      {group1.map((item) => (
        <Button buttonName={item} key={item.index} />
      ))}
    </div>
    <div className="group">
      {group2.map((item) => (
        <Button buttonName={item} key={item.index} />
      ))}
    </div>
    <div className="group">
      {group3.map((item) => (
        <Button buttonName={item} key={item.index} />
      ))}
    </div>
    <div className="group">
      {group4.map((item) => (
        <Button buttonName={item} key={item.index} />
      ))}
    </div>
    <div className="group">
      {group5.map((item) => (
        <Button buttonName={item} key={item.index} />
      ))}
    </div>
  </>
);

export default ButtonPanel;
