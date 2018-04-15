// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDB13U5acOJVsAoVlavx-4WSandJalTgWY",
		authDomain: "orbi-30e42.firebaseapp.com",
		databaseURL: "https://orbi-30e42.firebaseio.com",
		projectId: "orbi-30e42",
		storageBucket: "orbi-30e42.appspot.com",
		messagingSenderId: "692373898410"
	},
 config : {
    apiKey: "AIzaSyDlIYGX3Jmrvq1H_qPcnqvs2hhLn0POx6Q",
    authDomain: "weblogin-ce84b.firebaseapp.com",
    databaseURL: "https://weblogin-ce84b.firebaseio.com",
    projectId: "weblogin-ce84b",
    storageBucket: "weblogin-ce84b.appspot.com",
    messagingSenderId: "1056950958780"
  }
};
