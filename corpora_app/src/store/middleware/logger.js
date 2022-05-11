const logger = (strore) => (next) => (action) => {
    // console.log("logger dispaching", action);
    let result = next(action)
    // console.log("logger next state", strore.getState());
    return result
}

export default logger