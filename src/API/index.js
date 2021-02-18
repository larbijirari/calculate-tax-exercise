export default {
  supportedCompanies() {
    let companies = [
      { id: 1, name: "SARL", displayName: "S.A.R.L", rate: 0.25 },
      { id: 2, name: "SAS", displayName: "S.A.S", rate: 0.3 }
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(companies);
      }, 1000);
    });
  }
};
