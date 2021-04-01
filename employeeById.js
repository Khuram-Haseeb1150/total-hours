import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { employeByid } from "../store/action/action";
import moment from "moment";
import "../css/employeeByid.css";
const EmployeeById = (props) => {
  const dispatch = useDispatch();

  const employee_Byid = useSelector(
    (state) => state.FirstReducer.employee_Byid
  );
  // if (employee_Byid && employee_Byid.length > 0) {
  //   console.log(`employdata`, employee_Byid);
  // }

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(employeByid(id));
    //
  }, []);

  const data = employee_Byid
    .filter(
      (person) => person.checkIn_id && person.checkinDate && person.checkinTime
    )
    .map((result, i) => {
      return (
        <tr>
          <td>{result.checkIn_id}</td>
          <td>{new Date(result.checkinTime).toLocaleTimeString()}</td>
          <td>{new Date(result.checkinDate).toLocaleDateString()}</td>
        </tr>
      );
    });

  const data2 = employee_Byid
    .filter(
      (person) =>
        person.checkout_id && person.checkoutTime && person.checkoutDate
    )
    .map((result, i) => {
      // console.log("ll",result)
      return (
        <tr>
          <td>{result.checkout_id}</td>
          <td>{new Date(result.checkoutTime).toLocaleTimeString()}</td>
          <td>{new Date(result.checkoutDate).toLocaleDateString()}</td>
        </tr>
      );
    });

  const data3 = employee_Byid
    .filter(
      (person) =>
        person.firstName &&
        person.lastname &&
        person.designation &&
        person.department &&
        person.fatherName
    )
    .slice(0, 1)
    .map((result, i) => {
      return (
        <>
          <div class="row">
            <div
              class="col-sm-6"
              style={{ display: "flex", fontWeight: "700" }}
            >
              <h4>Employee Name: </h4>
              <p className="dispay-data">
                {result.firstName} {result.lastname}
              </p>
            </div>
            <div
              class="col-sm-6 "
              style={{ display: "flex", fontWeight: "700" }}
            >
              <h4>Father Name:</h4>
              <p className="dispay-data">{result.fatherName}</p>
            </div>
          </div>

          <div class="row">
            <div
              class="col-sm-6 "
              style={{ display: "flex", fontWeight: "700" }}
            >
              <h4>Department:</h4>
              <p className="dispay-data">{result.department}</p>
            </div>
            <div
              class="col-sm-6 "
              style={{ display: "flex", fontWeight: "700" }}
            >
              <h4>Designation:</h4>
              <p className="dispay-data">{result.designation}</p>
            </div>
          </div>
        </>
      );
    });

  let tatalHours = [];

  const totalHour = employee_Byid.map((result) => {
    // if(result.checkinDate && result.checkinTime)
    // totalHour=result.checkinDate
    //  console.log("jj", result.checkinTime);
    // let chechinDate=new Date(result.checkinDate).toLocaleDateString();
    // let d1=Date.parse(new Date(result.checkinDate).toLocaleDateString()) ;
    //  let checkoutDate=new Date(result.checkoutDate).toLocaleDateString();
    // let d2=Date.parse(new Date(result.checkoutDate).toLocaleDateString())
    // console.log("pp",new Date(result.checkoutDate).toLocaleDateString())
    // let date1 = new Date(result.checkinDate);
    // let date2 = new Date(result.checkoutDate);
    // var momentA = moment(chechinDate,"DD/MM/YYYY");
    // var momentB = moment(checkoutDate,"DD/MM/YYYY");
    // console.log("ll",momentA)
    // console.log( new Date(result.checkinDate).toLocaleDateString())
    // if (
    //   new Date(result.checkinDate)== new Date(result.checkoutDate)
    // ) {
    //   console.log("hi");
    //   //  if(new Date(result.checkoutTime).toLocaleTimeString() > new Date(result.checkinTime).toLocaleTimeString())
    //   //  {
    //   //  total=  new Date(result.checkoutTime).toLocaleTimeString() - new Date(result.checkinTime).toLocaleTimeString()
    //   //   console.log("total",total)
    // }
    // })
  });

  const total = employee_Byid.filter((person) => {
    if ( person.checkinDate) {
      person.checkinDate = new Date(person.checkinDate).toLocaleDateString();
      let parts =person.checkinDate.split('/');
      var d1 = Number(parts[2] + parts[1] + parts[0]);
      return person.checkinDate
    }
    else{
      person.checkoutDate = new Date(person.checkoutDate).toLocaleDateString();
      return  person.checkoutDate;
    }
  });



//  const total=employee_Byid.map((person)=>{
//    if(person.checkinDate &&  person.checkoutDate)
//    {
//     person.checkinDate = new Date(person.checkinDate).toLocaleDateString();
//         person.checkoutDate = new Date(person.checkoutDate).toLocaleDateString();
//       return person.checkinDate && person.checkoutDate;
//    }
//  }) 
  console.log(total);

  return (
    <div class="container-fluid" style={{ marginTop: "40px" }}>
      {data3}
      <div class="row">
        <div class="col-6">
          <div class="table-responsive">
            <table class="table  table-striped table-bordered table-hover">
              <thead class="thead-dark ">
                <tr>
                  <th>Checkin Id</th>
                  <th>Checkin Time</th>
                  <th>Checkin Date</th>
                </tr>
              </thead>
              <tbody>{data}</tbody>
            </table>
          </div>
        </div>
        <div class="col-6" style={{ marginLeft: "-32px" }}>
          <div class="table-responsive">
            <table class="table  table-striped table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>Checkout Id</th>
                  <th>Checkout Time</th>
                  <th>Checkout Date</th>
                </tr>
              </thead>
              <tbody>{data2}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeById;
