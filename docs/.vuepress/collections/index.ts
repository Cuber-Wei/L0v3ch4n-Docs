import { defineCollections } from 'vuepress-theme-plume'
import projectNote from "./project";
import interviewNote from "./interview";
import languageNote from "./language";
import osNote from "./OS";
import memorandum from "./memorandum";
import jottingNote from "./jotting";
import secretsNote from "./secrets";
import typeGymnasticsNote from "./TypeGymnastics"

export default defineCollections([
  { type: 'post', title: '博客', dir: 'blog' },
  projectNote,
  interviewNote,
  languageNote,
  osNote,
  memorandum,
  jottingNote,
  secretsNote,
  typeGymnasticsNote
])
