module.exports.handler = async (event) => {

  console.log(new Date() + " Second Last Session Of Cohort 4")
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "add in logging",
      },
      null,
      2
    ),
  };
};