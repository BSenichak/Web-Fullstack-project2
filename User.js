export default class User {
    static count = 0;

    constructor() {
        User.count++;
        this.id = User.count;
    }

    getId() {
        return this.id;
    }

    static getUserCount() {
        return User.count;
    }
}