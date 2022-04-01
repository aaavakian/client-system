import {Theme} from './types';

export function bgThemeClasses(theme: Theme) {
  switch (theme) {
    case Theme.Cyan:
      return 'bg-cyan-600 hover:bg-cyan-700';

    case Theme.Teal:
      return 'bg-teal-500 hover:bg-teal-600';
  
    default:
      return '';
  }
}
