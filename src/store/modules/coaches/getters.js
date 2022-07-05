export default {
    coaches(state) {
        return state.coaches; //Trả về list các coach trong index VueX
    },

    hasCoaches(state){
        return state.coaches && state.coaches.length > 0; // Trả về list các coach và đồ dài của list các coach lớn hơn 0
    }
}