import cx from 'classnames';

import {Theme} from './types';
import {bgThemeClasses} from './utils';

type Props = {
  theme?: Theme;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({children, onClick, theme = Theme.Teal}) => {
  return (
    <button
      className={cx(
        'p-3 rounded-md duration-100 text-sm text-white',
        bgThemeClasses(theme),
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
