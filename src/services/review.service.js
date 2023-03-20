import { httpService } from './http.service'
import { storageService } from './asyncStorage.service'
import {userService} from './user.service'

import { store } from '../store/index'
import { socketService, SOCKET_EVENT_REVIEW_ADDED, SOCKET_EVENT_REVIEW_ABOUT_YOU } from './socket.service'


;(() => {
  setTimeout(()=>{
    socketService.on(SOCKET_EVENT_REVIEW_ADDED, (review) => {
      console.log('GOT from socket', review)
      store.commit({type: 'addReview', review})
    })
    socketService.on(SOCKET_EVENT_REVIEW_ABOUT_YOU, (review) => {
      showSuccessMsg(`New review about me ${review.txt}`)
    })
  }, 0)

})()



export const reviewService = {
  addReview,
  query,
  remove
}



function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`review`, filterBy)
  // return storageService.query('review')
}

async function remove(reviewId) {
  await httpService.delete(`review/${reviewId}`)
  // await storageService.delete('review', reviewId)

}

async function addReview(review) {

  console.log('review',review)
  // console.log('aboutUserId',aboutToyId)
  const addedReview = await httpService.post(`review`, review)
  // const aboutUser = await userService.getById(aboutUserId)
  // console.log('aboutUserIdddd',aboutUserId)
  // const reviewToAdd = {
  //   txt,
  //   byUser: userService.getLoggedinUser(),
  //   aboutUser: {
  //     _id: aboutUser._id,
  //     fullname: aboutUser.fullname,
  //     imgUrl: aboutUser.imgUrl
  //   }
  // }

  // reviewToAdd.byUser.score += 10
  // await userService.update(reviewToAdd.byUser)
  // const addedReview = await storageService.post('review', reviewToAdd)
  return addedReview
}