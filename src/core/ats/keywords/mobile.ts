/**
 * Mobile Development Keywords
 * Skill Area: mobile
 */

import type { KeywordEntry } from '@shared/types/background.types';

export const MOBILE_KEYWORDS: KeywordEntry[] = [
  // Cross-Platform
  { name: 'React Native', variations: ['reactnative', 'react-native', 'rn'], weight: 2.0, isCore: true },
  { name: 'Flutter', variations: ['flutter sdk'], weight: 2.0, isCore: true },
  { name: 'Xamarin', variations: ['xamarin.forms', 'xamarin forms'], weight: 1.5, isCore: false },
  { name: 'Ionic', variations: ['ionic framework'], weight: 1.4, isCore: false },
  { name: 'Cordova', variations: ['apache cordova', 'phonegap'], weight: 1.2, isCore: false },
  { name: 'Capacitor', variations: ['ionic capacitor'], weight: 1.3, isCore: false },
  { name: 'Expo', variations: ['expo sdk', 'expo go'], weight: 1.6, isCore: false },
  { name: 'NativeScript', variations: ['native script'], weight: 1.2, isCore: false },
  { name: 'MAUI', variations: ['.net maui', 'dotnet maui'], weight: 1.3, isCore: false },
  { name: 'Kotlin Multiplatform', variations: ['kmm', 'kmp', 'kotlin multiplatform mobile'], weight: 1.4, isCore: false },

  // iOS Development
  { name: 'iOS', variations: ['ios development', 'ios developer'], weight: 2.0, isCore: true },
  { name: 'Swift', variations: ['swift lang', 'swift programming'], weight: 2.0, isCore: true },
  { name: 'SwiftUI', variations: ['swift ui'], weight: 1.8, isCore: false },
  { name: 'UIKit', variations: ['ui kit'], weight: 1.6, isCore: false },
  { name: 'Objective-C', variations: ['objc', 'objective c'], weight: 1.4, isCore: false },
  { name: 'Xcode', variations: ['x code'], weight: 1.6, isCore: true },
  { name: 'CocoaPods', variations: ['cocoapods', 'pods'], weight: 1.3, isCore: false },
  { name: 'Swift Package Manager', variations: ['spm', 'swift pm'], weight: 1.3, isCore: false },
  { name: 'Core Data', variations: ['coredata'], weight: 1.4, isCore: false },
  { name: 'Core Animation', variations: ['coreanimation'], weight: 1.2, isCore: false },
  { name: 'Core Graphics', variations: ['coregraphics'], weight: 1.2, isCore: false },
  { name: 'AVFoundation', variations: ['av foundation'], weight: 1.3, isCore: false },
  { name: 'ARKit', variations: ['ar kit', 'arkit sdk'], weight: 1.3, isCore: false },
  { name: 'MapKit', variations: ['map kit'], weight: 1.2, isCore: false },
  { name: 'HealthKit', variations: ['health kit'], weight: 1.2, isCore: false },
  { name: 'WatchKit', variations: ['watch kit', 'apple watch'], weight: 1.2, isCore: false },
  { name: 'StoreKit', variations: ['store kit', 'in-app purchase'], weight: 1.2, isCore: false },
  { name: 'Push Notifications', variations: ['apns', 'apple push notification'], weight: 1.3, isCore: false },
  { name: 'TestFlight', variations: ['test flight'], weight: 1.2, isCore: false },
  { name: 'App Store Connect', variations: ['app store', 'itunes connect'], weight: 1.3, isCore: false },
  { name: 'Combine', variations: ['combine framework'], weight: 1.4, isCore: false },
  { name: 'Realm', variations: ['realm database'], weight: 1.3, isCore: false },
  { name: 'Alamofire', variations: [], weight: 1.2, isCore: false },
  { name: 'Fastlane', variations: ['fast lane'], weight: 1.4, isCore: false },
  { name: 'RxSwift', variations: ['rx swift', 'reactive swift'], weight: 1.3, isCore: false },
  { name: 'SnapKit', variations: ['snap kit'], weight: 1.1, isCore: false },

  // Android Development
  { name: 'Android', variations: ['android development', 'android developer'], weight: 2.0, isCore: true },
  { name: 'Kotlin', variations: ['kotlin lang'], weight: 2.0, isCore: true },
  { name: 'Java', variations: ['java android'], weight: 1.8, isCore: true },
  { name: 'Jetpack Compose', variations: ['compose', 'android compose'], weight: 1.8, isCore: false },
  { name: 'Android Studio', variations: ['android-studio'], weight: 1.6, isCore: true },
  { name: 'Android SDK', variations: ['android-sdk'], weight: 1.6, isCore: true },
  { name: 'Android Jetpack', variations: ['jetpack', 'androidx'], weight: 1.5, isCore: false },
  { name: 'Gradle', variations: ['gradle build'], weight: 1.4, isCore: false },
  { name: 'Room', variations: ['room database', 'room persistence'], weight: 1.4, isCore: false },
  { name: 'Retrofit', variations: ['retrofit2'], weight: 1.4, isCore: false },
  { name: 'OkHttp', variations: ['okhttp3'], weight: 1.3, isCore: false },
  { name: 'Dagger', variations: ['dagger2', 'dagger-hilt'], weight: 1.4, isCore: false },
  { name: 'Hilt', variations: ['dagger hilt'], weight: 1.4, isCore: false },
  { name: 'Koin', variations: ['koin di'], weight: 1.3, isCore: false },
  { name: 'LiveData', variations: ['live data'], weight: 1.3, isCore: false },
  { name: 'ViewModel', variations: ['view model', 'mvvm'], weight: 1.4, isCore: false },
  { name: 'Navigation Component', variations: ['android navigation'], weight: 1.3, isCore: false },
  { name: 'WorkManager', variations: ['work manager'], weight: 1.2, isCore: false },
  { name: 'DataStore', variations: ['data store'], weight: 1.2, isCore: false },
  { name: 'Coroutines', variations: ['kotlin coroutines'], weight: 1.5, isCore: false },
  { name: 'Flow', variations: ['kotlin flow'], weight: 1.4, isCore: false },
  { name: 'RxJava', variations: ['rx java', 'rxandroid'], weight: 1.3, isCore: false },
  { name: 'ProGuard', variations: ['r8', 'code shrinking'], weight: 1.1, isCore: false },
  { name: 'Play Console', variations: ['google play console', 'play store'], weight: 1.3, isCore: false },
  { name: 'Firebase', variations: ['firebase sdk'], weight: 1.5, isCore: false },
  { name: 'FCM', variations: ['firebase cloud messaging', 'push notifications'], weight: 1.3, isCore: false },
  { name: 'Glide', variations: ['glide image'], weight: 1.2, isCore: false },
  { name: 'Coil', variations: ['coil image'], weight: 1.2, isCore: false },
  { name: 'Picasso', variations: [], weight: 1.1, isCore: false },
  { name: 'Espresso', variations: ['android espresso'], weight: 1.3, isCore: false },
  { name: 'Robolectric', variations: [], weight: 1.1, isCore: false },
  { name: 'LeakCanary', variations: ['leak canary'], weight: 1.1, isCore: false },

  // State Management (Cross-Platform)
  { name: 'Redux', variations: ['react native redux'], weight: 1.4, isCore: false },
  { name: 'MobX', variations: ['mobx-react-native'], weight: 1.2, isCore: false },
  { name: 'Provider', variations: ['flutter provider'], weight: 1.3, isCore: false },
  { name: 'Riverpod', variations: [], weight: 1.3, isCore: false },
  { name: 'BLoC', variations: ['flutter bloc', 'business logic component'], weight: 1.4, isCore: false },
  { name: 'GetX', variations: ['flutter getx'], weight: 1.2, isCore: false },
  { name: 'Zustand', variations: [], weight: 1.2, isCore: false },
  { name: 'Jotai', variations: [], weight: 1.1, isCore: false },
  { name: 'Recoil', variations: [], weight: 1.1, isCore: false },

  // Navigation
  { name: 'React Navigation', variations: ['react-navigation'], weight: 1.4, isCore: false },
  { name: 'Navigator', variations: ['flutter navigator', 'go router'], weight: 1.3, isCore: false },
  { name: 'Deep Linking', variations: ['deep links', 'universal links', 'app links'], weight: 1.3, isCore: false },

  // Storage & Databases
  { name: 'SQLite', variations: ['sqlite3'], weight: 1.4, isCore: false },
  { name: 'Realm', variations: ['realm mobile'], weight: 1.3, isCore: false },
  { name: 'AsyncStorage', variations: ['async storage'], weight: 1.2, isCore: false },
  { name: 'MMKV', variations: [], weight: 1.1, isCore: false },
  { name: 'Hive', variations: ['flutter hive'], weight: 1.2, isCore: false },
  { name: 'ObjectBox', variations: ['object box'], weight: 1.1, isCore: false },
  { name: 'WatermelonDB', variations: ['watermelon db'], weight: 1.1, isCore: false },

  // Networking
  { name: 'Dio', variations: ['flutter dio'], weight: 1.2, isCore: false },
  { name: 'Chopper', variations: ['flutter chopper'], weight: 1.0, isCore: false },
  { name: 'Apollo', variations: ['apollo client mobile'], weight: 1.2, isCore: false },

  // Testing
  { name: 'XCTest', variations: ['xcuitest'], weight: 1.3, isCore: false },
  { name: 'Appium', variations: [], weight: 1.4, isCore: false },
  { name: 'Detox', variations: ['wix detox'], weight: 1.3, isCore: false },
  { name: 'Flutter Test', variations: ['flutter testing'], weight: 1.2, isCore: false },
  { name: 'Maestro', variations: ['mobile maestro'], weight: 1.2, isCore: false },

  // CI/CD & Distribution
  { name: 'Fastlane', variations: [], weight: 1.4, isCore: false },
  { name: 'Bitrise', variations: [], weight: 1.3, isCore: false },
  { name: 'App Center', variations: ['appcenter', 'visual studio app center'], weight: 1.3, isCore: false },
  { name: 'Codemagic', variations: ['code magic'], weight: 1.2, isCore: false },
  { name: 'CircleCI', variations: ['circle ci mobile'], weight: 1.2, isCore: false },
  { name: 'Firebase App Distribution', variations: ['firebase distribution'], weight: 1.2, isCore: false },

  // Analytics & Monitoring
  { name: 'Firebase Analytics', variations: ['google analytics mobile'], weight: 1.3, isCore: false },
  { name: 'Crashlytics', variations: ['firebase crashlytics'], weight: 1.3, isCore: false },
  { name: 'Sentry', variations: ['sentry mobile'], weight: 1.3, isCore: false },
  { name: 'Mixpanel', variations: [], weight: 1.1, isCore: false },
  { name: 'Amplitude', variations: [], weight: 1.1, isCore: false },
  { name: 'Instabug', variations: [], weight: 1.1, isCore: false },

  // Concepts & Architecture
  { name: 'MVVM', variations: ['model view viewmodel'], weight: 1.4, isCore: false },
  { name: 'MVC', variations: ['model view controller'], weight: 1.2, isCore: false },
  { name: 'MVP', variations: ['model view presenter'], weight: 1.2, isCore: false },
  { name: 'Clean Architecture', variations: ['clean arch'], weight: 1.3, isCore: false },
  { name: 'Dependency Injection', variations: ['di', 'ioc'], weight: 1.3, isCore: false },
  { name: 'Offline First', variations: ['offline-first', 'offline support'], weight: 1.2, isCore: false },
  { name: 'Responsive Design', variations: ['responsive mobile', 'adaptive layout'], weight: 1.2, isCore: false },
  { name: 'Accessibility', variations: ['a11y', 'mobile accessibility'], weight: 1.3, isCore: false },
  { name: 'App Performance', variations: ['mobile performance', 'performance optimization'], weight: 1.3, isCore: false },
  { name: 'Memory Management', variations: ['memory optimization'], weight: 1.2, isCore: false },
  { name: 'Battery Optimization', variations: ['battery life', 'power management'], weight: 1.1, isCore: false },
];

/**
 * Get patterns for ATS matching
 */
export function getMobilePatterns(): [RegExp, string][] {
  return MOBILE_KEYWORDS.map(kw => {
    const allTerms = [kw.name, ...kw.variations];
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    return [pattern, kw.name];
  });
}
