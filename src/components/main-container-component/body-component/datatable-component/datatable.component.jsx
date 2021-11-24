import MUIDataTable from "mui-datatables";
import React  from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const DataTableComponent = ({appReducer}) => {
  //console.log(appReducer.tableRecordset[0])
  //const columns = appReducer.tableRecordset[0].slice(1)
  const columnsArr = [];
  const columnsToDisplay = [
    0,1,2,6,8,11,13,15,18,19,20,21
  ];
  for (var i = 0; i < appReducer.tableRecordset[0].slice(1).length; i++) {
    if (!columnsToDisplay.includes(i)) {
      columnsArr.push(
        {
          name: appReducer.tableRecordset[0].slice(1)[i],
          options: {
            display: false
          }
        }
      )
    } else {
      columnsArr.push(appReducer.tableRecordset[0].slice(1)[i])
    }
  }
  //console.log(columnsArr)
  const columns = columnsArr;
  /*const columns = [
    {
      name: "id",
      options: {
        display: false,
      }
    },
   0 "system_id",
   1 "logged_in_user",
   2 "drawing_number",
   3 "kbb_number",
   4 "coord_from",
   5 "pin_text_from",
   6 "x_from",
   7 "color_from",
   8 "connector_code_from",
   9 "pin_from",
   10 "coord_to",
   11 "x_to",
   12 "color_to",
   13 "connector_code_to",
   14 "pin_to",
   15 "type",
   16 "time",
   17 "connection_text",
   18 "status",
   19 "test_date",
   20 "test_time",
   21 "retest_count"
  ]*/

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

  const data = appReducer.tableRecordset.slice(1).map(data => data.slice(1));

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
