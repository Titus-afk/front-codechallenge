import { useState } from "react";
import DataTable from "../components/Datatable/DataTable";
import { sampleColumns, sampleData } from "../constants";

const AppLayout = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const handleTheme = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="section text-only">
        <h1>Customization Previews ⚡</h1>
        <p>Below is a list of features and customisation possibilities with this datatable</p>
      </div>
      <div className="section">
        <h2>Dark Mode Datatable</h2>
        <p>Theme is set to "dark"</p>

        <DataTable mode="dark" data={sampleData} columns={sampleColumns} />
      </div>
      <div className="section section--light">
        <h2>Light Mode Datatable</h2>
        <p>Theme is set to "light"</p>

        <DataTable mode="light" data={sampleData} columns={sampleColumns} />
      </div>
      <div className="section">
        <h2>Toggleable Theme</h2>
        <p>
          Theme is set based on user preference.{" "}
          <a href="#" onClick={handleTheme}>
            Click Here
          </a>{" "}
          to change the theme
        </p>

        <DataTable mode={theme} data={sampleData} columns={sampleColumns} />
      </div>
      <div className="section">
        <h2>Condensed Rows</h2>
        <p>Reduced height of rows for more visibility. Reduces overall Y scroll.</p>

        <DataTable mode="dark" data={sampleData} columns={sampleColumns} defaultSort={{ col: "name", type: "asc" }} condensed={true} />
      </div>
    </>
  );
};

export default AppLayout;
