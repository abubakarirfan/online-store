class User{

    constructor(){

    }

    managePersonalinfo() {

    }

    createCart() {

    }

    manageCart() {

    }

    placeOrder() {

    }

    payProcess() {

    }

    viewOrderHistory() {

    }

    updatePersonInfo() {
        
    }

}

class CustomerAcc extends User{

    constructor(fname, lname, address, pw, email){
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.pw = pw;
        this.email = email;
    }

    // Get //
    getFname() {
        return this.fname;
    }

    getLname() {
        return this.lname;
    }

    getAddress(){
        return this.address;
    }

    getPw(){
        return this.pw
    }

    getEmail(){
        return this.email
    }
// Set //
    setFname(fname) {
        this.fname = fname;
    }

    setLname(lname) {
        this.lname = lname;
    }

    setAddress(address) {
        this.address = address;
    }

    setPw(pw) {
        this.pw = pw;
    }

    setEmail(email) {
        this.email = email;
    }
// User Settings //
    viewPersonalInfo(){
        // But it doesn't view user password
        this.getFname();
        this.getLname();
        this.getAddress();
        this.getEmail();
    }
    
    updatePersonalInfo(fname, lname, address, email){
        // But it doesn't change user password
        this.setFname(fname);
        this.setLname(lname);
        this.setAddress(address);
        this.setEmail(email);
    }

    changePassword(pw){
        this.setPw(pw);
    }
}
