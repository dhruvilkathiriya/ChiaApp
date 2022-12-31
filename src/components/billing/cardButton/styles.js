import {StyleSheet} from "react-native";
import {colors} from "../../../helper/colors";
import {wp} from "../../../helper/constants";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondaryColor,
        marginHorizontal: wp(4.5),
        paddingVertical: wp(4),
        borderWidth: 1,
        borderRadius: wp(2.5),
        borderColor: colors.primaryColor,
    },
    primaryContainer: {
        backgroundColor: colors.secondaryColor,
        alignItems: 'center',
    },
    text: {
        color: colors.whiteBg,
        fontWeight: '600',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    textPrimary: {
        color: '#fff',
    },
    disabled: {
        opacity: 0.3,
    },
});
