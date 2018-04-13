import fetch from 'isomorphic-fetch'
import { SET_GLOSSARY } from '../constants'
const url = 'http://localhost:5000'

export const getGlossary = async (dispatch, getState) => {
  const glossary = await fetch(`${url}/glossary`).then(res => res.json())
  dispatch({ type: SET_GLOSSARY, payload: glossary })
}
