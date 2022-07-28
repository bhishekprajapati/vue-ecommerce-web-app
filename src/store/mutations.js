export default {
    user(state, user) {
        state.isUserAuthenticated = true;
        state.user = user;
    },
    endUserSession(state, user) {
        state.isUserAuthenticated = false;
        state.user = null;
    }
};