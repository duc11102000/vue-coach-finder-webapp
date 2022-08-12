export default {
    contactCoach(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            email: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequest); // commit newRequest với đống data trong đó vào addRequest bên mutation để cập nhật mảng request trong state 
    }
};