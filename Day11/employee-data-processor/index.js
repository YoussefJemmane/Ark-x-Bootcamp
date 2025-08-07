// read xlsx file ./employee_data_.xlsx
const xlsx = require("xlsx");

const readEmployeeData = (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data;
  } catch (error) {
    console.error("Error reading the Excel file:", error);
    return [];
  }
};

const bonusCalculator = (employeeData) => {
  return employeeData.map((employee) => {
    const { AnnualSalary } = employee;
    let bonus = 0.05;

    if (AnnualSalary >= 100000) {
      bonus = 0.1;
    } else if (AnnualSalary >= 50000) {
      bonus = 0.07;
    }

    amount = bonus * AnnualSalary;
    return {
      ...employee,
      BonusPercentage: bonus.toFixed(2),
      BonusAmount: amount.toFixed(2),
    };
  });
};

const data = readEmployeeData("./employee_data_.xlsx");
const processedData = bonusCalculator(data);

// write processed data to new xlsx file
const writeEmployeeData = (filePath, data) => {
  try {
    const newWorkbook = xlsx.utils.book_new();
    const newSheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(newWorkbook, newSheet, "ProcessedData");
    xlsx.writeFile(newWorkbook, filePath);
    console.log("Data written successfully to", filePath);
  } catch (error) {
    console.error("Error writing the Excel file:", error);
  }
};

writeEmployeeData("./processed_employee_data.xlsx", processedData);
