export default class UserService {
    private static instance: UserService
    public static getInstance() {
        if (UserService.instance === undefined) {
            UserService.instance = new UserService()
        }
        return UserService.instance
    }
}