import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const DataTableComponent = () => {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { 
      name: "Name", 
      options: { 
        filterOptions: { 
          fullWidth: true 
        } 
      } 
    },
    "Title",
    "Location"
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    selectableRows: false,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
    textLabels: {
      body: {
        noMatch: "Нажаль, відсутні дані для відображення",
        toolTip: "Сортувати",
        columnHeaderTooltip: column => `Сортувати за ${column.label}`
      },
      pagination: {
        next: "Наступна сторінка",
        previous: "Попередня сторінка",
        rowsPerPage: "Кількість рядків:",
        displayRows: "з",
      },
      toolbar: {
        search: "Пошук",
        downloadCsv: "Завантажити CSV",
        print: "Друкувати",
        viewColumns: "Перегляд колонок",
        filterTable: "Фільтрувати таблицю",
      },
      filter: {
        all: "Всі дані",
        title: "Фільтри",
        reset: "Скинути",
      },
      viewColumns: {
        title: "Відобразити колонки",
        titleAria: "Відобразити/Приховати колонки",
      }
    }
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"]
  ];

  return (
    <ThemeProvider theme={createTheme()}>
      <MUIDataTable
        title={"ACME Employee list"}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}

export default DataTableComponent;
