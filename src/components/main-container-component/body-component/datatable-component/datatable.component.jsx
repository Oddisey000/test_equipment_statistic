import MUIDataTable from "mui-datatables";
import React  from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const DataTableComponent = ({appReducer}) => {
  const columns = appReducer.tableRecordset[0]

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

  const data = appReducer.tableRecordset.slice(1).map(data => data);

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

const mapStateToProps = (state) => {
  return {
    appReducer: { ...state.appReducer }
  };
};

export default connect(mapStateToProps)(DataTableComponent);
