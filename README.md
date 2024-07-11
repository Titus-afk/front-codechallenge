# Custom Datatable - Task 2

This is a zero-dependency data table component is a powerful and flexible tool that can enhance any project by providing essential data management capabilities.

![image](https://github.com/Titus-afk/datatable_zero_dependency/assets/53218631/26aba5aa-52e8-4da0-bf1d-bf38ae657c42)


I've added several customisation features for this datatable which can be seen on this live [link](https://datatable-custom.netlify.app/).

## Features

- Light/dark mode toggle
- Sorting with default sort
- Column customization - Show / Hide
- Fully responsive
- Searchable
- Page size selection
- Pagination

## Installation

- NodeJS version : v20.12.2

- Clone the repository

- Navigate to project

```
cd my-project
```

- Install packages

```
npm install
```

- To run project

```
npm run dev
```

## How to Use

Data Format

```
const data = [
{ id: 1, name: "Simon", location: "Canada", phoneNumber: "(613) 555-1234" },
{ id: 2, name: "Emily", location: "USA", phoneNumber: "(202) 555-2345" }]
```

```
const columns = [
    {
    colName: "id",
    label: "ID",
    visibility: true,
  },
  {
    colName: "name",
    label: "Name",
    visibility: true,
  },
  {
    colName: "location",
    label: "Location",
    visibility: true,
  },
  {
    colName: "phoneNumber",
    label: "Phone Number",
    visibility: true,
  },]
```

Default usage

```
<DataTable data={data} columns={columns} />
```

Light | Dark mode (use one as required)

```
<DataTable mode={light|dark} data={data} columns={columns} />
```

Set default sort

```
<DataTable mode={light|dark} data={data} columns={columns} defaultSort={{ col: "name", type: "asc" }}/>
```

Set default page size (use one as required)

```
<DataTable mode={light|dark} data={data} columns={columns} defaultPageSize={10|20|30|100}/>
```

Condensed Rows (use one as required)

```
<DataTable mode={light|dark} data={data} condensed={true}/>
```

## Running Tests

To run tests using vitest, run the following command.

Testing Framework : Vitest, jest-dom, react-testing-library

```bash
  npm run test
```
