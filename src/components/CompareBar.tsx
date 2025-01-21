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
  const items = compareIds.map((id) => (
    <li key={id}>
      {id}
      <button onClick={() => removeCompareId(id)}>Remove</button>
    </li>
  ));

  return (
    <footer
      className={
        'fixed bottom-0 left-0 w-full h-[200px] bg-gray-300 flex gap-4'
      }
    >
      <ul className={'flex gap-4'}>{items}</ul>
      <button
        className={'bg-red-600 text-white p-4 ml-auto'}
        onClick={clearCompareIds}
      >
        Clear
      </button>
    </footer>
  );
};
