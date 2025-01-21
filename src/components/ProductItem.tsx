import { Product } from '@/utils/const/data.ts';

type ProductProps = { product: Product; children: React.ReactNode };

export const ProductItem: React.FC<ProductProps> = ({ product, children }) => {
  return (
    <li className={'flex flex-col border-2 rounded'}>
      <div className={'flex gap-2 align-baseline'}>
        <h2 className={'text-2xl'}>{product.name}</h2>
        <h3 className={'text-xl'}>${product.price}</h3>
      </div>
      <ul>
        {Object.entries(product.specs).map(([key, value]) => (
          <li className={'indent-2'} key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      {children}
    </li>
  );
};
