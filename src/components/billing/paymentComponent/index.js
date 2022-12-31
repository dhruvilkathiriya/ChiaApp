import { initStripe, StripeContainer } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import {PUBLISHER_KEY} from "../../../helper/apiConstants";
import {styles} from './styles'

interface Props {
    paymentMethod?: string;
}

const PaymentScreen: React.FC<Props> = ({ paymentMethod, children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initialize() {
            const publishableKey = PUBLISHER_KEY;
            if (publishableKey) {
                await initStripe({
                    publishableKey,
                });
                setLoading(false);
            }
        }
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
    ) : (
        <StripeContainer keyboardShouldPersistTaps={false}>
            <ScrollView
                accessibilityLabel="payment-screen"
                style={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                {children}
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Text style={{ opacity: 0 }}>appium fix</Text>
            </ScrollView>
        </StripeContainer>
    );
};

export default PaymentScreen;
