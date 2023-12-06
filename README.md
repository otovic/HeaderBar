# React Native package that helps you add screen header bars or app bars in your React Native projects.

## Installation

This package requires the default React Native navigation package and (probably) won't work with other packages. React Native Navigation package is necessary because header bar uses the navigation variable from Navigation package to navigate back or if you add headre actions, to navigate to other screens that you specify.

npm install @react-navigation/native
npm install @react-navigation/stack

## Usage

<img src="gitimages/InComponent.png" width="100%" title="hover text">

There are various different props that you can pass to header bar to customize it. 

### CustomStyle prop

With this prop you can customize the header bar style. You can change the background color, elevation and height of the header bar. Here is the type:

<img src="gitimages/customStyle.png" width="50%" title="hover text">

### Navigation prop

This prop is necessary if navigate back arrow is enabled in header or if you want to travel to other screens with header actions. You need to pass the navigation variable from React Navigation package to this prop. 

<img src="gitimages/navigation.png" width="50%" title="hover text">

### NavigateBack prop

If this prop is set to true, a back arrow will be added to the left side of the header bar. When pressed, it will navigate back to the previous screen.

<img src="gitimages/looks.jpg" width="50%" title="hover text">

### Title prop

This prop is used to set the title of the header bar. It will display on the left of the header bar.

<img src="gitimages/looks.jpg" width="50%" title="hover text">

### TitleStyle prop

With this prop you can customize the title style. You can change the color, font size and font weight of the title. Here is all available options:

<img src="gitimages/headerTitleCustomization.png" width="50%" title="hover text">

### Actions prop

With this prop you can add actions to the header bar. You can add as many actions as you want (it wont fit on the screen). They will be displayed on the right side of the header bar. The 2 arrows you see in the image below are actions. You can add a callback to execute when they are clicked

<img src="gitimages/actionProp.png" width="50%" title="hover text">

<img src="gitimages/looks.jpg" width="50%" title="hover text">

### CONCLUSION

I went through all major props that you can pass to the header bar. There are some other props as well that can help you customize your header bar. These include StatusBarStyle and actionStyle. With StatusBarStyle you can change the status bar style. With actionStyle you can change the tint color of the action icons. Here is the type of these props:

<img src="gitimages/actionProp.png" width="50%" title="hover text">

<img src="gitimages/statusBarStyle.png" width="50%" title="hover text">

### All props

<img src="gitimages/allProps.png" width="50%" title="hover text">