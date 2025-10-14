function recursiveFunct(action) {
  if (action === 0) {
    console.log("TASK COMPLETE");
    return;
  }
  console.log("I am doing something");
  recursiveFunct(action - 1);
}
recursiveFunct(3);
