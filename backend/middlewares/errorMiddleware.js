export const errorHandler=((err, req, res, next) => {
 
  
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode
  
    res.status(statusCode)
  
    console.log(err.message);
    res.json({
      message: err.message
    })
  
  
  })
  