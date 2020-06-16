import { GET_INDICATORS } from '../constants/indicators';
import config from '../config/server';
import { handleError } from './alertAction';
import { handleLoadingFinished, handleLoadingStarted } from './loadingAction';

export const getIndicators = (categories = []) => async dispatch => {
  try {
    handleLoadingStarted();
    const formattedCategories = categories.map((category) => category.id);
    const response = await fetch(
      `${config.protocol}://${config.server}:${config.port}/api/indicators`,
      {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          categories: formattedCategories,
        }),
      },
    );

    const json = await response.json();

    if (json.error) {
      throw new Error(json.message);
    }
    dispatch({
      type: GET_INDICATORS,
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
