# Tuto React Native



### Android config

Into android folder

create *local.properties* file

Add

    sdk.dir = /Users/<yourcomputername>/Library/Android/sdk

### Mac And Android issue :

Open ~/.zshrc using editor. In my case I use vim

    vim ~/.zshrc

Add the following line for the path.

    export ANDROID_HOME="/Users/<yourcomputername>/Library/Android/sdk"
    export PATH=$ANDROID_HOME/emulator:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
    export PATH=$ANDROID_HOME/tools/bin:$PATH
    export PATH=$ANDROID_HOME/platform-tools:$PATH

Make sure to add the above line correctly else it will give you a weird error.

Save the changes and close the editor.

Finally, now compile your changes

    source ~/.zshrc


## Credits

https://www.tutorialspoint.com/react_native/react_native_quick_guide.htm
