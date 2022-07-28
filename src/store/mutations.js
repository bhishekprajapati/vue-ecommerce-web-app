export default {
    user(state, user) {
        state.isUserAuthenticated = true;
        state.user = user;
    }
};