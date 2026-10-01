'use strict';

(function(root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) {
    module.exports = api
  } else {
    root.PreschoolCandidateStore = api
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  const CANDIDATE_KEY = 'preschool_candidates_v1'

  function parseObject(storage, key, fallback) {
    let value = fallback
    try {
      const parsed = JSON.parse(storage.getItem(key) || '')
      if (parsed && typeof parsed === 'object') value = parsed
    } catch (error) {
      value = fallback
    }
    return value
  }

  function loadCandidates(storage) {
    return parseObject(storage, CANDIDATE_KEY, {})
  }

  function saveCandidates(storage, candidates) {
    storage.setItem(CANDIDATE_KEY, JSON.stringify(candidates))
  }

  return {
    CANDIDATE_KEY,
    loadCandidates,
    saveCandidates,
  }
})
