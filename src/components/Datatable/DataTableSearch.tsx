import { searchArray } from "../../types";

interface Props {
  handleSearch: searchArray;
}

const DataTableSearch = ({ handleSearch }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = String(e.currentTarget.value);
    handleSearch(query);
  };
  return <input className="input" placeholder="Search here" type="text" role="datatable-search" onChange={handleChange} />;
};

export default DataTableSearch;
