# HomeAutomation

In this project i am planning to use Raspberry pi as central computer to which will run nodejs server.
There will many other client nodes for which i will be using ESP8266 because its cheap and can easily connect to wifi.
These client nodes will communicate with the main pi server using local wifi network. 

                    Android App
                        |
                        |
                        |
                       \|/
                RaspberryPi(nodejs)
                /               \
               /                 \
              /                   \   
        ES8266(lua)            ES8266(lua)
            /
           /
    Other sensors, controllers



Front end for this nodejs server will be a android app. This app will show all the details needed on dashboard and will 
also allow me to control home appliances.

This whole project will be opensource and i will also be posting blog posts and videos of this project.

