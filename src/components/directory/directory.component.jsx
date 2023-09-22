import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

import categories from '../../categories.json';

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map(({ id, ...category }) => (
        <DirectoryItem key={id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
