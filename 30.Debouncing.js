
// ! debouncing and throatling (debouncing and throatling both are used for impoving performance of the web app)

// ! Debouncing => we use debouncing to prevent the repetative function calls and makes application faster
// ? Uses: in search bar when ever user write things then function call will happens very early and repetative which will make application slow and to prevent that we will use debouncing and will allow the call using setTimeout after a certain interval of time

// we do it with help of setTimeout and clearTimeout function on a particular timer.

// like if we want to save some data after 3000ms of user stop typing .

// ? so when user will type we'll check if it's there we'll do clearTimeout and we'll put setTimeout time and function what we have to do after 3000ms

// function handleChange(event) {

//     let newValue = event.target.value;

//     // Clear the previous timeout if it exists
//     if (apiTimeoutId && id === cell.data_cell_id) {
//         clearTimeout(apiTimeoutId);
//     }

//     id = cell.data_cell_id;
//     // Set a new timeout to dispatch after 5000ms

//     dispatch(setApiCallProgressStatus(true));

//     dispatch(setUnsavedCellData({ [cell.data_cell_id]: newValue }));

//     apiTimeoutId = setTimeout(() => {
//         editDataCell(newValue).finally(() => {
//             dispatch(setApiCallProgressStatus(false));
//         });
//     }, 5000);
// }

// * story: bacha bolta rehta h mummy cake dedo again and again pr mummy cake yek time k baad hi degi



// ! Throatling : it is uses to limit the freq of certain action (api req).

// eg: suppose there is button which hit some api so to prevent the hitting of button again and again  with the help of throatling i can restrict the user for a certain time , or i can also disable the button.