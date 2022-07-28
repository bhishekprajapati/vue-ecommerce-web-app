import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";

export default {
    async login({ commit }, { email, password }) {
        const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
        commit('user', userCredential);
    },
    async createAccount({ commit }, { email, password }) {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        commit('user', userCredential);
    },
};