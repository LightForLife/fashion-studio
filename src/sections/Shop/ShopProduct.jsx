import { Item } from './Shop.styled';

const ShopProduct = ({ img, title = '' }) => {
  return (
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

export default ShopProduct;
