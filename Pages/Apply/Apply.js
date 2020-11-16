import React from 'react';
import { WebView } from 'react-native-webview';

export default function Apply() {
  return (
    <WebView source={{ uri: 'https://www.codelaunch.com/application-category-1/' }} style={{ marginTop: 20 }} />
  );
}
