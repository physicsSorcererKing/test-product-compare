import { useCallback, useState } from 'react';

import { CompareBar } from '@/components/CompareBar.tsx';
import { CompareTable } from '@/components/CompareTable.tsx';
import { ProductGrid } from '@/components/ProductGrid.tsx';

export const App: FC = () => {
  const [compareIds, setCompareIds] = useState<number[]>([]);

  const addCompareId = useCallback((id: number) => {
    setCompareIds((prev) => {
      if (prev.includes(id) || prev.length >= 3) {
        return prev;
      }

      return [...prev, id];
    });
  }, []);

  const removeCompareId = useCallback((id: number) => {
    setCompareIds((prev) => prev.filter((prevId) => prevId !== id));
  }, []);

  const clearCompareIds = useCallback(() => {
    setCompareIds([]);
  }, []);

  return (
    <main
      className={
        'relative w-full h-[100vh] max-h-[100vh] flex flex-col items-center overflow-auto pb-[200px]'
      }
    >
      <ProductGrid addCompareId={addCompareId} />
      <hr className={'border-b w-full h-[1px]'} />
      <CompareTable compareIds={compareIds} />
      <CompareBar
        compareIds={compareIds}
        removeCompareId={removeCompareId}
        clearCompareIds={clearCompareIds}
      />
    </main>
  );
};
