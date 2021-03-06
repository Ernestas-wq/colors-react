import { GoSettings, GoHome } from 'react-icons/go';
import { HiSave } from 'react-icons/hi';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <GoHome />,
  },
  {
    id: 2,
    url: '/color-generator',
    text: 'color generator',
    icon: <GoSettings />,
  },
  {
    id: 3,
    url: '/saved-colors',
    text: 'saved colors',
    icon: <HiSave />,
  },
];
