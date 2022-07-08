export default {
    registerCoach(state, payload) {
        console.log(payload, state)
        // debugger;
        state.coaches.push(payload);
    }
}