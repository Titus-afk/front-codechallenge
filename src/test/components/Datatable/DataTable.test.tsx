import { fireEvent, render, screen, within } from "@testing-library/react";
import { expect, it } from "vitest";

import DataTable from "../../../components/Datatable/DataTable";
import { sampleColumns, sampleData } from "../../../constants";

it("Load Table - should load table and rows per page", () => {
  render(<DataTable data={sampleData} columns={sampleColumns} />);
  const table = screen.getByRole("table");
  const tableBody = screen.getByRole("table-body");
  const rows = tableBody.querySelectorAll("tr");
  const rowIndex = sampleData.length >= 10 ? 9 : sampleData.length;
  const rowText = screen.queryByText(sampleData[rowIndex].name);
  expect(table).toBeInTheDocument();
  expect(table).toBeVisible();
  expect(rowText).toBeVisible();
  expect(rows.length).toBe(10);
});

it("Page size selector - should update rows per page to 30", () => {
  render(<DataTable data={sampleData} columns={sampleColumns} />);
  const pageSizeSelector = screen.getByRole("datatable-pagesize");
  const tableBody = screen.getByRole("table-body");
  fireEvent.change(pageSizeSelector, { target: { value: 30 } });
  const rows = tableBody.querySelectorAll("tr");
  const rowText = screen.queryByText(sampleData[29].name);
  expect(rows.length).toBe(30);
  expect(rowText).toBeVisible();
});

it("Page search - should update rows to 1 and display only row matching search term", () => {
  render(<DataTable data={sampleData} columns={sampleColumns} />);
  const searchTerm = sampleData[sampleData.length - 1].name;
  const searchSelector = screen.getByRole("datatable-search");
  const tableBody = screen.getByRole("table-body");
  fireEvent.change(searchSelector, { target: { value: searchTerm } });
  const rows = tableBody.querySelectorAll("tr");
  const rowText = screen.queryByText(searchTerm);
  expect(rows.length).toBe(1);
  expect(rowText).toBeVisible();
});

it("Pagination - should show pagination with pages if data exceeds pagesize", () => {
  const pageSize = 10;
  const pageCount = Math.ceil(sampleData.length / pageSize);
  render(<DataTable data={sampleData} columns={sampleColumns} defaultPageSize={pageSize} />);
  const pagination = screen.getByRole("pagination");
  const pages = screen.getAllByRole("page");
  expect(pagination).toBeVisible();
  expect(pages.length).toBe(pageCount);
});

it("Edit Columns - should open drawer, select column and remove column", () => {
  render(<DataTable data={sampleData} columns={sampleColumns} />);
  const colIndex = sampleColumns.length - 1;
  const dataProperty = sampleColumns[colIndex].colName;
  const dataValue = sampleData[0][dataProperty];
  const editColumnButton = screen.getByRole("edit-columns");
  fireEvent.click(editColumnButton);
  const editColumnDrawer = screen.getByRole("editcolumn-drawer");
  expect(editColumnDrawer).toBeVisible();
  const columnCheckbox = within(editColumnDrawer).getByText(sampleColumns[colIndex].label);
  fireEvent.click(columnCheckbox);
  expect(columnCheckbox).not.toBeChecked();
  const closeButton = within(editColumnDrawer).getByText(/close/i);
  fireEvent.click(closeButton);
  expect(editColumnDrawer).not.toBeVisible();
  const tableBody = screen.getByRole("table-body");
  const row = tableBody.querySelectorAll("tr")[0];
  expect(row).not.toHaveTextContent(String(dataValue));
});
