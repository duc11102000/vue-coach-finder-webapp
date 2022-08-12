export default {
    addRequest(state, payload){ 
        state.requests.push(payload); // Đẩy  payload vào trong mảng requests trong index.js của folder requests
    }
}