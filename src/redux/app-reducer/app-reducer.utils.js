import axios from "axios";

export const GetOrdersInfo = (request) => {
  let dataArr = [];
  axios.get(request.appReducer.API_url).then((response) => {
    response.data.recordset.map((data) => {
      dataArr.push(Object.values(data)[0]);
      return dataArr;
    })
  }).catch((error) => {
    // handle error
    console.log(error);
  })
  return dataArr;
}

export const GetEquipmentInfo = (request) => {
  let dataArr = [];
  axios.get(request).then((response) => {
    response.data.recordset.map((data) => {
      dataArr.push(Object.values(data)[0]);
      return dataArr;
    })
  }).catch((error) => {
    // handle error
    console.log(error);
  })
  return dataArr;
}

export const ResetEquipmentInfo = () => {
  let dataArr = [];
  return dataArr;
}

export const GetDataFromDB = (request) => {
  let dataArr = []

  const SendData = (request) => axios.get(request).then((response) => {
    response.data.recordset.map((data) => {
      return dataArr.push(data)
    })
  }).catch((error) => {
    console.log(error);
  })

  SendData(request)
  return dataArr
}