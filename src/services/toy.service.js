import { storageService } from "./asyncStorage.service.js"
import { utilService } from "./util-service.js"
import { httpService } from "./http.service.js"

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    addToyMsg
}
window.cs = toyService

const KEY = 'toy_DB'
const API = 'toy/'
const BASE_URL = 'toy/'
_createToys()

async function query(filter) {
    // var toys = await storageService.query(STORAGE_KEY)
    // if (filterBy.name) {
    //     const regex = new RegExp(filterBy.name, 'i')
    //     toys = toys.filter(toy => regex.test(toy.vendor) || regex.test(toy.description))
    // }
    // if (filterBy.price) {
    //     toys = toys.filter(toy => toy.price <= filterBy.price)
    // }
    // return toys
    return httpService.get(BASE_URL, filter)
}

function getById(toyId) {
    // console.log('toyId service',toyId)
    // return storageService.getById(KEY, toyId)
    return httpService.get(BASE_URL + toyId)
}

function save(toyToSave) {
    // if (toyToSave._id) return storageService.put(KEY, toyToSave)
    // else return storageService.post(KEY, toyToSave)
    if (toyToSave._id) return httpService.put(BASE_URL + toyToSave._id, toyToSave)
    else return httpService.post(BASE_URL, toyToSave)
}

function remove(toyId) {
    // return storageService.remove(KEY, toyId)
    return httpService.delete(BASE_URL + toyId)
}
async function addToyMsg(toyId, txt) {
    // const toy = await getById(toyId)
    // if (!toy.msgs) toy.msgs = []

    // const msg = {
    //     id: utilService.makeId(),
    //     by: userService.getLoggedinUser(),
    //     txt
    // }
    // toy.msgs.push(msg)
    // await storageService.put(STORAGE_KEY, toy)    
    const savedMsg = await httpService.post(`toy/${toyId}/msg`, { txt })
    return savedMsg
}


function getEmptyToy() {
    return {
        // _id: '',
        name: '',
        price: null,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        // createdAt: new Date(Date.now()).toLocaleString(),
        inStock: true,
    }
}

function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy(
                'Talking Doll',
                123,
                ['Doll', 'Battery Powered', 'Baby'],
                ['Good', 'Nice', 'Fun']
            ),
            _createToy('Ball', 50, ['Outdoor', 'Baby'], ['Amazing!']),
            _createToy('Toys', 250, ['Box game'], ['wow!', 'awesome']),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
}

function _createToy(name, price, labels) {
    return {
        // _id: utilService.makeId(),
        name,
        price,
        labels,
        inStock: true,
        // createdAt: new Date(Date.now()).toLocaleString()
    }
}