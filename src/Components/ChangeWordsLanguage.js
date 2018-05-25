import {languages} from '../languages'

export function ChangeWordsLanguage(word,choiceLanguage){
  return languages[word][choiceLanguage]
}