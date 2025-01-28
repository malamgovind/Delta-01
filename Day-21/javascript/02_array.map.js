let student = [
    {
        name: "govind",
        result: 91
    },
    {
        name: "hari",
        result: 90
    },
    {
        name: "satish",
        result: 80
    }];

let result = student.map((el) => {
    return el.result / 10;
});