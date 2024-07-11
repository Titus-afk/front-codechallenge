import { data } from "../../types";
import "./styles/datatable-body.css";
interface Props {
  data: data[];
  condensed: boolean;
}

const DataTableBody = ({ data, condensed }: Props) => {
  return (
    <tbody role="table-body">
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.entries(row).map(([key, value]) => (
            <td key={`${rowIndex}_${key}`}>
              <div className={`cell ${condensed && "cell--condensed"}`}> {value}</div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default DataTableBody;
