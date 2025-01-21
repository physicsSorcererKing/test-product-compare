import { ProductItem } from '@/components/ProductItem.tsx';
import { MOCK_PRODUCTS } from '@/utils/const/data.ts';

type ProductGridProps = {
  addCompareId: (id: number) => void;
  disableAddToCompare?: boolean;
};
export const ProductGrid: React.FC<ProductGridProps> = ({
  addCompareId,
  disableAddToCompare = false,
}) => {
  const items = MOCK_PRODUCTS.map((product) => (
    <ProductItem key={product.id} product={product}>
      <button
        className={'p-4 bg-blue-300 disabled:bg-gray-300'}
        onClick={() => addCompareId(product.id)}
        disabled={disableAddToCompare}
      >
        Add to compare
      </button>
    </ProductItem>
  ));
  return <ul className={'flex flex-wrap gap-4'}>{items}</ul>;
};
