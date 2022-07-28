export default {
    user(state, user) {
        state.isUserAuthenticated = true;
        state.user = user;
    },
    endUserSession(state, user) {
        state.isUserAuthenticated = false;
        state.user = null;
        localStorage.clear();
    },
    saveUserSession(state) {
        localStorage.setItem('user', JSON.stringify(state.user));
    },
    restoreUserSession(state, user) {
        state.isUserAuthenticated = true;
        state.user = user;
    },
};