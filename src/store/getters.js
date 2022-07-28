export default {
    isUserAuthenticated(state) {
        return state.isUserAuthenticated;
    },
    userEmail(state) {
        return state.user._tokenResponse.email;
    }
};