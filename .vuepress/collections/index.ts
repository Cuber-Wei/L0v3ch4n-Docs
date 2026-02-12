import { defineCollections } from 'vuepress-theme-plume'
import interviewNote from './interview'
import jottingNote from './jotting'
import languageNote from './language'
import memorandum from './memorandum'
import osNote from './OS'
import projectNote from './project'
import secretsNote from './secrets'
import typeGymnasticsNote from './TypeGymnastics'

export default defineCollections([
  { type: 'post', title: '博客', dir: 'blog' },
  projectNote,
  interviewNote,
  languageNote,
  osNote,
  memorandum,
  jottingNote,
  secretsNote,
  typeGymnasticsNote,
])
