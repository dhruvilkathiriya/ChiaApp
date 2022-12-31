import {api, GET} from "../helper/apiConstants";
import {call, put} from "redux-saga/effects";
import {makeAPIRequest} from "../helper/global";
import * as categoriesActions from "../actions/listingActions";
import {Alert} from "react-native";
import {strings} from "../helper/strings";

export function* getCategories(action) {
    const options = {
        method: GET,
        url: api.categories,
    };
    try {
        const res = yield call(makeAPIRequest, options);
        yield put(categoriesActions.getCategoriesSuccess(res?.data));
    } catch (error) {
        Alert.alert(
            error?.response?.data?.message ||
            `${strings.somethingWentWrong}\n${strings.pleaseTryAgain}`,
        );
        yield put(categoriesActions.getCategoriesFailure());
    }
}
