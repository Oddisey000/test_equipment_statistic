import MUIDataTable from "mui-datatables";
import React, {useState}  from "react";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const DataTableComponent = ({ ...appReducer }) => {
  const [value, setValue] = useState(0);
  const columnsArr = [];
  const columnsToDisplay = [0,1,2,6,8,11,13,15,18,19,20,21];
  let columnsData = [];
  let data = [];

  const checkData = setInterval(() => {
    if (appReducer.tableRecordset[0]) {
      clearInterval(checkData)
      setValue(1)
    }
  }, 1000);
  
  if (appReducer.tableRecordset[0]) {
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
    rowsPerPageOptions: [10, 50, 100],
    //onTableChange: (action, state) => {},
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
      <MUIDataTable
        title={"Статистика роботи тестового обладнання Mercedes Benz BR206"}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
  );
}

export default DataTableComponent;
