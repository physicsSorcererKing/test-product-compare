import { MOCK_PRODUCTS } from '@/utils/const/data.ts';

type CompareTableProps = {
  compareIds: number[];
};
export const CompareTable: React.FC<CompareTableProps> = ({ compareIds }) => {
  const items = compareIds.map((id) => {
    const targetProduct = MOCK_PRODUCTS.find((elem) => elem.id === id);

    return targetProduct ? (
      <tr key={id} className={'text-end'}>
        <td>{targetProduct.name}</td>
        <td>${targetProduct.price}</td>
        <td>
          <ul className={'text-start'}>
            {Object.entries(targetProduct.specs).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </td>
      </tr>
    ) : null;
  });

  return (
    <table className={'border-4 border-spacing-4 border-collapse'}>
      <thead>
        <tr>
          <th className={'min-w-10'}>Name</th>
          <th className={'min-w-10'}>Price</th>
          <th className={'min-w-10'}>Specs</th>
        </tr>
      </thead>
      {items}
    </table>
  );
};
