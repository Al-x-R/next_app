import { TopPageComponentProps } from './TopPageComponent.props';


export const TopPageComponent = ({ page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
      {products && products.map(p => (
        <div>{p.title}</div>
      ))}
    </div>
  );
};

