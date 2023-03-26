import { defineStore } from 'pinia'

interface TabStore {
  menus: GlobalMenu[]
}

export const useTabStore = defineStore('tabStore', {
  state: (): TabStore => ({
    menus: []
  })
})
