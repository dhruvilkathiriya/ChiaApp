import React from 'react';
import {
  AccessibilityProps,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

type Props = AccessibilityProps & {
  title?: string | React.ReactElement,
  variant?: 'default' | 'primary',
  disabled?: boolean,
  loading?: boolean,
  onPress(): void,
};

export default function CardButton({
  title,
  variant = 'default',
  disabled,
  loading,
  onPress,
  ...props
}: Props) {
  const titleElement = React.isValidElement(title) ? (
    title
  ) : (
    <Text style={[styles.text, variant === 'primary' && styles.textPrimary]}>
      {title}
    </Text>
  );

  return (
    <View style={disabled && styles.disabled}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.container,
          variant === 'primary' && styles.primaryContainer,
        ]}
        onPress={onPress}
        {...props}>
        {loading ? (
          <ActivityIndicator color={'#ffffff'} size="small" />
        ) : (
          titleElement
        )}
      </TouchableOpacity>
    </View>
  );
}
