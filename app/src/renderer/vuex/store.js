import Vue from 'vue'
import Vuex from 'vuex'

const highlight = require('highlight.js')
const marked = require('marked')

Vue.use(Vuex)

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})

const createID = () => {
  let t = ''

  for (let i = 0; i <= 15; i++) {
    t += Math.floor(Math.random() * 10);
  }

  return t
}


const state = {
  showMenu: true,
  articleList: [{
    id: createID(),
    content: 'Untitled\n---\n',
    current: true
  }],
  font: 'Monospace',
  theme: true,
  themeIuputFloat: 'left',
  themeOutputFloat: 'right',
  themeMargin: '',
  themeEditView: true,
  themeReadView: true,
  editorMode: 'sublime'
}

const saveID = (state) => {
  let idArr = []

  for (let i = 0, len = state.articleList.length; i < len; i++) {
    idArr.push(state.articleList[i].id)
    localStorage.setItem('idArr', idArr.join(','))
  }
}

const mutations = {
  SHOW_MENU(state) {
    state.showMenu = state.showMenu === false ? true : false
  },
  CHANGE_THEME(state) {
    state.theme = state.theme === false ? true : false
  },
  CHANGE_EDITORMODE(state,mode) {
    if(mode === 'vim') {
      state.editorMode = mode
    } else if (mode === 'emacs') {
      state.editorMode = mode
    } else {
      state.editorMode = mode
    }
  },
  CHANGE_THEMEFLOAT(state, pos) {
    if (pos === 'change') {
      state.themeIuputFloat = state.themeIuputFloat === 'left' ? 'right' : 'left'
      state.themeOutputFloat = state.themeOutputFloat === 'right' ? 'left' : 'right'
    } else if (pos === 'edit-view') {
      state.themeIuputFloat = state.themeIuputFloat === 'left' ? 'none' : 'left'
      state.themeMargin = state.themeMargin === '0 auto' ? '' : '0 auto'
      state.themeReadView = state.themeReadView === false ? true : false
    } else if (pos === 'read-view') {
      state.themeOutputFloat = state.themeOutputFloat === 'right' ? 'none' : 'right'
      state.themeMargin = state.themeMargin === '0 auto' ? '' : '0 auto'
      state.themeEditView = state.themeEditView === false ? true : false
    }
  },
  UPDATE_FONT(state, font) {
    state.font = font
  },
  NEW_ARTICLE(state) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      state.articleList[i].current = false
    }

    let newOne = {
      id: createID(),
      content: 'Untitled\n---\n',
      current: true
    }

    state.articleList.push(newOne)

    console.log(state.articleList)
  },
  DELETE_ARTICLE(state, index) {
    if (state.articleList.length > 1) {
      let idArr = localStorage.getItem('idArr').split(',')
      let pos = idArr.indexOf(state.articleList[index].id)
      //删除localStorage中的数据
      idArr.splice(pos, 1)
      localStorage.setItem('idArr', idArr)

      localStorage.removeItem(state.articleList[index].id)

      state.articleList.splice(index, 1)

      for (let i = 0, len = state.articleList.length; i < len; i++) {
        state.articleList[i].current = false
      }

      state.articleList[0].current = true
    }
  },
  TEXT_INPUT(state, txt) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        state.articleList[i].content = txt
      }
    }
  },
  SAVE_CATCH(state) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        localStorage.setItem(state.articleList[i].id, state.articleList[i].content)
        saveID(state)
      }
    }
  },
  READ_CATCH(state) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        state.articleList[i].content = localStorage.getItem(state.articleList[i].id)
      }
    }
  },
  SELECT_ARTICLE(state, index) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      state.articleList[i].current = false
    }
    state.articleList[index].current = true
  },
  ARTICLE_LIST_FROM_LOCAL(state) {
    //从localStorage中取出数据,存进前面定义好的articleList数组中

    if (localStorage.getItem('idArr')) {
      state.articleList = null
      let idArr = localStorage.getItem('idArr').split(',')
      let articleArr = []

      for (let i = 0, len = idArr.length; i < len; i++) {
        let articleObj = {
          id: '',
          content: '',
          current: false
        }

        articleObj.id = idArr[i]
        articleObj.content = localStorage.getItem(idArr[i])
        articleArr.push(articleObj)
      }

      state.articleList = articleArr
      state.articleList[0].current = true
    }
  }
}

const actions = {
  showMenu({
    commit
  }) {
    commit('SHOW_MENU')
  },
  changeTheme({
    commit
  }) {
    commit('CHANGE_THEME')
  },
  changeEditorMode({
    commit
  },mode) {
    commit('CHANGE_EDITORMODE',mode)
  },
  changeThemeFloat({
    commit
  }, pos) {
    commit('CHANGE_THEMEFLOAT', pos)
  },
  updateFont({
    commit
  }, font) {
    commit('UPDATE_FONT', font)
  },
  newArticle({
    commit
  }) {
    commit('NEW_ARTICLE')
  },
  deleteArticle({
    commit
  }, index) {
    commit('DELETE_ARTICLE', index)
  },
  saveCatch({
    commit
  }) {
    commit('SAVE_CATCH')
  },
  textInput({
    commit
  }, txt) {
    commit('TEXT_INPUT', txt)
  },
  readCatch({
    commit
  }) {
    commit('READ_CATCH')
  },
  selectArticle({
    commit
  }, index) {
    commit('SELECT_ARTICLE', index)
  },
  articleListFromLocal({
    commit
  }) {
    commit('ARTICLE_LIST_FROM_LOCAL')
  }
}

const getters = {
  articleRaw: state => {
    let content = ''
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        content = state.articleList[i].content
      }
    }
    return content
  },
  articleMd: (state, getters) => {
    return marked(getters.articleRaw)
  },
  articleList: state => {
    return state.articleList
  },
  articleFont: state => {
    return state.font
  },
  changeView: state => {
    return state.themeIuputMargin
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
