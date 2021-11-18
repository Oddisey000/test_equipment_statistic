import axios from "axios";

export const GetOrdersInfo = (request) => {
  let dataArr = [];
  axios.get(request.appReducer.API_url).then((response) => {
    response.data.recordset.map((data) => {
      dataArr.push(Object.values(data)[0]);
      console.log(data)
    })
  }).catch((error) => {
    // handle error
    console.log(error);
  })
  return dataArr;
}