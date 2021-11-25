import MUIDataTable from "mui-datatables";
import React  from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const DataTableComponent = ({ ...appReducer }) => {
  const columnsArr = [];
  const columnsToDisplay = [0,1,2,6,8,11,13,15,18,19,20,21];
  let columnsData = [];
  let data = [];
  
  if (appReducer.tableRecordset[0]) {
    console.log(appReducer.tableRecordset[0])
    columnsData = appReducer.tableRecordset[0];
    data = appReducer.tableRecordset.slice(1).map(data => data);

  for (var i = 0; i < columnsData.length; i++) {
    if (!columnsToDisplay.includes(i)) {
      columnsArr.push(
        {
          name: columnsData[i],
          options: {
            display: false
          }
        }
      )
    } else {
      columnsArr.push(columnsData[i])
    }
  }
}

  const columns = columnsArr;
  const options = {
    search: true,
    download: true,
    print: false,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    tableBodyHeight: "75vh",
    tableBodyMaxHeight: "",
    selectableRows: false,
    //rowsPerPageOptions: [10, 50, 100, 500],
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
    textLabels: {
      body: {
        noMatch: "Опрацювання даних",
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

  return (
    <ThemeProvider theme={createTheme()}>
      {appReducer.tableRecordset[0]
        ? (
          <MUIDataTable
            title={"ACME Employee list"}
            data={data}
            columns={columns}
            options={options}
          />
        )
        : (
          <MUIDataTable />
        )}
      
    </ThemeProvider>
  );
}

export default DataTableComponent;
