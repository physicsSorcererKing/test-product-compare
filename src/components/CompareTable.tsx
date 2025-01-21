type CompareTableProps = {
  compareIds: number[];
};
export const CompareTable: React.FC<CompareTableProps> = ({ compareIds }) => {
  const items = compareIds.map((id) => (
    <tr key={id}>
      <td>{id}</td>
      <td>Product {id}</td>
      <td>${id * 100}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      {items}
    </table>
  );
};
