    function timeRightNow(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const amOrPm = hours >= 12 ? 'P.M.' : 'A.M.'; //12AM will be 0 hours based on 24hr time, which still equals A.M
      hours = hours % 12; // any hour from 0-24 % 12 will give an truthy positive integer except for 12PM since 12%12 = 0 no remainder
      hours = hours ? hours : 12; //if current hours is truthy (NOT 12pm), it will keep the hour, if not then its 12PM
      minutes = minutes < 10 ? '0' + minutes : minutes; //this puts a 0 before any minutes less than 10, such as the 0 in 12:05PM, the 0 must be a string in order for type coercion to work
      const finalCurrentTime = hours + ':' + minutes + ' ' + amOrPm;
      return finalCurrentTime;
    }
    export const getTimeFromDate = timeRightNow(new Date)


  export default timeRightNow
