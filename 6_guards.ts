// Guard - некоторые вспомогательные конструкции в тайпскрипте, которые позволяют нам также работать с типами.

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponse {
  header = "response Header";
  result = "response result";
}

class MyError {
  header = "message Header";
  message = "error message";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//  ===================================
type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {}

setAlertType("success");
setAlertType("danger");
setAlertType("warning");

// setAlertType('default') // error в типе нет такого значения.
