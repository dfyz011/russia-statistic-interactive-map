import { GET_CATEGORIES } from '../constants/categories';
import config from '../config/server';
import { handleError } from './alertAction';
import { handleLoadingFinished, handleLoadingStarted } from './loadingAction';

export const getCategories = () => async dispatch => {
  try {
    handleLoadingStarted();
    const response = await fetch(`${config.protocol}://${config.server}:${config.port}/api/categories`, {
      method: 'get',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }
    console.log('json', json);
    dispatch({
      type: GET_CATEGORIES,
      payload: {
        items: json.items,
      },
    });
    // dispatch({
    //   type: OPEN_ALERT,
    //   payload: {
    //     message: { text: "Пользователь успешно создан.", type: "success" }
    //   }
    // });
  } catch (err) {
    handleError(dispatch, err);
  } finally {
    handleLoadingFinished();
  }
};
