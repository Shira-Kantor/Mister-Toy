import { createStore } from 'vuex'
import { toyService } from '../services/toy.service.js'
export const store = createStore({
    state: {
        msg: 'Store Is Running',
        toys: [],
        labels: ['Doll',
            'Battery Powered',
            'Baby']
    },
    getters: {
        getMsg(state) {
            return state.msg
        },
        getToys({ toys }) {
            return toys
        },
        getLabels({ labels }) {
            return labels
        },
        getAvg({ toys, labels }) {
            // console.log('toys in getAvg:',toys);
            return labels.map((label) => {
                const filteredToys = toys.filter((toy) => {

                    return toy.labels.includes(label)
                })
                return filteredToys.reduce((acc, filterToy) => {
                    return acc + +filterToy.price
                }, 0)
            })
        },
        toysToDisplay({ filterBy, toys }) {
            if (!toys) return null
            // const { name } = filterBy
            // let filteredToys = toys

            // const regex = new RegExp(txt, 'i')
            // filteredToys = filteredToys.filter(toy => regex.test(toy.name))

            // if (status) {
            //   filteredToys = filteredToys.filter(
            //     toy =>
            //       (toy.isDone && status === 'done') ||
            //       (!toy.isDone && status === 'active')
            //   )
            // }
            // const startIdx = pageIdx * pageSize
            // filteredToys = filteredToys.slice(startIdx, startIdx + pageSize)

            return toys
        },
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
        updateToy(state, { toy }) {
            const idx = state.toys.findIndex(t => t._id === toy._id)
            state.toys.splice(idx, 1, toy)
        },
        addToy(state, { toy }) {
            state.toys.unshift(toy)
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },
    actions: {
        loadToys({ commit }, { filter }) {
            // console.log('filter store',filter)
            return toyService
                .query(filter)
                .then(toys => {
                    // console.log('toys', toys);
                    commit({ type: 'setToys', toys })
                    return Promise.resolve()
                })
                .catch(err => {
                    throw err
                })
        },
        removeToy({ commit, dispatch, state }, payload) {
            // console.log('payload', payload)

            return toyService.remove(payload.toyId).then(() => {
                const toyTxt = state.toys.find(
                    toy => toy._id === payload.toyId
                ).name
                commit(payload)
            })
        },
        getSelectedToy({ commit }, { toyId }) {
            console.log(toyId);
            return toyService.getById(toyId).then(toy => {
                // console.log('toyyyyyyyyyy', toy);
                return toy

            })
        },
        saveToy({ commit }, { toy }) {
            const actionType = toy._id ? 'updateToy' : 'addToy'
            toyService.save(toy)
                .then(savedToy => {
                    commit({ type: actionType, toy: savedToy })
                    // let name = actionType === 'addToy' ? 'Added a toy' : 'Updated toy'
                    // name += `: ${savedToy.name}`
                    // return savedToy
                })
        },
    },
    modules: {}
})
