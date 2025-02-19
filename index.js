import { NativeModules, Platform, Linking } from 'react-native';

const { RNSafariModalController } = NativeModules;

const module = {
    openURL: url => {
        if (!(typeof url === 'string')) {
            return;
        }
        if (!/^(https|http)/i.test(url)) {
            return;
        }
        if (Platform.OS === 'ios') {
            RNSafariModalController.isAvailable()
            .then(
                status => status ? RNSafariModalController.openURL(url) : Linking.openURL(url).catch(),
            );
            return;
        }
        Linking.openURL(url).catch();
    }
}

export default module;
