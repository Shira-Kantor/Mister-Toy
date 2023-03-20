import { reviewService } from '../services/review.service'
import router from '../router/index.js'


export const reviewStore = {
  state: {
    reviews: null
  },
  getters: {
    reviews(state) {
      return state.reviews
    },
    getReviews(state) {
      return state.reviews
    }
  },
  mutations: {
    setReviews(state, { reviews }) {
      state.reviews = reviews
    },
    addReview(state, { review }) {
      state.reviews.push(review)
    },
    removeReview(state, { reviewId }) {
      state.reviews = state.reviews.filter(review => review._id !== reviewId)
    },
  },
  actions: {
    async getReviews({ commit }, { filterBy }) {
      try {
        const reviews = await reviewService.query(filterBy)
        commit({
          type: 'setReviews',
          reviews
        })
      } catch (err) {
        console.log(err);
      }
    },
    async addReview(context, { newReview }) {
      const { txt, toyId } = newReview
      const user = context.rootGetters.user
      console.log('user',user)
      if (!user) return router.push('/login')
      const review = {
        txt,
        userId: user._id,
        toyId
      }
      console.log('review',review)
      await reviewService.addReview(review)
      // context.commit({
      //   type: 'addReview',
      //   review: addedReview
      // })
    }
  }
}