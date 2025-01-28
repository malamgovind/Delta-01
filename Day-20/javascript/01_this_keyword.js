let student = {
    name: "govind",
    age: 18,
    eng: 91,
    math: 89,
    phy: 78,
    getavg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log("got avg marks = ", avg);
    }
}