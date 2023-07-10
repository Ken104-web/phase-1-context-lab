/* Your Code Here */


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const createEmployeeRecord = (arr) => {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  };
  
  const createEmployeeRecords = (arr) => {
    return arr.map((employee) => createEmployeeRecord(employee));
  };
  
  const createTimeInEvent = function(dateString) {
    const [date, hour] = dateString.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10)
    });
    return this;
  };
  
  const createTimeOutEvent = function(dateString) {
    const [date, hour] = dateString.split(' ');
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10)
    });
    return this;
  };
  
  const hoursWorkedOnDate = function(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  };
  
  const wagesEarnedOnDate = function(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
  };
  
  const allWagesFor = function() {
    const datesWorked = this.timeInEvents.map((event) => event.date);
    const totalWages = datesWorked.reduce((sum, date) => sum + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  };
  
  const findEmployeeByFirstName = function(employees, firstName) {
    return employees.find((employee) => employee.firstName === firstName);
  };
  
  const calculatePayroll = function(employees) {
    const totalPayroll = employees.reduce((sum, employee) => sum + allWagesFor.call(employee), 0);
    return totalPayroll;
  };
  
  // Test the functions
  describe("The payroll system", function () {
    // ... Write test cases for each function
  });
  

const allWages = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

