import {AiOutlinePlus} from 'react-icons/ai';

import Button from './Button';
import {Theme} from './types';

const AddButton = () => {
  const handleClick = () => {
    console.log('Add new client page');
  };

  return (
    <Button theme={Theme.Teal} onClick={handleClick}>
      <AiOutlinePlus />
    </Button>
  );
};

export default AddButton;
