import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(({ id, ...category }) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
