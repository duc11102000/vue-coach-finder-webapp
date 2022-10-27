import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

export default {
    namespaced: true,
    state() {
        return {

            coaches: [
                {
                    id: 'c1',
                    firstName: 'Nguyễn Văn',
                    lastName: 'A',
                    areas: ['frontend'],
                    description:
                        "Tui là A và tui thích làm front-end :3",
                    hourlyRate: 30
                },
                
                {
                    id: 'c2',
                    firstName: 'Lê Thị',
                    lastName: 'B',
                    areas: ['backend'],
                    description:
                        'Tui là B tui thích làm back-end :D',
                    hourlyRate: 30
                },

                {
                    id: 'c3',
                    firstName: 'Ngô Nguyễn',
                    lastName: 'C',
                    areas: ['career'],
                    description:
                        'Tui là C tui thích làm tư vấn sự nghiệp :v',
                    hourlyRate: 30
                }
            ]
        }
    },
    getters,
    actions,
    mutations
}