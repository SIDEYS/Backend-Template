export const getTodayTimestamp = () => {
    let d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };
  
  export const getDayOfYear = (date) => {
    let start = new Date(date.getFullYear(), 0, 0);
    let diff = date - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let dayOfYear = Math.floor(diff / oneDay);
  
    return dayOfYear;
  };
  
  export const dateAndTimeId = () => {
    let currentDate = new Date();
    let day = getDayOfYear(currentDate).toString();
    let hour = currentDate.getHours().toString();
    let minute = currentDate.getMinutes().toString();
    let microsecond = currentDate.getTime().toString();
  
    let deviceID =
      day.slice(0, 3) +
      hour.slice(0, 2) +
      minute.slice(0, 2) +
      microsecond.slice(0, 5);
  
    return deviceID;
  };
  
  export const dateToTimestamp = (dateString) => {
    // Split the date string into year, month, and day components
    const [year, month, day] = dateString.split('-').map(Number);
  
    // Create a new Date object from the components
    const date = new Date(year, month - 1, day); // Month is 0-based (0 for January, 11 for December)
  
    // Get the timestamp (in milliseconds since January 1, 1970)
    const timestamp = date.getTime();
  
    // Convert milliseconds to seconds by dividing by 1000
    return timestamp;
  }
  