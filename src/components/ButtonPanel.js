import Button from './Button';
import { data } from './Data';

const ButtonPanel = () => (
  <div>
    {data.map((groups) => groups.group.map((group) => (
      <Button buttonName={group} key={groups.group.index} />
    )))}
  </div>
);

export default ButtonPanel;
