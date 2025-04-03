export default class User {
    static async findOne({ email }) {
        const dummyUsers = [
            { email: "testuser1@dummy.com" },
            { email: "testuser2@dummy.com" },
            { email: "testuser3@dummy.com" },
        ];
        return dummyUsers.find((u) => u.email === email) || null;
    }
}
