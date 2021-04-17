import Button from './Button';
import { data } from './Data';

const ButtonPanel = () => (
  data.map((groups) => groups.group.map((group) => (
    <Button className="letssee" buttonName={group} key={groups.group.index} />
  )))
);

export default ButtonPanel;
