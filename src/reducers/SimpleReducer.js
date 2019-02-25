export default (state = [], action) => {
 switch (action.type) {
   case 'INSTA_DATA':
   return {
    result: action.payload
   }
  default:
   return state
 }
}