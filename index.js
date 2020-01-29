// Write your solution in this file!

const driver = {};

const updateDriverWithKeyAndValue = (obj, key, value) => {
  const newDriver = {...obj};
  
  newDriver[key] = value;



  return newDriver;
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
   obj[key] = value;
   return obj;
}

const deleteFromDriverByKey = (obj, key) => {
   const newObj = {...obj}
   delete newObj[key];
   return newObj;
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
  delete obj[key];
   return obj;
}