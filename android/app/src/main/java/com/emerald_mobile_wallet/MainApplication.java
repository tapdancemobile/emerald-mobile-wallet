package com.emerald_mobile_wallet;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements ReactApplication {

@Override
       public void onCreate() {
         super.onCreate();
       }

        @Override
       public boolean isDebug() {
           // Make sure you are using BuildConfig from your own application
           return true;//BuildConfig.DEBUG;
       }


      @Override
      public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new VectorIconsPackage()
        );
      }

       @Override
          public String getJSMainModuleName() {
              return "index";
          }
}
