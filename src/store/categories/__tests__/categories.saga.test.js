import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { call } from 'typed-redux-saga/macro';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga
} from '../categories.saga';
import { CATEGORIES_ACTION_TYPES } from '../categories.types';
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess
} from '../categories.action';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';

describe('Categories Sagas', () => {
  test('categoriesSaga', () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test('oneFetchCategories', () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test('fetchCategoriesAsync success', () => {
    const mockCategoriesArray = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' }
    ];
    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test('fetchCategoriesAsync failed', () => {
    const mockError = new Error('fetch categories failed');

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
