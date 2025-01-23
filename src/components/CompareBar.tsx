import { ProductItem } from '@/components/ProductItem.tsx';
import { MOCK_PRODUCTS } from '@/utils/const/data.ts';

export type CompareBarProps = {
  compareIds: number[];
  removeCompareId: (id: number) => void;
  clearCompareIds: () => void;
};
export const CompareBar: React.FC<CompareBarProps> = ({
  compareIds,
  removeCompareId,
  clearCompareIds,
}) => {
  const items = compareIds.map((id) => {
    const targetProduct = MOCK_PRODUCTS.find((elem) => elem.id === id);
    return targetProduct ? (
      <ProductItem product={targetProduct} key={id}>
        <button
          className={'bg-orange-600 text-white'}
          onClick={() => removeCompareId(id)}
        >
          Remove
        </button>
      </ProductItem>
    ) : null;
  });

  return (
    <footer
      className={
        'fixed bottom-0 left-0 w-full h-[200px] pl-4 bg-gray-300 flex gap-4 items-center'
      }
    >
      <ul className={'flex gap-4'}>{items}</ul>
      <button
        className={'bg-red-600 text-white p-4 ml-auto self-stretch'}
        onClick={clearCompareIds}
      >
        Clear
      </button>
    </footer>
  );
};
