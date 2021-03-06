# hyper-sw-demo
## Summary
A demonstration of the OpenFin [Hyperblotter](https://github.com/openfin/hyperblotter/) App, with offline support via ServiceWorkers.

#### You can build offline support in OpenFin exactly as you would in any Web App - using the ServiceWorker standard!

This App runs locally and calls Hyperblotter in production for most resources.  

To test, start the app, then disconnect from the network.  You should be able to restart with full UI with no network connection.  Try shutting down the local server for the App, it will still run (with some caveats).

You can manage the ServiceWorker (sw.js) from the resources tab in the Chrome Dev tools.

Big thanks to Jake Archibald's [Simple ServiceWorker tutorial](https://github.com/jakearchibald/simple-serviceworker-tutorial) from which this example borrows heavily.

## Setup
```sh
$ npm install
$ npm start
$ openfin -l app.json
```

## Notes
#### What about chrome://serviceworker-internals?
Unfortunately, this won't currently work in OpenFin 6.x  However, you can still access and manage ServiceWorks from the Chrome Dev Tools.

## License
MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

https://openfin.co/developer-agreement/ <br/>
https://openfin.co/licensing/

## Support
Please enter an issue in the repo for any questions or problems. Alternatively, please contact us at support@openfin.co 
