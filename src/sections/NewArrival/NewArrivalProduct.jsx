import { Item } from './NewArrival.styled';

const NewArrivalProduct = ({ img, title = '' }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

export default NewArrivalProduct;
