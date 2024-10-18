import * as LaunchDarkly from "@launchdarkly/node-server-sdk";

// Set sdkKey to your LaunchDarkly SDK key.
const sdkKey = "";

function showMessage(s: string) {
	console.log("*** " + s);
	console.log("");
}

const client = LaunchDarkly.init(sdkKey);

client.once("ready", function () {
	showMessage("SDK successfully initialized!");
	true;
});
