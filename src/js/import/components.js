import _ from "lodash";

(async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.dir(_);
})()